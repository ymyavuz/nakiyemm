import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


export async function POST(request: NextRequest) {
  try {
    const { seferId, sofore_odenen_ucret } = await request.json();

    // Parametrelerin doğruluğunu kontrol et
    if (!seferId || sofore_odenen_ucret === undefined) {
      return NextResponse.json(
        { error: 'Sefer ID ve fiyat bilgisi gereklidir' },
        { status: 400 }
      );
    }

    // Sayısal değere dönüştür
    const sefer_id = parseInt(seferId.toString());
    const ucret = parseFloat(sofore_odenen_ucret.toString());
    
    if (isNaN(sefer_id) || isNaN(ucret)) {
      return NextResponse.json(
        { error: 'Geçersiz Sefer ID veya fiyat bilgisi' },
        { status: 400 }
      );
    }

    // Veritabanında fiyat güncelleme
    const guncellenenSefer = await prisma.seferler.update({
      where: {
        sefer_id: sefer_id
      },
      data: {
        sofore_odenen_ucret: ucret
      }
    });

    return NextResponse.json(guncellenenSefer);
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