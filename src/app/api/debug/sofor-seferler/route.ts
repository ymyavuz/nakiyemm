import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const soforAdi = searchParams.get('sofor') || 'Tahsin'; // Varsayılan olarak Tahsin
    const ay = searchParams.get('ay') ? parseInt(searchParams.get('ay') || '1') : 1; // Varsayılan olarak Ocak (1. ay)
    const donem = searchParams.get('donem') ? parseInt(searchParams.get('donem') || '0') : 0; // 0 tüm dönemler
    const yil = searchParams.get('yil') || new Date().getFullYear().toString();

    // Önce soforun aracını bulalım
    const arac = await prisma.araclar.findFirst({
      where: {
        sofor_adi: {
          contains: soforAdi
        }
      }
    });

    if (!arac) {
      return NextResponse.json({ error: `${soforAdi} isimli şoför bulunamadı` }, { status: 404 });
    }

    // Filtrelemeyi ay ve donem değerlerine göre yap
    const where: any = {
      arac_id: arac.arac_id,
      ay: ay
    };

    // Eğer belirli bir dönem isteniyorsa filtreye ekle
    if (donem > 0) {
      where.donem = donem;
    }

    // Seferleri getir
    const seferler = await prisma.seferler.findMany({
      where,
      include: {
        sirket: true
      },
      orderBy: {
        donem: 'asc'
      }
    });

    // Seferlerin detaylı hesaplamalarını yapalım
    const detayliSeferler = seferler.map(sefer => {
      // Ham gelir hesaplama - YAP-İstanbul için özel durum
      let hamGelir = 0;
      let hesaplamaYontemi = '';
      
      if (sefer.sirket_id === 2) { // YAP-İstanbul için MT ile çarpma yapılmayacak
        hamGelir = sefer.sofore_odenen_ucret || 0;
        hesaplamaYontemi = 'sofore_odenen_ucret (MT ile çarpılmadı)';
      } else {
        // Diğer tüm şirketler için MT ile çarpılacak
        const birimFiyati = sefer.sofore_odenen_ucret || 0;
        const mt = sefer.mt || 0;
        hamGelir = birimFiyati * mt;
        hesaplamaYontemi = 'sofore_odenen_ucret * MT';
      }

      // KDV ve tevkifat hesaplama - şoför hesaplamalarında KDV'nin %20'si olarak
      const kdvTutari = hamGelir * 0.20; // %20 KDV
      const kdvDahilTutar = hamGelir + kdvTutari; // KDV dahil tutar
      const tevkifatTutari = kdvTutari * 0.20; // tevkifat KDV'nin %20'si olmalı
      const netGelir = kdvDahilTutar - tevkifatTutari; // Tevkifat düşülmüş gelir

      return {
        sefer_id: sefer.sefer_id,
        irsaliye_numarasi: sefer.irsaliye_numarasi,
        irsaliye_tarihi: sefer.irsaliye_tarihi,
        tahliye_yeri: sefer.tahliye_yeri,
        sirket_id: sefer.sirket_id,
        sirket_adi: sefer.sirket?.sirket_adi || 'Bilinmeyen',
        mt: sefer.mt,
        sirketten_alinan_ucret: sefer.sirketten_alinan_ucret,
        sofore_odenen_ucret: sefer.sofore_odenen_ucret,
        hesaplama: {
          yontem: hesaplamaYontemi,
          hamGelir,
          kdvTutari,
          kdvDahilTutar,
          tevkifatTutari,
          netGelir
        }
      };
    });

    // Toplam hesaplamaları yap
    const toplamHamGelir = detayliSeferler.reduce((toplam, sefer) => toplam + sefer.hesaplama.hamGelir, 0);
    const toplamKDV = detayliSeferler.reduce((toplam, sefer) => toplam + sefer.hesaplama.kdvTutari, 0);
    const toplamKDVDahil = detayliSeferler.reduce((toplam, sefer) => toplam + sefer.hesaplama.kdvDahilTutar, 0);
    const toplamTevkifat = detayliSeferler.reduce((toplam, sefer) => toplam + sefer.hesaplama.tevkifatTutari, 0);
    const toplamNetGelir = detayliSeferler.reduce((toplam, sefer) => toplam + sefer.hesaplama.netGelir, 0);

    return NextResponse.json({
      sofor: soforAdi,
      arac: arac,
      donem: {
        ay: ay,
        yil: yil,
        baslangic: new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`),
        bitis: new Date(new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`)).setMonth(new Date(`${yil}-${ay.toString().padStart(2, '0')}-01`).getMonth() + 1)
      },
      seferSayisi: seferler.length,
      seferler: detayliSeferler,
      toplamlar: {
        hamGelir: toplamHamGelir,
        kdvTutari: toplamKDV,
        kdvDahilTutar: toplamKDVDahil,
        tevkifatTutari: toplamTevkifat,
        netGelir: toplamNetGelir
      }
    });

  } catch (error: any) {
    console.error('Debug endpoint hatası:', error);
    return NextResponse.json(
      { error: 'Seferler alınırken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 