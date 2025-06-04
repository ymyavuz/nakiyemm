import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

// Araç bilgilerini getir
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const aracId = parseInt(id);

    if (isNaN(aracId)) {
      return NextResponse.json(
        { error: 'Geçersiz araç ID' },
        { status: 400 }
      );
    }

    const arac = await prisma.araclar.findUnique({
      where: { arac_id: aracId },
      include: { sirket: true }
    });

    if (!arac) {
      return NextResponse.json(
        { error: 'Araç bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(arac);
    
  } catch (error: any) {
    console.error('Araç getirme hatası:', error);
    return NextResponse.json(
      { error: 'Araç bilgileri getirilirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

// Araç bilgilerini güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const aracId = parseInt(id);
    const body = await request.json();
    const { plaka, sofor_adi, vergi_numarasi, sirket_id } = body;

    if (isNaN(aracId)) {
      return NextResponse.json(
        { error: 'Geçersiz araç ID' },
        { status: 400 }
      );
    }

    if (!plaka && !sofor_adi && !vergi_numarasi && !sirket_id) {
      return NextResponse.json(
        { error: 'Güncellenecek en az bir alan belirtilmelidir' },
        { status: 400 }
      );
    }

    // Aracın varlığını kontrol et
    const mevcutArac = await prisma.araclar.findUnique({
      where: { arac_id: aracId }
    });

    if (!mevcutArac) {
      return NextResponse.json(
        { error: 'Araç bulunamadı' },
        { status: 404 }
      );
    }

    // Şirket ID değiştiyse, yeni şirketin varlığını kontrol et
    if (sirket_id && mevcutArac.sirket_id !== parseInt(sirket_id.toString())) {
      const yeniSirket = await prisma.sirketler.findUnique({
        where: { sirket_id: parseInt(sirket_id.toString()) }
      });

      if (!yeniSirket) {
        return NextResponse.json(
          { error: 'Belirtilen şirket bulunamadı' },
          { status: 400 }
        );
      }
    }

    // Aracı güncelle
    const guncellenenArac = await prisma.araclar.update({
      where: { arac_id: aracId },
      data: {
        ...(plaka && { plaka }),
        ...(sofor_adi && { sofor_adi }),
        ...(vergi_numarasi && { vergi_numarasi }),
        ...(sirket_id && { sirket_id: parseInt(sirket_id.toString()) })
      }
    });

    return NextResponse.json({
      basarili: true,
      mesaj: 'Araç başarıyla güncellendi',
      arac: guncellenenArac
    });
    
  } catch (error: any) {
    console.error('Araç güncelleme hatası:', error);
    
    return NextResponse.json(
      { error: 'Araç güncellenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

// Araç sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const aracId = parseInt(id);

    if (isNaN(aracId)) {
      return NextResponse.json(
        { error: 'Geçersiz araç ID' },
        { status: 400 }
      );
    }

    // Aracın varlığını kontrol et
    const mevcutArac = await prisma.araclar.findUnique({
      where: { arac_id: aracId }
    });

    if (!mevcutArac) {
      return NextResponse.json(
        { error: 'Araç bulunamadı' },
        { status: 404 }
      );
    }

    // İlişkili seferleri kontrol et
    const iliskiliSeferler = await prisma.seferler.count({
      where: { arac_id: aracId }
    });

    if (iliskiliSeferler > 0) {
      return NextResponse.json(
        { error: 'Bu araçla ilişkili seferler bulunduğu için silinemez' },
        { status: 400 }
      );
    }

    // İlişkili ödemeleri kontrol et
    const iliskiliOdemeler = await prisma.aracOdemeKayitlari.count({
      where: { arac_id: aracId }
    });

    if (iliskiliOdemeler > 0) {
      return NextResponse.json(
        { error: 'Bu araçla ilişkili ödeme kayıtları bulunduğu için silinemez' },
        { status: 400 }
      );
    }

    // Aracı sil
    await prisma.araclar.delete({
      where: { arac_id: aracId }
    });

    return NextResponse.json({
      basarili: true,
      mesaj: 'Araç başarıyla silindi'
    });
    
  } catch (error: any) {
    console.error('Araç silme hatası:', error);
    
    // İlişkisel kısıtlama hatası kontrolü
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Bu araçla ilişkili kayıtlar bulunduğu için silinemez' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Araç silinirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 