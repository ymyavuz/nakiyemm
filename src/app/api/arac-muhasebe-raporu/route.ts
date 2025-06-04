import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const yil = searchParams.get('yil') || new Date().getFullYear().toString();

    // Tüm araçları getir
    const araclar = await prisma.araclar.findMany({
      orderBy: {
        plaka: 'asc'
      }
    });

    // Yıl için tüm seferleri getir
    const seferler = await prisma.seferler.findMany({
      include: {
        arac: true
      }
    });

    // Yıl için tüm araç masraflarını getir
    const masraflar = await prisma.aracOdemeKayitlari.findMany({
      where: {
        odeme_tarihi: {
          gte: new Date(`${yil}-01-01`),
          lt: new Date(`${parseInt(yil) + 1}-01-01`)
        }
      }
    });

    // Her araç için aylık gelir-gider hesapla
    const aracBazindaAylikVeriler: any[] = [];

    for (const arac of araclar) {
      const aracVerisi: any = {
        arac_id: arac.arac_id,
        plaka: arac.plaka,
        sofor_adi: arac.sofor_adi,
        aylikVeriler: {},
        yillikToplam: {
          gelir: 0,
          gider: 0,
          tevkifat: 0,
          kar: 0
        },
        // Detaylı hesaplama bilgileri için yeni alan ekliyoruz
        detayliHesaplar: {
          aylikDetaylar: {},
          yillikDetay: {
            hamGelir: 0,
            kdvTutari: 0,
            kdvDahilTutar: 0,
            tevkifatTutari: 0,
            netGelir: 0,
            gider: 0,
            kar: 0,
            sirketTevkifatTutari: 0,
            // Sefer bazında hesaplama detayları
            seferlerBilgileri: []
          }
        }
      };

      // 12 ay için başlangıç değerleri
      for (let ay = 1; ay <= 12; ay++) {
        aracVerisi.aylikVeriler[ay] = {
          gelir: 0,
          gider: 0,
          tevkifat: 0,
          kar: 0
        };
        
        // Detaylı hesaplar için ay bazında değerler
        aracVerisi.detayliHesaplar.aylikDetaylar[ay] = {
          hamGelir: 0,
          kdvTutari: 0,
          kdvDahilTutar: 0,
          tevkifatTutari: 0,
          netGelir: 0,
          gider: 0,
          kar: 0,
          seferler: [],
          sirketTevkifatTutari: 0
        };
      }

      // Araç seferlerinden gelirleri hesapla - Veritabanındaki ay değerini kullan
      const aracSeferleri = seferler.filter(s => s.arac_id === arac.arac_id);
      
      for (const sefer of aracSeferleri) {
        // Sefer ay değeri kontrolü
        if (!sefer.ay) continue;
        
        const ay = sefer.ay;
        
        // Ham gelir hesaplama - YAP-İstanbul için özel durum
        let hamGelir = 0;
        let hesaplamaYontemi = '';
        
        if (sefer.sirket_id === 2) { // YAP-İstanbul için MT ile çarpma yapılmayacak
          hamGelir = sefer.sofore_odenen_ucret || 0;
          hesaplamaYontemi = 'sofore_odenen_ucret (MT ile çarpılmadı)';
          console.log(`Şirket ${sefer.sirket_id} (YAP-İstanbul) için gelir hesaplandı: Şoföre Ödenen: ${hamGelir} (MT ile çarpılmadı)`);
        } else {
          // Diğer tüm şirketler için MT ile çarpılacak
          const birimFiyati = sefer.sofore_odenen_ucret || 0;
          const mt = sefer.mt || 0;
          hamGelir = birimFiyati * mt;
          hesaplamaYontemi = 'sofore_odenen_ucret * MT';
          console.log(`Şirket ${sefer.sirket_id} için gelir hesaplandı: Şoföre Ödenen: ${birimFiyati} * MT: ${mt} = ${hamGelir}`);
        }
        
        // KDV hesaplama
        const kdvTutari = hamGelir * 0.20; // %20 KDV
        const kdvDahilTutar = hamGelir + kdvTutari; // KDV dahil tutar
        
        // Tevkifat hesaplama - Şoför raporu için KDV'nin %20'si
        const tevkifatTutari = kdvTutari * 0.20; // tevkifat KDV'nin %20'si
        const netGelir = kdvDahilTutar - tevkifatTutari; // Tevkifat düşülmüş gelir
        
        console.log(`Gelir: ${hamGelir} + KDV(%20): ${kdvTutari} = KDV Dahil: ${kdvDahilTutar}, Tevkifat(KDV'nin %20'si): ${tevkifatTutari}, Net: ${netGelir}`);
        
        // Şirket hesaplaması için sofor_fatura_ucreti bilgisi - bu kısım sadece şirket bilançosu hazırlanırken kullanılacak
        const soforFaturaUcreti = sefer.sofor_fatura_ucreti || 0;
        const faturaKdvTutari = soforFaturaUcreti * 0.20; // Fatura ücreti üzerinden KDV
        const sirketIcinTevkifatTutari = faturaKdvTutari * 0.20; // Şirket için tevkifat fatura KDV'sinin %20'si
        
        // Sefer detaylarını kaydet
        const seferDetay = {
          sefer_id: sefer.sefer_id,
          irsaliye_numarasi: sefer.irsaliye_numarasi,
          irsaliye_tarihi: sefer.irsaliye_tarihi,
          tahliye_yeri: sefer.tahliye_yeri,
          mt: sefer.mt,
          sirket_id: sefer.sirket_id,
          birimFiyati: sefer.sofore_odenen_ucret || 0,
          hamGelir: hamGelir,
          kdvTutari: kdvTutari,
          kdvDahilTutar: kdvDahilTutar,
          tevkifatTutari: tevkifatTutari,
          netGelir: netGelir,
          // Şirket bilançosu için gerekli bilgiler
          sirketHesaplama: {
            soforFaturaUcreti: soforFaturaUcreti,
            faturaKdvTutari: faturaKdvTutari,
            sirketIcinTevkifatTutari: sirketIcinTevkifatTutari
          }
        };
        
        // Detaylı hesaplara ekle
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].hamGelir += hamGelir;
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].kdvTutari += kdvTutari;
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].kdvDahilTutar += kdvDahilTutar;
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].tevkifatTutari += tevkifatTutari;
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].netGelir += netGelir;
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].seferler.push(seferDetay);
        
        // Yıllık detay toplamlarına ekle
        aracVerisi.detayliHesaplar.yillikDetay.hamGelir += hamGelir;
        aracVerisi.detayliHesaplar.yillikDetay.kdvTutari += kdvTutari;
        aracVerisi.detayliHesaplar.yillikDetay.kdvDahilTutar += kdvDahilTutar;
        aracVerisi.detayliHesaplar.yillikDetay.tevkifatTutari += tevkifatTutari;
        aracVerisi.detayliHesaplar.yillikDetay.netGelir += netGelir;
        aracVerisi.detayliHesaplar.yillikDetay.seferlerBilgileri.push(seferDetay);
        
        // Şirket için tevkifat tutarını ayrı olarak kaydet
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].sirketTevkifatTutari += sirketIcinTevkifatTutari;
        aracVerisi.detayliHesaplar.yillikDetay.sirketTevkifatTutari = 
          (aracVerisi.detayliHesaplar.yillikDetay.sirketTevkifatTutari || 0) + sirketIcinTevkifatTutari;
          
        // Şirket bilançosu için tevkifat değerlerini ayarla
        aracVerisi.aylikVeriler[ay].tevkifat += sirketIcinTevkifatTutari;
        aracVerisi.yillikToplam.tevkifat = (aracVerisi.yillikToplam.tevkifat || 0) + sirketIcinTevkifatTutari;
        
        // Mevcut hesaplama için
        aracVerisi.aylikVeriler[ay].gelir += netGelir;
        aracVerisi.yillikToplam.gelir += netGelir;
      }

      // Araç masraflarını hesapla
      const aracMasraflari = masraflar.filter(m => m.arac_id === arac.arac_id);
      
      for (const masraf of aracMasraflari) {
        const tarih = new Date(masraf.odeme_tarihi);
        const ay = tarih.getMonth() + 1;
        
        const gider = masraf.odeme_tutari;
        // Şöför bilançosunda KDV dahil edilmeyecek
        const toplamGider = gider;
        
        // Masraf detayını ekle
        const masrafDetay = {
          odeme_id: masraf.odeme_id,
          odeme_tarihi: masraf.odeme_tarihi,
          gider: gider,
          kdv: 0, // KDV sıfır
          toplamGider: toplamGider,
          aciklama: masraf.aciklama
        };
        
        // Detaylı hesaplara masraf ekle
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].gider += toplamGider;
        aracVerisi.detayliHesaplar.yillikDetay.gider += toplamGider;
        
        // Mevcut hesaplama için
        aracVerisi.aylikVeriler[ay].gider += toplamGider;
        aracVerisi.yillikToplam.gider += toplamGider;
      }

      // Kar hesapla
      for (let ay = 1; ay <= 12; ay++) {
        // Mevcut hesaplama
        aracVerisi.aylikVeriler[ay].kar = aracVerisi.aylikVeriler[ay].gelir - aracVerisi.aylikVeriler[ay].gider;
        
        // Detaylı hesap için
        aracVerisi.detayliHesaplar.aylikDetaylar[ay].kar = 
          aracVerisi.detayliHesaplar.aylikDetaylar[ay].netGelir - 
          aracVerisi.detayliHesaplar.aylikDetaylar[ay].gider;
      }
      
      // Yıllık toplam kar
      aracVerisi.yillikToplam.kar = aracVerisi.yillikToplam.gelir - aracVerisi.yillikToplam.gider;
      aracVerisi.detayliHesaplar.yillikDetay.kar = 
        aracVerisi.detayliHesaplar.yillikDetay.netGelir - 
        aracVerisi.detayliHesaplar.yillikDetay.gider;

      aracBazindaAylikVeriler.push(aracVerisi);
    }

    // Aylık toplamları hesapla
    const aylikToplamlar: any = {};
    for (let ay = 1; ay <= 12; ay++) {
      aylikToplamlar[ay] = {
        gelir: 0,
        gider: 0,
        tevkifat: 0,
        kar: 0
      };
    }

    for (const aracVeri of aracBazindaAylikVeriler) {
      for (let ay = 1; ay <= 12; ay++) {
        aylikToplamlar[ay].gelir += aracVeri.aylikVeriler[ay].gelir;
        aylikToplamlar[ay].gider += aracVeri.aylikVeriler[ay].gider;
        aylikToplamlar[ay].tevkifat += aracVeri.aylikVeriler[ay].tevkifat;
        aylikToplamlar[ay].kar += aracVeri.aylikVeriler[ay].kar;
      }
    }

    // Genel toplamlar
    const genelToplam = {
      gelir: 0,
      gider: 0,
      tevkifat: 0,
      kar: 0
    };

    for (const aracVeri of aracBazindaAylikVeriler) {
      genelToplam.gelir += aracVeri.yillikToplam.gelir;
      genelToplam.gider += aracVeri.yillikToplam.gider;
      genelToplam.tevkifat += aracVeri.yillikToplam.tevkifat || 0;
      genelToplam.kar += aracVeri.yillikToplam.kar;
    }

    return NextResponse.json({
      yil: parseInt(yil),
      aracBazindaAylikVeriler,
      aylikToplamlar,
      genelToplam,
      hesaplamaNotlari: {
        kdv: "Gelirlere %20 KDV dahil edilmiştir, giderlere KDV dahil edilmemiştir",
        soforTevkifat: "Şoför hesaplamalarında KDV tutarının %20'si tevkifat olarak düşülmüştür",
        sirketTevkifat: "Şirket bilançolarında sofor_fatura_ucreti üzerinden hesaplanan KDV'nin %20'si tevkifat olarak düşülmektedir",
        formul: "Şoför Kar = [Gelir + (%20 KDV) - (KDV'nin %20'si tevkifat)] - Gider (KDV hariç)",
        yapIstanbulOzelDurum: "YAP-İstanbul (ID:2) için MT ile çarpım yapılmamakta, doğrudan ödenen ücret kullanılmaktadır",
        detayliVersiyon: "detayliHesaplar alanında tüm hesaplamalar ayrıntılı olarak verilmiştir"
      }
    });

  } catch (error: any) {
    console.error('Araç muhasebe raporu hatası:', error);
    return NextResponse.json(
      { error: 'Araç muhasebe raporu oluşturulurken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 