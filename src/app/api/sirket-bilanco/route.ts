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

// Tevkifat hesapla (KDV'nin %20'si, yani gelirin %4'ü)
const hesaplaTevkifat = (gelir: number): number => {
  // KDV = gelirin %20'si, tevkifat = KDV'nin %20'si = gelirin %4'ü
  return gelir * 0.04;
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sirketId = searchParams.get('sirket_id');
    const ay = searchParams.get('ay');
    const donem = searchParams.get('donem');

    // Tüm şirketlerin araçlarını dinamik olarak çek
    const tumSirketlerAraclar = await prisma.araclar.findMany({
      select: { 
        arac_id: true,
        sirket_id: true 
      }
    });
    
    // Şirket bazında arac_id mapping'i oluştur
    const sirketAracMapping: Record<number, number[]> = {};
    tumSirketlerAraclar.forEach(arac => {
      if (!sirketAracMapping[arac.sirket_id]) {
        sirketAracMapping[arac.sirket_id] = [];
      }
      sirketAracMapping[arac.sirket_id].push(arac.arac_id);
    });

    // Eğer şirket ID yoksa, genel özet döndür
    if (!sirketId) {
      // Tüm şirketlerin genel özeti
      const tumSirketler = await prisma.sirketler.findMany();
      
      // Filtreleme koşullarını oluştur
      const whereClause: any = {};
      if (ay) {
        whereClause.ay = parseInt(ay);
      }
      if (donem) {
        whereClause.donem = parseInt(donem);
      }
      
      // Tüm seferler (filtrelenmiş)
      const tumSeferler = await prisma.seferler.findMany({
        where: whereClause,
        include: {
          sirket: true,
          arac: true
        }
      });

      // Bilanço hesaplamaları - KDV hariç gelir hesaplaması
      const toplamGelir = tumSeferler.reduce((toplam, sefer) => {
        const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
        return toplam + temelGelir;
      }, 0);
      
      // KDV tutarını ayrı hesapla
      const toplamKDV = tumSeferler.reduce((toplam, sefer) => {
        const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
        const kdv = hesaplaKDV(temelGelir);
        return toplam + kdv;
      }, 0);
      
      const toplamGider = tumSeferler.reduce((toplam, sefer) => {
        const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
        return toplam + toplamFiyat;
      }, 0);
      
      // Şöför giderlerine de %20 KDV ekle
      const toplamSoforKDV = tumSeferler.reduce((toplam, sefer) => {
        const gider = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
        const soforKdv = hesaplaKDV(gider);
        return toplam + soforKdv;
      }, 0);
      
      // Tevkifat hesaplaması - sadece fatura fiyatı varsa hesapla
      const toplamTevkifat = tumSeferler.reduce((toplam, sefer) => {
        // Sadece fatura fiyatı varsa tevkifat hesapla
        if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
          // Tüm şirketler için standart tevkifat hesaplaması
          const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
          return toplam + hesaplaTevkifat(faturaToplamFiyat);
        }
        return toplam;
      }, 0);
      
      const toplamGiderVeTevkifat = toplamGider + toplamSoforKDV + toplamTevkifat;
      const netKar = (toplamGelir + toplamKDV) - toplamGiderVeTevkifat;

      // Şirket bazında dağılım
      const sirketBazindaVeriler = tumSirketler.map(sirket => {
        // Gelir hesaplaması için tüm şirket seferlerini al (arac_id filtresi YOK)
        const sirketTumSeferleri = tumSeferler.filter(sefer => sefer.sirket_id === sirket.sirket_id);
        
        // Gider hesaplaması için sadece şirketin araçlarındaki seferleri al (arac_id filtresi VAR)
        const sirketAracIds = sirketAracMapping[sirket.sirket_id] || [];
        const sirketGiderSeferleri = tumSeferler.filter(sefer => 
          sefer.sirket_id === sirket.sirket_id && 
          sefer.arac_id && 
          sirketAracIds.includes(sefer.arac_id)
        );
        
        // Gelir hesaplamaları - Tüm seferler dahil
        const sirketGelir = sirketTumSeferleri.reduce((toplam, sefer) => {
          const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
          return toplam + temelGelir;
        }, 0);
        
        // Şirket KDV tutarını ayrı hesapla
        const sirketKDV = sirketTumSeferleri.reduce((toplam, sefer) => {
          const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
          const kdv = hesaplaKDV(temelGelir);
          return toplam + kdv;
        }, 0);
        
        const sirketGider = sirketGiderSeferleri.reduce((toplam, sefer) => {
          const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
          return toplam + toplamFiyat;
        }, 0);
        
        // Şirket şöför gider KDV'si
        const sirketSoforKDV = sirketGiderSeferleri.reduce((toplam, sefer) => {
          const gider = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
          const soforKdv = hesaplaKDV(gider);
          return toplam + soforKdv;
        }, 0);

        // Tüm şirketler için standart tevkifat hesaplaması
        const sirketTevkifat = sirketTumSeferleri.reduce((toplam, sefer) => {
          // Sadece fatura fiyatı varsa tevkifat hesapla
          if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
            const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
            return toplam + hesaplaTevkifat(faturaToplamFiyat);
          }
          return toplam;
        }, 0);

        const sirketMT = sirketTumSeferleri.reduce((toplam, sefer) => {
          return toplam + (sefer.mt || 0);
        }, 0);

        // Gider değerlerini hesapla - YAP-İstanbul için özel hesaplama
        let sirketToplamGider = 0;
        if (sirket.sirket_id === 2) {
          // YAP-İstanbul için: Ham gider + (Ham gider/5) - (Ham gider/25)
          const hamGider = sirketGider;
          const kdvTutari = hamGider / 5; // %20 KDV
          const tevkifatTutari = hamGider / 25; // %4 tevkifat
          sirketToplamGider = hamGider + kdvTutari - tevkifatTutari;
          
          console.log(`YAP-İstanbul (${sirket.sirket_adi}) - Ham gider: ${hamGider}, KDV: ${kdvTutari}, Tevkifat düşüşü: ${tevkifatTutari}, Toplam gider: ${sirketToplamGider}`);
        } else {
          sirketToplamGider = sirketGider + sirketSoforKDV + sirketTevkifat;
        }

        return {
          sirket_id: sirket.sirket_id,
          sirket_adi: sirket.sirket_adi,
          gelir: sirketGelir,
          kdv: sirketKDV,
          gider: sirketGider, 
          soforKdv: sirketSoforKDV,
          tevkifat: sirketTevkifat,
          toplamGider: sirketToplamGider,
          netKar: (sirketGelir + sirketKDV) - sirketToplamGider,
          seferSayisi: sirketTumSeferleri.length,
          toplamMT: sirketMT,
          ozelDurum: sirket.sirket_id === 2 ? 'Birim fiyat = Toplam fiyat' : 'MT × Birim fiyat'
        };
      });

      // Aylık dağılım
      const aylikVeriler = tumSeferler.reduce((acc: any, sefer) => {
        const ay = sefer.ay || 0;
        if (!acc[ay]) {
          acc[ay] = {
            ay,
            gelir: 0,
            kdv: 0,
            gider: 0,
            soforKdv: 0,
            tevkifat: 0,
            seferSayisi: 0,
            toplamMT: 0
          };
        }
        
        // Gelir hesaplamaları - Tüm seferler dahil (arac_id filtresi YOK)
        const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
        const kdv = hesaplaKDV(temelGelir);
        
        // Gider hesaplamaları - Sadece şirketin araçlarındaki seferler (arac_id filtresi VAR)
        const sirketAracIds = sirketAracMapping[sefer.sirket_id] || [];
        const seferAracDahilMi = sefer.arac_id && sirketAracIds.includes(sefer.arac_id);
        
        // Gelir her zaman dahil
        acc[ay].gelir += temelGelir; // KDV hariç gelir
        acc[ay].kdv += kdv;
        acc[ay].seferSayisi += 1;
        acc[ay].toplamMT += (sefer.mt || 0);
        
        // Gider sadece araç dahilse
        if (seferAracDahilMi) {
          const giderToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
          const soforKdv = hesaplaKDV(giderToplamFiyat);
          
          acc[ay].gider += giderToplamFiyat;
          acc[ay].soforKdv += soforKdv;
        }
        
        // Tevkifat hesapla - sadece fatura fiyatı varsa
        let seferTevkifat = 0;
        if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
          const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
          seferTevkifat = hesaplaTevkifat(faturaToplamFiyat);
        }
        acc[ay].tevkifat += seferTevkifat; // Her seferin tevkifatını ekle
        
        return acc;
      }, {});

      const aylikDagitim = Object.values(aylikVeriler).sort((a: any, b: any) => a.ay - b.ay);

      // Tek şirket gösterildiğinde - sabit tevkifat değerlerini kaldırıyoruz
      if (aylikDagitim.length > 0) {
        // Artık sabit tevkifat değerleri kullanmıyoruz
        // Tevkifat aylikVeriler içinde her ay için ayrı ayrı hesaplanıyor
      }

      const genelOzet = {
        genel: true,
        gelirGider: {
          toplamGelir,
          toplamKDV,
          toplamGider,
          toplamSoforKDV,
          toplamTevkifat,
          toplamGiderVeTevkifat,
          netKar,
          karMarji: (toplamGelir + toplamKDV) > 0 ? ((netKar / (toplamGelir + toplamKDV)) * 100).toFixed(2) : '0'
        },
        seferler: {
          toplamSeferSayisi: tumSeferler.length,
          aylikDagitim
        },
        sirketler: {
          toplamSirketSayisi: tumSirketler.length,
          sirketBazindaVeriler
        },
        filtrelemeBilgileri: {
          ay: ay ? parseInt(ay) : null,
          donem: donem ? parseInt(donem) : null
        },
        hesaplamaNotlari: {
          genel: 'Hesaplamalar MT × Birim Fiyat formülü ile yapılmıştır',
          yapIstanbulOzel: 'YAP-İstanbul (ID: 2) için birim fiyat = toplam fiyat olarak hesaplanmıştır',
          tevkifat: 'Tevkifat gideri sadece şöför fatura fiyatı girilmiş seferler için hesaplanır (%4)',
          kdv: 'Şirket gelirlerine ve şöför giderlerine %20 KDV dahil edilmiştir'
        }
      };

      return NextResponse.json(genelOzet);
    }

    // Şirket ID varsa, önceki mantığı kullan
    const sirket = await prisma.sirketler.findUnique({
      where: { sirket_id: parseInt(sirketId) }
    });

    if (!sirket) {
      return NextResponse.json({ error: 'Şirket bulunamadı' }, { status: 404 });
    }

    // Sefer verilerini filtrele
    const whereClause: any = {
      sirket_id: parseInt(sirketId)
    };

    if (ay) {
      whereClause.ay = parseInt(ay);
    }

    if (donem) {
      whereClause.donem = parseInt(donem);
    }

    // Seferler verilerini al
    const seferler = await prisma.seferler.findMany({
      where: whereClause,
      include: {
        arac: true
      }
    });

    // Gider hesaplaması için araç filtresi uygula
    const sirketAracIds = sirketAracMapping[parseInt(sirketId)] || [];
    const giderSeferleri = seferler.filter(sefer => 
      sefer.arac_id && sirketAracIds.includes(sefer.arac_id)
    );

    // Bilanço hesaplamaları - Gelir tüm seferlerden, gider sadece araç dahilinden
    const toplamGelir = seferler.reduce((toplam, sefer) => {
      const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      return toplam + temelGelir;
    }, 0);
    
    // KDV tutarını ayrı hesapla
    const toplamKDV = seferler.reduce((toplam, sefer) => {
      const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      const kdv = hesaplaKDV(temelGelir);
      return toplam + kdv;
    }, 0);
    
    const toplamGider = giderSeferleri.reduce((toplam, sefer) => {
      const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      return toplam + toplamFiyat;
    }, 0);
    
    // Şöför giderlerine de %20 KDV ekle
    const toplamSoforKDV = giderSeferleri.reduce((toplam, sefer) => {
      const gider = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      const soforKdv = hesaplaKDV(gider);
      return toplam + soforKdv;
    }, 0);
    
    // Tevkifat hesaplaması - sadece fatura fiyatı varsa hesapla
    const toplamTevkifat = seferler.reduce((toplam, sefer) => {
      // Sadece fatura fiyatı varsa tevkifat hesapla
      if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
        // Tüm şirketler için standart tevkifat hesaplaması
        const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
        return toplam + hesaplaTevkifat(faturaToplamFiyat);
      }
      return toplam;
    }, 0);
    
    const toplamGiderVeTevkifat = toplamGider + toplamSoforKDV + toplamTevkifat;
    const netKar = (toplamGelir + toplamKDV) - toplamGiderVeTevkifat;

    // Aylık dağılım
    const aylikVeriler = seferler.reduce((acc: any, sefer) => {
      const ay = sefer.ay || 0;
      if (!acc[ay]) {
        acc[ay] = {
          ay,
          gelir: 0,
          kdv: 0,
          gider: 0,
          soforKdv: 0,
          tevkifat: 0,
          seferSayisi: 0,
          toplamMT: 0
        };
      }
      
      // Gelir hesaplamaları - Tüm seferler dahil (arac_id filtresi YOK)
      const temelGelir = hesaplaToplamFiyat(sefer, sefer.sirketten_alinan_ucret);
      const kdv = hesaplaKDV(temelGelir);
      
      // Gider hesaplamaları - Sadece şirketin araçlarındaki seferler (arac_id filtresi VAR)
      const sirketAracIds = sirketAracMapping[sefer.sirket_id] || [];
      const seferAracDahilMi = sefer.arac_id && sirketAracIds.includes(sefer.arac_id);
      
      // Gelir her zaman dahil
      acc[ay].gelir += temelGelir; // KDV hariç gelir
      acc[ay].kdv += kdv;
      acc[ay].seferSayisi += 1;
      acc[ay].toplamMT += (sefer.mt || 0);
      
      // Gider sadece araç dahilse
      if (seferAracDahilMi) {
        const giderToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
        const soforKdv = hesaplaKDV(giderToplamFiyat);
        
        acc[ay].gider += giderToplamFiyat;
        acc[ay].soforKdv += soforKdv;
      }
      
      // Tevkifat hesapla - sadece fatura fiyatı varsa
      let seferTevkifat = 0;
      if (sefer.sofor_fatura_ucreti && sefer.sofor_fatura_ucreti > 0) {
        const faturaToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofor_fatura_ucreti);
        seferTevkifat = hesaplaTevkifat(faturaToplamFiyat);
      }
      acc[ay].tevkifat += seferTevkifat; // Her seferin tevkifatını ekle
      
      return acc;
    }, {});

    const aylikDagitim = Object.values(aylikVeriler).sort((a: any, b: any) => a.ay - b.ay);

    // Tek şirket gösterildiğinde - sabit tevkifat değerlerini kaldırıyoruz
    if (aylikDagitim.length > 0) {
      // Artık sabit tevkifat değerleri kullanmıyoruz
      // Tevkifat aylikVeriler içinde her ay için ayrı ayrı hesaplanıyor
    }

    const bilanco = {
      genel: false,
      sirket: {
        sirket_adi: sirket.sirket_adi,
        vergi_numarasi: sirket.vergi_numarasi,
        ozelDurum: parseInt(sirketId) === 2 ? 'Birim fiyat = Toplam fiyat' : 'MT × Birim fiyat'
      },
      gelirGider: {
        toplamGelir,
        toplamKDV,
        toplamGider,
        toplamSoforKDV,
        toplamTevkifat,
        toplamGiderVeTevkifat,
        netKar,
        karMarji: (toplamGelir + toplamKDV) > 0 ? ((netKar / (toplamGelir + toplamKDV)) * 100).toFixed(2) : '0'
      },
      seferler: {
        toplamSeferSayisi: seferler.length,
        aylikDagitim,
        seferDetaylari: await Promise.all(seferler.map(async (sefer) => {
          // Fiyat listesinden eşleşen tahliye yerini bul
          let fiyatListesiTahliyeYeri = null;
          try {
            // Önce tam eşleşme deneyelim
            let fiyatListesi = await prisma.sirketFiyatListesi.findFirst({
              where: {
                sirket_id: parseInt(sirketId),
                ucret: sefer.sirketten_alinan_ucret
              }
            });
            
            // Eğer bulamazsak, sayısal karşılaştırma yapalım (ondalık fark olabilir)
            if (!fiyatListesi) {
              fiyatListesi = await prisma.sirketFiyatListesi.findFirst({
                where: {
                  sirket_id: parseInt(sirketId),
                  ucret: {
                    gte: sefer.sirketten_alinan_ucret - 0.01,
                    lte: sefer.sirketten_alinan_ucret + 0.01
                  }
                }
              });
            }
            
            fiyatListesiTahliyeYeri = fiyatListesi?.tahliye_yeri || null;
            
            // Debug için log ekleyelim
            if (!fiyatListesi) {
              console.log(`Fiyat listesinde bulunamadı - Şirket ID: ${sirketId}, Ücret: ${sefer.sirketten_alinan_ucret}`);
            }
          } catch (error) {
            console.log('Fiyat listesi sorgusu hatası:', error);
          }

          return {
            sefer_id: sefer.sefer_id,
            sira_no: sefer.sira_no,
            mt: sefer.mt,
            birimFiyatGelir: sefer.sirketten_alinan_ucret,
            birimFiyatGider: sefer.sofore_odenen_ucret,
            toplamFiyatGelir: hesaplaKDVDahilGelir(sefer, sefer.sirketten_alinan_ucret),
            toplamFiyatGider: hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret),
            tahliye_yeri: sefer.tahliye_yeri,
            arac_tipi: sefer.arac_tipi,
            fiyatListesiTahliyeYeri: fiyatListesiTahliyeYeri
          };
        }))
      },
      filtrelemeBilgileri: {
        ay: ay ? parseInt(ay) : null,
        donem: donem ? parseInt(donem) : null
      },
      hesaplamaNotlari: {
        formul: parseInt(sirketId) === 2 ? 'Bu şirket için birim fiyat = toplam fiyat' : 'Toplam fiyat = MT × Birim fiyat',
        aciklama: parseInt(sirketId) === 2 ? 'YAP-İstanbul için özel hesaplama uygulanmıştır' : 'Standart MT × Birim fiyat hesaplaması uygulanmıştır',
        kdv: 'Şirket gelirlerine ve şöför giderlerine %20 KDV dahil edilmiştir'
      }
    };

    return NextResponse.json(bilanco);

  } catch (error) {
    console.error('Şirket bilanço verisi alınırken hata:', error);
    return NextResponse.json(
      { error: 'Bilanço verisi alınırken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 