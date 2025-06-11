import { NextResponse } from 'next/server';
import { prisma, createFreshPrismaClient } from '@/lib/db';

// Prisma client oluştur

// Linter hatasını önlemek için doğrudan tipi tanımlıyoruz
type SeferData = {
  sira_no: number;
  irsaliye_numarasi?: string | null;
  irsaliye_tarihi?: Date | null;
  kalkis_saati?: Date | null;
  varis_saati?: Date | null;
  cikis_yeri: string;
  tahliye_edilen_firma: string;
  tahliye_yeri: string;
  tonaj_kg: string;
  arac_tipi: string;
  mt?: number | null;
  aciklama?: string | null;
  sirketten_alinan_ucret: number;
  sofore_odenen_ucret: number;
  sirket_id: number;
  arac_id?: number | null;
  ay: number;
  donem: number;
  yil?: number | null;
  sofor_fatura_ucreti?: number | null;
};

export async function POST(request: Request) {
  // Prepared statement çakışmalarını önlemek için fresh client kullan
  const freshPrisma = createFreshPrismaClient();
  
  try {
    // Gelen verileri al
    const { ay, donem, seferler } = await request.json();
    
    console.log('Gelen veri:', { ay, donem, seferSayisi: Object.keys(seferler).length });
    
    // Tüm ham veriyi logla
    console.log('EXCEL HAM VERİ KONTROL:');
    if (seferler && typeof seferler === 'object') {
      // Her şirket için örnek bir kaydı logla
      for (const [sirketId, sirketSeferleri] of Object.entries(seferler)) {
        if (Array.isArray(sirketSeferleri) && sirketSeferleri.length > 0) {
          const ornekSefer = sirketSeferleri[0];
          console.log(`ŞİRKET ${sirketId} ÖRNEK SEFER:`, JSON.stringify(ornekSefer, null, 2));
          
          if (ornekSefer.tumVeriler) {
            console.log('TÜM VERİLER:', JSON.stringify(ornekSefer.tumVeriler, null, 2));
          }
          
          // Sadece ilk şirket için göster, hepsini göstermeye gerek yok
          break;
        }
      }
    }
    
    // Ay ve dönem değerlerini kontrol et
    if (!ay || !donem) {
      return NextResponse.json({
        error: 'Ay ve dönem bilgileri gereklidir'
      }, { status: 400 });
    }
    
    // Excel verilerini kontrol et
    if (!seferler || Object.keys(seferler).length === 0) {
      return NextResponse.json({
        error: 'Kaydedilecek sefer verisi bulunamadı'
      }, { status: 400 });
    }
    
    // Tüm seferleri işle ve veritabanına kaydet
    let kaydedilenSeferSayisi = 0;
    
    // Her şirket için
    for (const [sirketIdStr, sirketSeferleri] of Object.entries(seferler)) {
      const sirketId = parseInt(sirketIdStr, 10);
      
      console.log(`Şirket ${sirketId} için sefer sayısı:`, Array.isArray(sirketSeferleri) ? sirketSeferleri.length : 'Dizi değil');
      
      // Excel verileri için bir kontrol yapalım
      if (!Array.isArray(sirketSeferleri)) {
        console.error(`Şirket ID ${sirketId} için geçersiz veri formatı:`, sirketSeferleri);
        continue;
      }
      
      // Her sefer için
      for (const sefer of sirketSeferleri) {
        try {
          // Sefer verilerini çıkart
          const seferNo = parseInt(sefer.seferNo, 10) || 0;
          
          console.log(`Sefer işleniyor: Şirket ${sirketId}, Sefer ${seferNo}`, 
                     sefer.tumVeriler ? 'Veri mevcut' : 'Veri yok');
          
          // İşleme öncesi tüm verileri görelim
          if (sefer.tumVeriler) {
            console.log('Sefer verileri:', Object.keys(sefer.tumVeriler));
          }
          
          // Excel'den gelen verileri ayrıntılı incele
          console.log('Excel ham verileri:');
          if (sefer.tumVeriler) {
            // Önemli alanları detaylı göster
            console.log('İrsaliye Numarası:', sefer.tumVeriler['İrsaliye Numarası'] || 'null');
            console.log('Tahliye Edilen Firma:', sefer.tumVeriler['Tahliye Edilen Firma'] || 'null');
            
            // Tahliye Yeri ile ilgili tüm alanları göster
            Object.keys(sefer.tumVeriler).forEach(key => {
              if (key.toLowerCase().includes('tahliye') && key.toLowerCase().includes('yer')) {
                console.log(`${key}:`, sefer.tumVeriler[key] || 'null');
              }
            });
            
            // Tüm alanları göster
            console.log('Tüm Excel alanları:', Object.keys(sefer.tumVeriler).map(key => {
              return `${key}: ${sefer.tumVeriler[key]}`;
            }));
          }
          
          // İrsaliye numarasını ve diğer değerleri çıkart
          // Bunlar Excel'deki sütun adlarına göre değişebilir
          const irsaliyeNumarasi = getExcelValue(sefer, 'İrsaliye Numarası') || null;
          
          // Tarih alanlarını özel işleme
          let irsaliyeTarihi = null;
          try {
            const irsaliyeTarihiStr = getExcelValue(sefer, 'İrsaliye Tarihi');
            if (irsaliyeTarihiStr) {
              const parsedDate = parseDate(irsaliyeTarihiStr);
              // Date geçerli mi kontrol et
              if (parsedDate && !isNaN(parsedDate.getTime())) {
                irsaliyeTarihi = parsedDate;
              }
            }
          } catch (e) {
            console.log('İrsaliye tarihi ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          // Kalkış ve varış saatlerini Excel'den al
          let kalkisSaati = null;
          try {
            const kalkisSaatiStr = getExcelValue(sefer, 'Kalkış Saati');
            if (kalkisSaatiStr && kalkisSaatiStr.trim() !== '') {
              kalkisSaati = parseTime(kalkisSaatiStr);
              if (kalkisSaati && isNaN(kalkisSaati.getTime())) {
                kalkisSaati = null;
              }
            }
          } catch (e) {
            console.log('Kalkış saati ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          let varisSaati = null;
          try {
            const varisSaatiStr = getExcelValue(sefer, 'Varış Saati');
            if (varisSaatiStr && varisSaatiStr.trim() !== '') {
              varisSaati = parseTime(varisSaatiStr);
              if (varisSaati && isNaN(varisSaati.getTime())) {
                varisSaati = null;
              }
            }
          } catch (e) {
            console.log('Varış saati ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          // Şoför bilgisini doğrudan kullan
          const soforAdi = getExcelValue(sefer, 'Şoför');
          console.log(`Şoför adı: ${soforAdi || 'Belirtilmemiş'}`);
          
          // Araç ID'sini belirleme
          let aracId = null;
          if (soforAdi && soforAdi.trim() !== '') {
            // Şoför adına göre araç bulmaya çalış
            try {
              const arac = await prisma.araclar.findFirst({
                where: {
                  sofor_adi: {
                    contains: soforAdi.trim(),
                    mode: 'insensitive'
                  }
                }
              });
              
              if (arac) {
                aracId = arac.arac_id;
                console.log(`Şoför "${soforAdi}" için araç bulundu: ID ${aracId}`);
              } else {
                console.log(`Şoför "${soforAdi}" için araç bulunamadı, null değer kullanılacak`);
                aracId = null; // Şoför için araç bulunamadı, null kullan
              }
            } catch (e) {
              console.error('Araç sorgusu sırasında hata:', e);
              aracId = null; // Hata durumunda null değer kullan
            }
          } else {
            // Şoför belirtilmemişse null değer kullan
            aracId = null;
            console.log(`Şoför belirtilmemiş, null değer kullanılacak`);
          }
          
          const cikisYeri = getExcelValue(sefer, 'Çıkış Yeri') || '';
          const tahliyeEdilenFirma = getExcelValue(sefer, 'Tahliye Edilen Firma') || '';
          const tahliyeYeri = getExcelValue(sefer, 'Tahliye Yeri/Fırın') || getExcelValue(sefer, 'Tahliye Yeri') || 
                             getExcelValue(sefer, 'Tahliye Yeri/Tesisi') || '';
          
          // Sayısal değerleri işle
          const tonajKgStr = getExcelValue(sefer, 'Tonaj/Kg') || getExcelValue(sefer, 'Tonaj') || '0';
          let tonajKg = tonajKgStr;
          
          let mt = null;
          try {
            const mtStr = getExcelValue(sefer, 'MT');
            if (mtStr) {
              mt = parseFloat(mtStr.replace(/,/g, '.')) || null;
            }
          } catch (e) {
            console.log('MT değeri ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          const aciklama = getExcelValue(sefer, 'Açıklama') || null;
          
          // MT değerine göre araç tipini belirle
          let aracTipi = getExcelValue(sefer, 'Araç Tipi Tlr/K.Ayak') || getExcelValue(sefer, 'Araç Tipi') || '';
          
          // Excel'den bir araç tipi gelmiş olsa bile MT değerine göre yeniden belirle
          if (mt !== null) {
            if (mt < 23) {
              aracTipi = "Kırkayak";
            } else {
              aracTipi = "Tır";
            }
            console.log(`MT değerine (${mt}) göre araç tipi belirlendi: ${aracTipi}`);
          } else {
            console.log('MT değeri olmadığı için Excel\'deki araç tipi kullanılacak:', aracTipi);
          }
          
          // Fiyat bilgilerini çıkart - frontend'teki getTasimaFiyati ile aynı
          let tasimaFiyati = 0;
          try {
            tasimaFiyati = getTasimaFiyati(sefer) || 0;
          } catch (e) {
            console.log('Taşıma fiyatı ayrıştırılamadı, 0 olarak kaydedilecek');
          }
          
          // Şöför ücreti bilgisini çıkart
          let soforUcreti = 0;
          try {
            const soforUcretiStr = getExcelValue(sefer, 'Şöför Ücreti') || '0';
            soforUcreti = parseFloat(soforUcretiStr.toString().replace(/[^\d.,]/g, '').replace(',', '.')) || 0;
            console.log('Şöför ücreti:', soforUcretiStr, '-> Parse edilen:', soforUcreti);
          } catch (e) {
            console.log('Şöför ücreti ayrıştırılamadı, 0 olarak kaydedilecek');
          }
          
          // Şöför fatura ücreti bilgisini çıkart
          let soforFaturaUcreti = null;
          try {
            const soforFaturaUcretiStr = getExcelValue(sefer, 'Şöför Fatura Ücreti');
            if (soforFaturaUcretiStr) {
              soforFaturaUcreti = parseFloat(soforFaturaUcretiStr.toString().replace(/[^\d.,]/g, '').replace(',', '.')) || null;
              console.log('Şöför fatura ücreti:', soforFaturaUcretiStr, '-> Parse edilen:', soforFaturaUcreti);
            }
          } catch (e) {
            console.log('Şöför fatura ücreti ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          console.log('İşlenen değerler:', {
            cikisYeri,
            tahliyeYeri,
            tonajKg,
            aracTipi,
            tasimaFiyati,
            irsaliyeTarihi: irsaliyeTarihi ? 'Geçerli tarih' : 'null',
            kalkisSaati: kalkisSaati ? 'Geçerli saat' : 'null',
            varisSaati: varisSaati ? 'Geçerli saat' : 'null',
            aracId
          });
          
          // İşlenen verileri kontrol et - GEVŞEK KONTROL
          // Sadece sıra no kontrolü yapalım
          if (seferNo <= 0) {
            console.warn(`Geçersiz sefer no, atlanıyor: Şirket ${sirketId}, Sefer ${seferNo}`);
            continue;
          }
          
          // Yıl bilgisini hesapla - irsaliye tarihinden veya mevcut yıldan
          let yil = new Date().getFullYear(); // Varsayılan olarak mevcut yıl
          if (irsaliyeTarihi) {
            yil = irsaliyeTarihi.getFullYear();
          }

          // Prisma modeli için veriyi hazırlayalım
          // Artık zorunlu alanlar null olabilir
          const seferData = {
            sira_no: seferNo,
            irsaliye_numarasi: irsaliyeNumarasi as any,
            irsaliye_tarihi: irsaliyeTarihi as any,
            kalkis_saati: kalkisSaati as any,
            varis_saati: varisSaati as any,
            cikis_yeri: cikisYeri || 'Belirtilmemiş',
            tahliye_edilen_firma: tahliyeEdilenFirma || 'Belirtilmemiş',
            tahliye_yeri: tahliyeYeri || 'Belirtilmemiş',
            tonaj_kg: tonajKg as any,
            arac_tipi: aracTipi || 'Belirtilmemiş',
            mt: mt as any,
            aciklama: aciklama as any,
            sirketten_alinan_ucret: tasimaFiyati || 0,
            sofore_odenen_ucret: soforUcreti || 0,
            sirket_id: sirketId,
            arac_id: aracId as any,  // Null olabilir
            ay: ay,
            donem: donem,
            yil: yil,  // Yıl alanını ekliyoruz
            sofor_fatura_ucreti: soforFaturaUcreti as any
          };
          
          // Log mesajlarını daha anlaşılır hale getir
          console.log('Kaydedilecek veri:');
          console.log(`- Sıra No: ${seferNo}`);
          console.log(`- İrsaliye Numarası: ${irsaliyeNumarasi || 'null'}`);
          console.log(`- İrsaliye Tarihi: ${irsaliyeTarihi ? irsaliyeTarihi.toLocaleDateString() : 'null'}`);
          console.log(`- Kalkış Saati: ${kalkisSaati ? kalkisSaati.toLocaleTimeString() : 'null'}`);
          console.log(`- Varış Saati: ${varisSaati ? varisSaati.toLocaleTimeString() : 'null'}`);
          console.log(`- Çıkış Yeri: ${cikisYeri || 'Belirtilmemiş'}`);
          console.log(`- Tahliye Edilen Firma: ${tahliyeEdilenFirma || 'Belirtilmemiş'}`);
          console.log(`- Tahliye Yeri: ${tahliyeYeri || 'Belirtilmemiş'}`);
          console.log(`- Tonaj (kg): ${tonajKg}`);
          console.log(`- Araç Tipi: ${aracTipi || 'Belirtilmemiş'}`);
          console.log(`- MT: ${mt || 'null'}`);
          console.log(`- Şoför: ${soforAdi || 'null'}`);
          console.log(`- Araç ID: ${aracId !== null ? aracId : 'null'}`);
          console.log(`- Ay: ${ay}`);
          console.log(`- Dönem: ${donem}`);
          console.log(`- Yıl: ${yil}`);
          
          const yeniSefer = await freshPrisma.seferler.create({
            data: seferData
          });
          
          console.log('Sefer başarıyla kaydedildi:', yeniSefer.sefer_id);
          kaydedilenSeferSayisi++;
          
        } catch (hata) {
          console.error(`Sefer kaydederken hata: Şirket ID ${sirketId}`, hata);
          // Tek bir sefer hatası tüm işlemi durdurmayacak, devam ediyoruz
        }
      }
    }
    
    // Sonuçları döndür
    return NextResponse.json({
      success: true,
      kaydedilenSeferSayisi,
      message: `${kaydedilenSeferSayisi} sefer başarıyla kaydedildi`
    });
    
  } catch (error: any) {
    console.error('API hatası:', error);
    return NextResponse.json({
      error: 'Veriler işlenirken bir hata oluştu: ' + error.message
    }, { status: 500 });
  } finally {
    // Fresh client bağlantısını kapat
    await freshPrisma.$disconnect();
  }
}

// Yardımcı fonksiyonlar
function getValueOrNull(obj: any, key: string): string | null {
  // Eski fonksiyon - geriye dönük uyumluluk için tutuyoruz
  return getExcelValue(obj, key);
}

// Excel ham verilerini okuma - tumVeriler objesini koruyan fonksiyon
function getExcelValue(obj: any, key: string): string | null {
  try {
    // Tüm süreci detaylı logla
    console.log(`${key} değeri için Excel verisi arama:`, obj.tumVeriler ? 'tumVeriler mevcut' : 'tumVeriler yok');
    
    // Eğer obj bir sefer verisi değilse ve doğrudan alanlar içeriyorsa
    if (!obj.tumVeriler && obj[key] !== undefined && obj[key] !== null) {
      console.log(`${key} değeri direkt objede bulundu:`, obj[key], typeof obj[key]);
      return String(obj[key]);
    }
    
    // tumVeriler objesi varsa - excel ham verileri
    if (obj?.tumVeriler) {
      // Doğrudan eşleşen anahtarı kontrol et
      if (obj.tumVeriler[key] !== undefined && obj.tumVeriler[key] !== null) {
        console.log(`${key} değeri EXCEL'DE TAM OLARAK BULUNDU:`, obj.tumVeriler[key], typeof obj.tumVeriler[key]);
        // Excel'deki ham değeri aynen koru
        return String(obj.tumVeriler[key]); 
      }
      
      // Tüm anahtarları göster - debug için
      console.log(`${key} için mevcut Excel alanları:`, Object.keys(obj.tumVeriler));
      
      // Kısmi eşleşme için anahtar listesi
      const relatedKeys = Object.keys(obj.tumVeriler).filter(k => 
        k.toLowerCase().includes(key.toLowerCase())
      );
      
      if (relatedKeys.length > 0) {
        console.log(`${key} için kısmi eşleşen anahtarlar:`, relatedKeys);
        
        // İlk eşleşen değeri döndür
        if (obj.tumVeriler[relatedKeys[0]] !== undefined && obj.tumVeriler[relatedKeys[0]] !== null) {
          console.log(`${key} için eşleşen anahtar ${relatedKeys[0]} bulundu:`, obj.tumVeriler[relatedKeys[0]], typeof obj.tumVeriler[relatedKeys[0]]);
          return String(obj.tumVeriler[relatedKeys[0]]);
        }
      }
    }
    
    console.log(`${key} için hiçbir değer bulunamadı`);
    return null;
  } catch (error) {
    console.error(`${key} değeri alınırken hata:`, error);
    return null;
  }
}

function parseDate(dateStr: string | null): Date | null {
  if (!dateStr) return null;
  
  try {
    // Excel'den gelen tarih formatını kontrol et ve dönüştür
    const cleanDateStr = dateStr.trim();
    
    // Boşluk ile ayrılmış GG AA YYYY formatı için
    const spaceFormatRegex = /^(\d{1,2})\s+(\d{1,2})\s+(\d{4})$/;
    const spaceMatch = cleanDateStr.match(spaceFormatRegex);
    
    if (spaceMatch) {
      const day = parseInt(spaceMatch[1], 10);
      const month = parseInt(spaceMatch[2], 10) - 1; // JavaScript'te ay 0-11 arası
      const year = parseInt(spaceMatch[3], 10);
      
      // Geçerli tarih değerleri kontrolü
      if (isNaN(day) || isNaN(month) || isNaN(year) || 
          day < 1 || day > 31 || month < 0 || month > 11) {
        console.log(`Geçersiz tarih değerleri: Gün=${day}, Ay=${month+1}, Yıl=${year}`);
        return null;
      }
      
      const date = new Date(year, month, day);
      
      // Geçerli bir tarih mi kontrol et
      if (isNaN(date.getTime())) {
        console.log(`Oluşturulan tarih geçerli değil: ${date}`);
        return null;
      }
      
      console.log(`Başarıyla ayrıştırılan GG AA YYYY formatı: ${date.toISOString()}`);
      return date;
    }
    
    // Nokta veya slash ile ayrılmış tarih formatı
    const dateParts = cleanDateStr.split(/[\/\.]/);
    if (dateParts.length >= 3) {
      const day = parseInt(dateParts[0], 10);
      const month = parseInt(dateParts[1], 10) - 1; // JavaScript'te ay 0-11 arası
      let year = parseInt(dateParts[2], 10);
      
      // 2 haneli yıl kontrolü
      if (year < 100) {
        year += 2000; // 23 -> 2023
      }
      
      // Geçerli tarih değerleri kontrolü
      if (isNaN(day) || isNaN(month) || isNaN(year) || 
          day < 1 || day > 31 || month < 0 || month > 11) {
        return null;
      }
      
      const date = new Date(year, month, day);
      
      // Geçerli bir tarih mi kontrol et
      if (isNaN(date.getTime())) {
        return null;
      }
      
      return date;
    }
    
    // Doğrudan Date constructor'ı denemeden önce kontrol
    const directDate = new Date(cleanDateStr);
    if (!isNaN(directDate.getTime())) {
      return directDate;
    }
    
    return null;
  } catch (e) {
    console.error('Tarih ayrıştırma hatası:', e);
    return null;
  }
}

function parseTime(timeStr: string | null): Date | null {
  if (!timeStr) return null;
  
  try {
    const cleanTimeStr = timeStr.trim();
    
    // Saat formatını kontrol et: "HH:MM" veya "HH.MM"
    const parts = cleanTimeStr.split(/[:\.]/);
    
    if (parts.length >= 2) {
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      
      // Geçerli saat değerleri kontrolü
      if (isNaN(hours) || isNaN(minutes) || 
          hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
      }
      
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    }
    
    return null;
  } catch (e) {
    console.error('Saat ayrıştırma hatası:', e);
    return null;
  }
}

// Frontend'teki getTasimaFiyati fonksiyonunun tam kopyası
function getTasimaFiyati(sefer: any): number {
  if (!sefer.tumVeriler) return 0;
  
  // Sadece Ton/Fiyat sütununu al
  let tonFiyatValue = null;
  
  // Tam eşleşme ara
  if (sefer.tumVeriler['Ton/Fiyat']) {
    tonFiyatValue = sefer.tumVeriler['Ton/Fiyat'];
    console.log('Ton/Fiyat değeri bulundu:', tonFiyatValue);
  }
  
  // Ton/Fiyat değeri varsa onu kullan
  if (tonFiyatValue !== null && tonFiyatValue !== undefined && tonFiyatValue !== '') {
    const numValue = parseFloat(String(tonFiyatValue).replace(/[^\d.,]/g, '').replace(',', '.'));
    if (!isNaN(numValue)) {
      console.log('Ton/Fiyat parse edildi:', numValue);
      return numValue;
    }
  }
  
  console.log('Ton/Fiyat sütunu bulunamadı veya boş');
  return 0;
}

// Fiyat değerini işleme fonksiyonu
function processPriceValue(valueStr: string): number {
  const cleanValueStr = valueStr.trim();
  
  // Eğer değer birleştirilmişse (örn: "0 - 21888", "13600 - 113468")
  if (cleanValueStr.includes(' - ')) {
    const parts = cleanValueStr.split(' - ');
    console.log('Birleştirilmiş değer bulundu, parçalar:', parts);
    
    // Sıfır olmayan ilk değeri bul
    for (const part of parts) {
      const cleanPart = part.trim();
      const numValue = parseFloat(cleanPart.replace(/[^\d.,]/g, '').replace(',', '.'));
      
      if (!isNaN(numValue) && numValue > 0) {
        console.log('Sıfır olmayan değer bulundu:', numValue);
        return numValue;
      }
    }
    
    return 0; // Hiç sıfır olmayan değer yoksa
  }
  
  // Tek değerse, sıfır değilse döndür
  const numValue = parseFloat(cleanValueStr.replace(/[^\d.,]/g, '').replace(',', '.'));
  if (!isNaN(numValue) && numValue > 0) {
    console.log('Tek fiyat değeri işlendi:', numValue);
    return numValue;
  }
  
  return 0;
} 