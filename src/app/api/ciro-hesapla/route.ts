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

// KDV hesapla (gelirin %20'si)
const hesaplaKDV = (gelir: number): number => {
  return gelir * 0.20; // %20 KDV
};

// KDV dahil gelir hesapla
const hesaplaKDVDahilGelir = (sefer: any, birimFiyat: number): number => {
  const temelGelir = hesaplaToplamFiyat(sefer, birimFiyat);
  const kdv = hesaplaKDV(temelGelir);
  return temelGelir + kdv;
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

    // Toplam ciro hesaplaması - KDV dahil
    const toplamCiroKDVHaric = tumSeferler.reduce((toplam, sefer) => {
      const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      return toplam + toplamFiyat;
    }, 0);

    // KDV dahil toplam ciro hesapla
    const toplamCiroKDVDahil = tumSeferler.reduce((toplam, sefer) => {
      const kdvDahilFiyat = hesaplaKDVDahilGelir(sefer, sefer.sirketten_alinan_ucret);
      return toplam + kdvDahilFiyat;
    }, 0);

    const toplamKDV = toplamCiroKDVDahil - toplamCiroKDVHaric;

    return NextResponse.json({
      toplamCiro: toplamCiroKDVDahil, // Artık KDV dahil ciro döndürüyoruz
      toplamCiroKDVHaric: toplamCiroKDVHaric, // KDV hariç değer de mevcut
      toplamKDV: toplamKDV, // KDV tutarı
      seferSayisi: tumSeferler.length,
      hesaplamaNotlari: {
        genel: 'Hesaplamalar MT × Birim Fiyat formülü ile yapılmıştır',
        yapIstanbulOzel: 'YAP-İstanbul (ID: 2) için birim fiyat = toplam fiyat olarak hesaplanmıştır',
        kdv: 'Ana ciro değeri KDV dahil, ayrıca KDV hariç değer de sunulmaktadır (%20 KDV)'
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