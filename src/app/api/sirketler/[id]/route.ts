import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Şirket bilgilerini getir
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Geçersiz şirket ID' },
        { status: 400 }
      );
    }

    const sirket = await prisma.sirketler.findUnique({
      where: { sirket_id: id }
    });

    if (!sirket) {
      return NextResponse.json(
        { error: 'Şirket bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(sirket);
    
  } catch (error: any) {
    console.error('Şirket getirme hatası:', error);
    return NextResponse.json(
      { error: 'Şirket bilgileri getirilirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

// Şirket bilgilerini güncelle
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);
    const body = await request.json();
    const { sirket_adi, vergi_numarasi } = body;

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Geçersiz şirket ID' },
        { status: 400 }
      );
    }

    if (!sirket_adi && !vergi_numarasi) {
      return NextResponse.json(
        { error: 'Güncellenecek en az bir alan belirtilmelidir' },
        { status: 400 }
      );
    }

    // Şirketin varlığını kontrol et
    const mevcutSirket = await prisma.sirketler.findUnique({
      where: { sirket_id: id }
    });

    if (!mevcutSirket) {
      return NextResponse.json(
        { error: 'Şirket bulunamadı' },
        { status: 404 }
      );
    }

    // Şirketi güncelle
    const guncellenenSirket = await prisma.sirketler.update({
      where: { sirket_id: id },
      data: {
        ...(sirket_adi && { sirket_adi }),
        ...(vergi_numarasi && { vergi_numarasi })
      }
    });

    return NextResponse.json({
      basarili: true,
      mesaj: 'Şirket başarıyla güncellendi',
      sirket: guncellenenSirket
    });
    
  } catch (error: any) {
    console.error('Şirket güncelleme hatası:', error);
    
    return NextResponse.json(
      { error: 'Şirket güncellenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

// Şirket sil
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Geçersiz şirket ID' },
        { status: 400 }
      );
    }

    // Şirketin varlığını kontrol et
    const mevcutSirket = await prisma.sirketler.findUnique({
      where: { sirket_id: id }
    });

    if (!mevcutSirket) {
      return NextResponse.json(
        { error: 'Şirket bulunamadı' },
        { status: 404 }
      );
    }

    // İlişkili kayıtları kontrol et
    const iliskiliAraclar = await prisma.araclar.count({
      where: { sirket_id: id }
    });

    if (iliskiliAraclar > 0) {
      return NextResponse.json(
        { error: 'Bu şirketle ilişkili araçlar bulunduğu için silinemez' },
        { status: 400 }
      );
    }

    // Şirketi sil
    await prisma.sirketler.delete({
      where: { sirket_id: id }
    });

    return NextResponse.json({
      basarili: true,
      mesaj: 'Şirket başarıyla silindi'
    });
    
  } catch (error: any) {
    console.error('Şirket silme hatası:', error);
    
    // İlişkisel kısıtlama hatası kontrolü
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Bu şirketle ilişkili kayıtlar bulunduğu için silinemez' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Şirket silinirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 