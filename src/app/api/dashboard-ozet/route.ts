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

// Tevkifat hesapla (fatura tutarının %4'ü)
const hesaplaTevkifat = (faturaFiyati: number): number => {
  return faturaFiyati * 0.04; // %4 tevkifat
};

export async function GET(request: NextRequest) {
  try {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // JavaScript ayları 0-11 arası
    const currentYear = now.getFullYear();
    const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const previousMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    // Önceki ayın seferlerini al (kar hesaplaması için)
    const oncekiAySeferler = await prisma.seferler.findMany({
      where: {
        ay: previousMonth
      },
      include: {
        sirket: true,
        arac: true
      }
    });

    // Önceki ay kar hesaplaması - şirket bazında
    const sirketKarlari = oncekiAySeferler.reduce((acc: any, sefer) => {
      const sirketId = sefer.sirket_id;
      const sirketAdi = sefer.sirket?.sirket_adi || 'Bilinmeyen Şirket';
      
      if (!acc[sirketId]) {
        acc[sirketId] = {
          sirket_adi: sirketAdi,
          gelir: 0,
          kdv: 0,
          gider: 0,
          soforKdv: 0,
          tevkifat: 0,
          kar: 0
        };
      }
      
      const kdvDahilGelir = hesaplaKDVDahilGelir(sefer, sefer.sirketten_alinan_ucret);
      const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      const kdv = hesaplaKDV(temelGelir);
      const gider = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      
      // Şöför giderlerine de %20 KDV ekle
      const soforKdv = hesaplaKDV(gider);
      
      // Tevkifat hesaplaması - sadece fatura fiyatı varsa hesapla
      let tevkifat = 0;
      if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
        const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
        tevkifat = hesaplaTevkifat(faturaToplamFiyat);
      }
      
      acc[sirketId].gelir += temelGelir; // KDV hariç gelir
      acc[sirketId].kdv += kdv;
      acc[sirketId].gider += gider;
      acc[sirketId].soforKdv += soforKdv; // Şöför gider KDV'si
      acc[sirketId].tevkifat += tevkifat;
      
      return acc;
    }, {});

    // Şirket karlarını hesapla - YAP-İstanbul için özel mantık
    Object.keys(sirketKarlari).forEach(sirketId => {
      const sirket = sirketKarlari[sirketId];
      let toplamGider = 0;
      
      if (parseInt(sirketId) === 2) {
        // YAP-İstanbul için: Ham gider + (Ham gider/5) - (Ham gider/25)
        const hamGider = sirket.gider;
        const kdvTutari = hamGider / 5; // %20 KDV
        const tevkifatTutari = hamGider / 25; // %4 tevkifat
        toplamGider = hamGider + kdvTutari - tevkifatTutari;
      } else {
        toplamGider = sirket.gider + sirket.soforKdv + sirket.tevkifat;
      }
      
      sirket.kar = (sirket.gelir + sirket.kdv) - toplamGider;
    });

    // Şirket karlarını diziye çevir (sıralama yok)
    const sirketKarlariDizi = Object.values(sirketKarlari);

    // Toplam kar hesapla
    const toplamKar = sirketKarlariDizi.reduce((toplam: number, sirket: any) => toplam + sirket.kar, 0);

    // Belirli araçların kar hesaplaması (ID: 3, 4, 6, 8)
    const hedefAraclar = [3, 4, 6, 8];
    
    // Önce araç masraflarını al
    const aracMasraflari = await prisma.aracOdemeKayitlari.findMany({
      where: {
        arac_id: {
          in: hedefAraclar
        },
        odeme_tarihi: {
          gte: new Date(previousMonthYear, previousMonth - 1, 1),
          lt: new Date(previousMonthYear, previousMonth, 1)
        }
      },
      include: {
        arac: true
      }
    });
    
    const aracKarlari = oncekiAySeferler.reduce((acc: any, sefer) => {
      const aracId = sefer.arac_id;
      
      // Sadece hedef araçları işle ve arac_id null değilse
      if (!aracId || !hedefAraclar.includes(aracId)) {
        return acc;
      }
      
      const aracPlaka = sefer.arac?.plaka || `Araç ${aracId}`;
      const soforAdi = sefer.arac?.sofor_adi || 'Bilinmeyen Şöför';
      
      if (!acc[aracId]) {
        acc[aracId] = {
          arac_id: aracId,
          plaka: aracPlaka,
          sofor_adi: soforAdi,
          gelir: 0,
          gider: 0,
          kar: 0,
          seferSayisi: 0
        };
      }
      
      // Araç sahibi açısından: gelir = şöföre ödenen ücret
      const gelir = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret || 0);
      
      acc[aracId].gelir += gelir;
      acc[aracId].seferSayisi += 1;
      
      return acc;
    }, {});

    // Araç masraflarını ekle
    aracMasraflari.forEach(masraf => {
      const aracId = masraf.arac_id;
      if (aracKarlari[aracId]) {
        aracKarlari[aracId].gider += masraf.odeme_tutari;
      }
    });

    // Kar hesapla
    Object.keys(aracKarlari).forEach(aracId => {
      aracKarlari[aracId].kar = aracKarlari[aracId].gelir - aracKarlari[aracId].gider;
    });

    // Araç karlarını diziye çevir (sıralama yok)
    const aracKarlariDizi = Object.values(aracKarlari);

    // Vadesi yaklaşan çekleri bul (5 gün veya daha az) - ödenme tarihine göre
    const vadesiBesGunIcinde = new Date();
    vadesiBesGunIcinde.setDate(vadesiBesGunIcinde.getDate() + 5);

    const vadesiYaklasanCekler = await prisma.cekler.findMany({
      where: {
        durum: 'beklemede',
        odenme_tarihi: {
          not: null,
          lte: vadesiBesGunIcinde
        }
      },
      orderBy: {
        odenme_tarihi: 'asc'
      }
    });

    // Bugün vadesi geçen çekleri bul - ödenme tarihine göre
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);

    const vadesiGecenCekler = await prisma.cekler.findMany({
      where: {
        durum: 'beklemede',
        odenme_tarihi: {
          not: null,
          lt: bugun
        }
      },
      orderBy: {
        odenme_tarihi: 'asc'
      }
    });

    // Ay adlarını Türkçe'ye çevir
    const ayAdlari = [
      '', 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];

    const response = {
      oncekiAy: {
        ay: previousMonth,
        ayAdi: ayAdlari[previousMonth],
        yil: previousMonthYear,
        toplamKar,
        sirketKarlari: sirketKarlariDizi.slice(0, 5), // En iyi 5 şirket
        aracKarlari: aracKarlariDizi, // Belirli araçların kar durumu
        seferSayisi: oncekiAySeferler.length
      },
      vadesiYaklasanCekler: {
        besGunIcinde: vadesiYaklasanCekler.map(cek => ({
          ...cek,
          kalanGun: Math.ceil((new Date(cek.odenme_tarihi!).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
        })),
        vadesiGecen: vadesiGecenCekler.map(cek => ({
          ...cek,
          gecenGun: Math.ceil((now.getTime() - new Date(cek.odenme_tarihi!).getTime()) / (1000 * 60 * 60 * 24))
        }))
      },
      uyarilar: {
        vadesiYaklasanSayisi: vadesiYaklasanCekler.length,
        vadesiGecenSayisi: vadesiGecenCekler.length,
        toplamUyariTutari: [...vadesiYaklasanCekler, ...vadesiGecenCekler].reduce((sum, cek) => sum + cek.tutar, 0)
      }
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Dashboard özet verisi alınırken hata:', error);
    return NextResponse.json(
      { error: 'Dashboard özet verisi alınırken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 