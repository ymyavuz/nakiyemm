import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


// GET - Tüm ödeme kayıtlarını getir
export async function GET(request: NextRequest) {
  try {
    const odemeler = await prisma.soforOdemeler.findMany({
      orderBy: {
        tarih: 'desc'
      }
    });

    return NextResponse.json(odemeler);
  } catch (error) {
    console.error('Ödemeler getirme hatası:', error);
    return NextResponse.json(
      { error: 'Ödemeler getirilirken hata oluştu' },
      { status: 500 }
    );
  }
}

// POST - Yeni ödeme ekle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sofor_adi, tutar, aciklama } = body;

    if (!sofor_adi || !tutar) {
      return NextResponse.json(
        { error: 'Şöför adı ve tutar gereklidir' },
        { status: 400 }
      );
    }

    const yeniOdeme = await prisma.soforOdemeler.create({
      data: {
        sofor_adi,
        tutar: parseFloat(tutar),
        aciklama
      }
    });

    return NextResponse.json(yeniOdeme);
  } catch (error) {
    console.error('Ödeme ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Ödeme eklenirken hata oluştu' },
      { status: 500 }
    );
  }
}

// DELETE - Ödeme sil
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID gereklidir' },
        { status: 400 }
      );
    }

    await prisma.soforOdemeler.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: 'Ödeme başarıyla silindi' });
  } catch (error) {
    console.error('Ödeme silme hatası:', error);
    return NextResponse.json(
      { error: 'Ödeme silinirken hata oluştu' },
      { status: 500 }
    );
  }
} 