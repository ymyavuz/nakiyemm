import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { arac_id, masraf_tipi_id, odeme_tutari, odeme_tarihi, aciklama } = body;

    // Validasyon
    if (!arac_id || !odeme_tutari || !odeme_tarihi) {
      return NextResponse.json(
        { error: 'Araç ID, ödeme tutarı ve ödeme tarihi zorunludur' },
        { status: 400 }
      );
    }

    // Araç masrafını veritabanına ekle
    const yeniMasraf = await prisma.aracOdemeKayitlari.create({
      data: {
        arac_id: parseInt(arac_id),
        masraf_tipi_id: masraf_tipi_id ? parseInt(masraf_tipi_id) : null,
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
      masraf: yeniMasraf
    });

  } catch (error) {
    console.error('Araç masrafı ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Araç masrafı eklenirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const aracId = searchParams.get('arac_id');

    let whereClause: any = {};
    if (aracId) {
      whereClause.arac_id = parseInt(aracId);
    }

    const masraflar = await prisma.aracOdemeKayitlari.findMany({
      where: whereClause,
      include: {
        arac: true
      },
      orderBy: {
        odeme_tarihi: 'desc'
      }
    });

    return NextResponse.json(masraflar);

  } catch (error) {
    console.error('Araç masrafları getirme hatası:', error);
    return NextResponse.json(
      { error: 'Araç masrafları getirilirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 