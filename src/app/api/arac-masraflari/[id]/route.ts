import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const masrafId = parseInt(id);

    if (isNaN(masrafId)) {
      return NextResponse.json(
        { error: 'Geçersiz masraf ID' },
        { status: 400 }
      );
    }

    // Masrafın var olup olmadığını kontrol et
    const mevcutMasraf = await prisma.aracOdemeKayitlari.findUnique({
      where: { odeme_id: masrafId }
    });

    if (!mevcutMasraf) {
      return NextResponse.json(
        { error: 'Masraf bulunamadı' },
        { status: 404 }
      );
    }

    // Masrafı sil
    await prisma.aracOdemeKayitlari.delete({
      where: { odeme_id: masrafId }
    });

    return NextResponse.json({
      success: true,
      message: 'Masraf başarıyla silindi'
    });

  } catch (error) {
    console.error('Masraf silme hatası:', error);
    return NextResponse.json(
      { error: 'Masraf silinirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const masrafId = parseInt(id);
    const body = await request.json();
    const { odeme_tutari, odeme_tarihi, aciklama } = body;

    if (isNaN(masrafId)) {
      return NextResponse.json(
        { error: 'Geçersiz masraf ID' },
        { status: 400 }
      );
    }

    // Validasyon
    if (!odeme_tutari || !odeme_tarihi) {
      return NextResponse.json(
        { error: 'Ödeme tutarı ve ödeme tarihi zorunludur' },
        { status: 400 }
      );
    }

    // Masrafın var olup olmadığını kontrol et
    const mevcutMasraf = await prisma.aracOdemeKayitlari.findUnique({
      where: { odeme_id: masrafId }
    });

    if (!mevcutMasraf) {
      return NextResponse.json(
        { error: 'Masraf bulunamadı' },
        { status: 404 }
      );
    }

    // Masrafı güncelle
    const guncellenmis = await prisma.aracOdemeKayitlari.update({
      where: { odeme_id: masrafId },
      data: {
        odeme_tutari: parseFloat(odeme_tutari),
        odeme_tarihi: new Date(odeme_tarihi),
        aciklama: aciklama || null
      },
      include: {
        arac: true
      }
    });

    return NextResponse.json({
      success: true,
      masraf: guncellenmis
    });

  } catch (error) {
    console.error('Masraf güncelleme hatası:', error);
    return NextResponse.json(
      { error: 'Masraf güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 