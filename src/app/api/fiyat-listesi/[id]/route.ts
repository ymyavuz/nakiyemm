import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


// PUT isteği - Belirli bir fiyat kaydını güncelle
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const fiyat_listesi_id = parseInt(params.id);
    
    if (isNaN(fiyat_listesi_id)) {
      return NextResponse.json(
        { error: 'Geçersiz fiyat listesi kimliği' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Sadece değiştirilmek istenen alanları güncelle
    const guncellenebilirAlanlar: Record<string, any> = {};
    
    if (body.ucret !== undefined) {
      guncellenebilirAlanlar.ucret = Number(body.ucret);
    }
    
    if (body.sofor_ucreti !== undefined) {
      guncellenebilirAlanlar.sofor_ucreti = body.sofor_ucreti === null ? null : Number(body.sofor_ucreti);
    }
    
    if (Object.keys(guncellenebilirAlanlar).length === 0) {
      return NextResponse.json(
        { error: 'Güncellenecek alan bilgisi sağlanmadı' },
        { status: 400 }
      );
    }

    // Fiyat kaydını güncelle
    const guncelFiyat = await prisma.sirketFiyatListesi.update({
      where: {
        fiyat_listesi_id: fiyat_listesi_id,
      },
      data: guncellenebilirAlanlar,
    });

    return NextResponse.json(guncelFiyat);
  } catch (error) {
    console.error('Fiyat güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Fiyat güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET isteği - Belirli bir fiyat kaydını getir
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const fiyat_listesi_id = parseInt(params.id);
    
    if (isNaN(fiyat_listesi_id)) {
      return NextResponse.json(
        { error: 'Geçersiz fiyat listesi kimliği' },
        { status: 400 }
      );
    }

    const fiyat = await prisma.sirketFiyatListesi.findUnique({
      where: {
        fiyat_listesi_id: fiyat_listesi_id,
      },
      include: {
        sirket: {
          select: {
            sirket_adi: true,
          },
        },
      },
    });

    if (!fiyat) {
      return NextResponse.json(
        { error: 'Fiyat kaydı bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(fiyat);
  } catch (error) {
    console.error('Fiyat getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Fiyat getirilirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE isteği - Belirli bir fiyat kaydını sil
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const fiyat_listesi_id = parseInt(params.id);
    
    if (isNaN(fiyat_listesi_id)) {
      return NextResponse.json(
        { error: 'Geçersiz fiyat listesi kimliği' },
        { status: 400 }
      );
    }

    // Fiyat kaydını sil
    await prisma.sirketFiyatListesi.delete({
      where: {
        fiyat_listesi_id: fiyat_listesi_id,
      },
    });

    return NextResponse.json({
      message: 'Fiyat kaydı başarıyla silindi'
    });
  } catch (error) {
    console.error('Fiyat silinirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Fiyat silinirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 