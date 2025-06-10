import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Çek durumunu güncelle
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const cekId = parseInt(params.id);
    const body = await request.json();
    const { durum } = body;

    if (!durum) {
      return NextResponse.json(
        { error: 'Durum bilgisi gereklidir' },
        { status: 400 }
      );
    }

    // Çek tahsil edildiğinde ödenme tarihini bugün olarak ayarla
    const updateData: any = { durum };
    if (durum === 'tahsil_edildi') {
      updateData.odenme_tarihi = new Date();
    } else if (durum === 'beklemede') {
      // Çek tekrar beklemede durumuna alındığında ödenme tarihini sıfırla
      updateData.odenme_tarihi = null;
    }

    const guncellenenCek = await prisma.cekler.update({
      where: { id: cekId },
      data: updateData
    });

    return NextResponse.json(guncellenenCek);
  } catch (error: any) {
    console.error('Çek güncelleme hatası:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Çek bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Çek güncellenirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// Çek sil
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const cekId = parseInt(params.id);

    await prisma.cekler.delete({
      where: { id: cekId }
    });

    return NextResponse.json({ message: 'Çek başarıyla silindi' });
  } catch (error: any) {
    console.error('Çek silme hatası:', error);
    
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Çek bulunamadı' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Çek silinirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 