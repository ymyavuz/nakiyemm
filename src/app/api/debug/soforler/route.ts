import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Tüm araçları ve şöförleri getir
    const araclar = await prisma.araclar.findMany({
      orderBy: {
        sofor_adi: 'asc'
      }
    });

    return NextResponse.json({
      sofor_sayisi: araclar.length,
      soforler: araclar.map(arac => ({
        arac_id: arac.arac_id,
        sofor_adi: arac.sofor_adi,
        plaka: arac.plaka,
        sirket_id: arac.sirket_id,
        vergi_numarasi: arac.vergi_numarasi
      }))
    });
  } catch (error: any) {
    console.error('Debug endpoint hatası:', error);
    return NextResponse.json(
      { error: 'Şöförler alınırken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 