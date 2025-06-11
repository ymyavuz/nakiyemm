import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


// Toplam fiyatı hesapla (MT * Birim Fiyat)
const hesaplaToplamFiyat = (sefer: any, birimFiyat: number): number => {
  // YAP-İstanbul (sirket_id=2) için birim fiyat doğrudan toplam fiyat olarak kullanılır
  if (sefer.sirket_id === 2) {
    return birimFiyat;
  }
  
  // Diğer şirketler için MT * Birim Fiyat formülü uygulanır
  const mt = sefer.mt || 0;
  return mt * birimFiyat;
};

export async function GET(request: NextRequest) {
  try {
    // Tüm seferler
    const tumSeferler = await prisma.seferler.findMany({
      include: {
        sirket: true,
        arac: true
      }
    });

    // Toplam ciro hesaplaması - MT * Birim Fiyat formülü ile
    const toplamCiro = tumSeferler.reduce((toplam, sefer) => {
      const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      return toplam + toplamFiyat;
    }, 0);

    return NextResponse.json({
      toplamCiro,
      seferSayisi: tumSeferler.length,
      hesaplamaNotlari: {
        genel: 'Hesaplamalar MT × Birim Fiyat formülü ile yapılmıştır',
        yapIstanbulOzel: 'YAP-İstanbul (ID: 2) için birim fiyat = toplam fiyat olarak hesaplanmıştır'
      }
    });

  } catch (error) {
    console.error('Ciro hesaplanırken hata:', error);
    return NextResponse.json(
      { error: 'Ciro hesaplanırken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 