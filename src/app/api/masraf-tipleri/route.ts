import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const masrafTipleri = await prisma.aracMasrafTipleri.findMany({
      orderBy: {
        tip_adi: 'asc'
      }
    });

    return NextResponse.json(masrafTipleri);

  } catch (error) {
    console.error('Masraf tipleri getirme hatası:', error);
    return NextResponse.json(
      { error: 'Masraf tipleri getirilirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tip_adi } = body;

    // Validasyon
    if (!tip_adi) {
      return NextResponse.json(
        { error: 'Tip adı zorunludur' },
        { status: 400 }
      );
    }

    // Aynı isimde tip var mı kontrol et
    const mevcutTip = await prisma.aracMasrafTipleri.findFirst({
      where: {
        tip_adi: tip_adi.trim()
      }
    });

    if (mevcutTip) {
      return NextResponse.json(
        { error: 'Bu isimde bir masraf tipi zaten mevcut' },
        { status: 400 }
      );
    }

    // Yeni masraf tipi oluştur
    const yeniTip = await prisma.aracMasrafTipleri.create({
      data: {
        tip_adi: tip_adi.trim()
      }
    });

    return NextResponse.json({
      success: true,
      masrafTipi: yeniTip
    });

  } catch (error) {
    console.error('Masraf tipi ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Masraf tipi eklenirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 