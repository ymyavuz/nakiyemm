import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    const { searchParams } = new URL(request.url);
    const soforId = searchParams.get('sofor_id');
    const ay = searchParams.get('ay');
    const donem = searchParams.get('donem');

    // Eğer şöför ID yoksa, genel özet döndür
    if (!soforId) {
      // Tüm şöförlerin genel özeti
      const tumSoforler = await prisma.araclar.findMany({
        where: {
          sofor_adi: {
            not: ""
          }
        },
        distinct: ['sofor_adi'],
        select: {
          sofor_adi: true,
          plaka: true
        }
      });

      // Tüm seferler
      const tumSeferler = await prisma.seferler.findMany({
        include: {
          sirket: true,
          arac: true
        }
      });

      // Genel hesaplamalar - şöför perspektifinden
      const toplamGelir = tumSeferler.reduce((toplam, sefer) => {
        const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
        return toplam + toplamFiyat;
      }, 0);
      
      // Şöför için gider hesaplaması (araç masrafları)
      const tumAracMasraflari = await prisma.aracOdemeKayitlari.findMany({
        include: {
          arac: true
        }
      });
      
      const toplamGider = tumAracMasraflari.reduce((toplam, masraf) => {
        return toplam + masraf.odeme_tutari;
      }, 0);
      
      const netKazanc = toplamGelir - toplamGider;

      // Şöför bazında dağılım
      const soforBazindaVeriler = [];
      
      for (const sofor of tumSoforler) {
        if (!sofor.sofor_adi) continue;
        
        const soforSeferleri = tumSeferler.filter(sefer => 
          sefer.arac?.sofor_adi === sofor.sofor_adi
        );
        
        const soforGelir = soforSeferleri.reduce((toplam, sefer) => {
          const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
          return toplam + toplamFiyat;
        }, 0);
        
        // Bu şöförün araç masraflarını hesapla
        const soforAracMasraflari = tumAracMasraflari.filter(masraf => 
          masraf.arac?.sofor_adi === sofor.sofor_adi
        );
        const soforGider = soforAracMasraflari.reduce((toplam, masraf) => {
          return toplam + masraf.odeme_tutari;
        }, 0);
        
        // Şöförün çalıştığı şirketler
        const calistigiSirketler = [...new Set(soforSeferleri.map(sefer => sefer.sirket?.sirket_adi))];

        soforBazindaVeriler.push({
          sofor_adi: sofor.sofor_adi,
          plaka: sofor.plaka,
          gelir: soforGelir,
          gider: soforGider,
          netKazanc: soforGelir - soforGider,
          seferSayisi: soforSeferleri.length,
          calistigiSirketler: calistigiSirketler.join(', '),
          sirketSayisi: calistigiSirketler.length
        });
      }

      // Aylık dağılım
      const aylikVeriler = tumSeferler.reduce((acc: any, sefer) => {
        const ay = sefer.ay || 0;
        if (!acc[ay]) {
          acc[ay] = {
            ay,
            gelir: 0,
            gider: 0,
            seferSayisi: 0
          };
        }
        
        const gelirToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
        
        acc[ay].gelir += gelirToplamFiyat;
        // Bu ayın araç masraflarını hesapla
        const ayMasraflari = tumAracMasraflari.filter(masraf => {
          const masrafAy = new Date(masraf.odeme_tarihi).getMonth() + 1;
          return masrafAy === ay;
        });
        const ayGider = ayMasraflari.reduce((toplam, masraf) => toplam + masraf.odeme_tutari, 0);
        acc[ay].gider += ayGider;
        acc[ay].seferSayisi += 1;
        return acc;
      }, {});

      const aylikDagitim = Object.values(aylikVeriler).sort((a: any, b: any) => a.ay - b.ay);

      const genelOzet = {
        genel: true,
        gelirGider: {
          toplamGelir,
          toplamGider,
          netKazanc,
          karMarji: toplamGelir > 0 ? ((netKazanc / toplamGelir) * 100).toFixed(2) : '0'
        },
        seferler: {
          toplamSeferSayisi: tumSeferler.length,
          aylikDagitim
        },
        soforler: {
          toplamSoforSayisi: tumSoforler.length,
          soforBazindaVeriler: soforBazindaVeriler.sort((a, b) => b.gelir - a.gelir)
        }
      };

      return NextResponse.json(genelOzet);
    }

    // Şöför ID varsa, detaylı bilanço
    const sofor = await prisma.araclar.findFirst({
      where: { 
        sofor_adi: soforId
      }
    });

    if (!sofor) {
      return NextResponse.json({ error: 'Şöför bulunamadı' }, { status: 404 });
    }

    // Sefer verilerini filtrele
    const whereClause: any = {
      arac: {
        sofor_adi: soforId
      }
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
        arac: true,
        sirket: true
      }
    });

    // Bilanço hesaplamaları
    const toplamGelir = seferler.reduce((toplam, sefer) => {
      const toplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      return toplam + toplamFiyat;
    }, 0);
    
    // Bu şöförün araç masraflarını al
    const soforAracMasraflari = await prisma.aracOdemeKayitlari.findMany({
      where: {
        arac: {
          sofor_adi: soforId
        }
      },
      include: {
        arac: true
      }
    });

    // Eğer ay filtresi varsa, sadece o ayın masraflarını hesapla
    let filtrelenmisAracMasraflari = soforAracMasraflari;
    if (ay) {
      filtrelenmisAracMasraflari = soforAracMasraflari.filter(masraf => {
        const masrafAy = new Date(masraf.odeme_tarihi).getMonth() + 1;
        return masrafAy === parseInt(ay);
      });
    }
    if (donem) {
      filtrelenmisAracMasraflari = filtrelenmisAracMasraflari.filter(masraf => {
        const masrafYil = new Date(masraf.odeme_tarihi).getFullYear();
        return masrafYil === parseInt(donem);
      });
    }

    const toplamGider = filtrelenmisAracMasraflari.reduce((toplam, masraf) => {
      return toplam + masraf.odeme_tutari;
    }, 0);
    const netKazanc = toplamGelir - toplamGider;

    // Şirket bazında dağılım
    const sirketBazindaVeriler: any = {};
    seferler.forEach(sefer => {
      const sirketAdi = sefer.sirket?.sirket_adi || 'Bilinmeyen Şirket';
      if (!sirketBazindaVeriler[sirketAdi]) {
        sirketBazindaVeriler[sirketAdi] = {
          sirket_adi: sirketAdi,
          gelir: 0,
          gider: 0,
          seferSayisi: 0
        };
      }
      
      const gelirToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      sirketBazindaVeriler[sirketAdi].gelir += gelirToplamFiyat;
      sirketBazindaVeriler[sirketAdi].seferSayisi += 1;
    });

    // Araç masraflarını şirketler arasında sefer sayısına göre dağıt
    const toplamSeferSayisi = seferler.length;
    Object.keys(sirketBazindaVeriler).forEach(sirketAdi => {
      const sirketSeferOrani = sirketBazindaVeriler[sirketAdi].seferSayisi / toplamSeferSayisi;
      sirketBazindaVeriler[sirketAdi].gider = toplamGider * sirketSeferOrani;
    });

    const sirketDagitimi = Object.values(sirketBazindaVeriler).map((sirket: any) => ({
      ...sirket,
      netKazanc: sirket.gelir - sirket.gider
    }));

    // Aylık dağılım
    const aylikVeriler = seferler.reduce((acc: any, sefer) => {
      const ay = sefer.ay || 0;
      if (!acc[ay]) {
        acc[ay] = {
          ay,
          gelir: 0,
          gider: 0,
          seferSayisi: 0
        };
      }
      
      const gelirToplamFiyat = hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret);
      
      acc[ay].gelir += gelirToplamFiyat;
      acc[ay].seferSayisi += 1;
      return acc;
    }, {});

    // Aylık gider dağılımını hesapla
    Object.keys(aylikVeriler).forEach(ayKey => {
      const ay = parseInt(ayKey);
      const ayMasraflari = soforAracMasraflari.filter(masraf => {
        const masrafAy = new Date(masraf.odeme_tarihi).getMonth() + 1;
        return masrafAy === ay;
      });
      
      const ayGider = ayMasraflari.reduce((toplam, masraf) => toplam + masraf.odeme_tutari, 0);
      aylikVeriler[ayKey].gider = ayGider;
    });

    const aylikDagitim = Object.values(aylikVeriler).sort((a: any, b: any) => a.ay - b.ay);

    // Birim fiyat dağılımı
    const seferDetaylari = await Promise.all(seferler.map(async (sefer) => {
      // Fiyat listesinden eşleşen tahliye yerini bul
      let fiyatListesiTahliyeYeri = null;
      
      try {
        // Şöför için şirket fiyatına göre fiyat listesinden tahliye yerini bul
        let fiyatListesi = await prisma.sirketFiyatListesi.findFirst({
          where: {
            sirket_id: sefer.sirket_id,
            ucret: sefer.sirketten_alinan_ucret,
            arac_tipi: sefer.arac_tipi
          }
        });
        
        // Eğer bulamazsak, sayısal karşılaştırma yapalım (ondalık fark olabilir)
        if (!fiyatListesi) {
          fiyatListesi = await prisma.sirketFiyatListesi.findFirst({
            where: {
              sirket_id: sefer.sirket_id,
              arac_tipi: sefer.arac_tipi,
              ucret: {
                gte: sefer.sirketten_alinan_ucret - 0.01,
                lte: sefer.sirketten_alinan_ucret + 0.01
              }
            }
          });
        }
        
        fiyatListesiTahliyeYeri = fiyatListesi?.tahliye_yeri || null;
        
      } catch (error) {
        console.log('Fiyat listesi sorgusu hatası:', error);
      }

      return {
        sefer_id: sefer.sefer_id,
        sira_no: sefer.sira_no,
        mt: sefer.mt,
        birimFiyat: sefer.sofore_odenen_ucret,
        toplamFiyat: hesaplaToplamFiyat(sefer, sefer.sofore_odenen_ucret),
        tahliye_yeri: sefer.tahliye_yeri,
        arac_tipi: sefer.arac_tipi,
        sirket_adi: sefer.sirket?.sirket_adi || 'Bilinmeyen',
        fiyatListesiTahliyeYeri: fiyatListesiTahliyeYeri
      };
    }));

    const bilanco = {
      genel: false,
      sofor: {
        sofor_adi: sofor.sofor_adi,
        plaka: sofor.plaka,
        vergi_numarasi: sofor.vergi_numarasi
      },
      gelirGider: {
        toplamGelir,
        toplamGider,
        netKazanc,
        karMarji: toplamGelir > 0 ? ((netKazanc / toplamGelir) * 100).toFixed(2) : '0'
      },
      seferler: {
        toplamSeferSayisi: seferler.length,
        aylikDagitim,
        seferDetaylari
      },
      sirketler: {
        sirketDagitimi
      },
      filtrelemeBilgileri: {
        ay: ay ? parseInt(ay) : null,
        donem: donem ? parseInt(donem) : null
      },
      aracMasraflari: {
        toplamMasraf: toplamGider,
        masrafDetaylari: filtrelenmisAracMasraflari.map(masraf => ({
          odeme_id: masraf.odeme_id,
          odeme_tutari: masraf.odeme_tutari,
          odeme_tarihi: masraf.odeme_tarihi,
          aciklama: masraf.aciklama,
          plaka: masraf.arac?.plaka
        }))
      }
    };

    return NextResponse.json(bilanco);

  } catch (error) {
    console.error('Şöför bilanço verisi alınırken hata:', error);
    return NextResponse.json(
      { error: 'Bilanço verisi alınırken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 