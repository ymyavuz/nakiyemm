import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


export async function POST(request: Request) {
  try {
    const { ay, donem, seferler } = await request.json();
    
    console.log('Eski veri yükleme isteği:', { ay, donem, seferSayisi: Object.keys(seferler).length });
    
    // Parametreleri kontrol et
    if (!ay || !donem) {
      return NextResponse.json({
        error: 'Ay ve dönem bilgileri gereklidir'
      }, { status: 400 });
    }
    
    if (!seferler || Object.keys(seferler).length === 0) {
      return NextResponse.json({
        error: 'Kaydedilecek sefer verisi bulunamadı'
      }, { status: 400 });
    }
    
    let kaydedilenSeferSayisi = 0;
    const hatalar: string[] = [];
    
    // Her şirket için
    for (const [sirketIdStr, sirketSeferleri] of Object.entries(seferler)) {
      const sirketId = parseInt(sirketIdStr, 10);
      
      console.log(`Şirket ${sirketId} için sefer sayısı:`, Array.isArray(sirketSeferleri) ? sirketSeferleri.length : 'Dizi değil');
      
      if (!Array.isArray(sirketSeferleri)) {
        console.error(`Şirket ID ${sirketId} için geçersiz veri formatı:`, sirketSeferleri);
        continue;
      }
      
      // Her sefer için
      for (const sefer of sirketSeferleri) {
        try {
          const seferNo = parseInt(sefer.seferNo, 10) || 0;
          
          console.log(`Sefer işleniyor: Şirket ${sirketId}, Sefer ${seferNo}`, 
                     sefer.tumVeriler ? 'Veri mevcut' : 'Veri yok');
          
          // Şöför adına göre araç ID'sini bul
          let aracId = null;
          const soforAdi = getExcelValue(sefer, 'Şöför');
          
          if (soforAdi && soforAdi.trim() !== '') {
            console.log(`Şöför adı bulundu: "${soforAdi}"`);
            
            // Önce tüm araçları getirip debug için logla
            try {
              const allAraclar = await prisma.araclar.findMany({
                where: {
                  sirket_id: sirketId
                },
                select: {
                  arac_id: true,
                  sofor_adi: true
                }
              });
              
              console.log(`Şirket ${sirketId} için tüm şöförler:`, 
                         allAraclar.map(a => `ID: ${a.arac_id}, Ad: ${a.sofor_adi}`).join(', '));
              
              // Önce birebir eşleşme ara (case insensitive)
              const exactMatch = allAraclar.find(
                a => a.sofor_adi.toLowerCase().trim() === soforAdi.toLowerCase().trim()
              );
              
              if (exactMatch) {
                aracId = exactMatch.arac_id;
                console.log(`Tam eşleşme bulundu: "${soforAdi}" -> Araç ID: ${aracId}`);
              }
            } catch (e) {
              console.error('Araçları getirirken hata:', e);
            }

            // Tam eşleşme bulunamadıysa, şöför adından ID çıkarmayı dene
            if (!aracId) {
            // Önce şöför adından araç ID'sini çıkarmayı dene
            // Örnek formatlar: "Ahmet (12)", "Mehmet - 5", "Ali ID:3", "Ayşe [7]", "Hasan #9"
            const idPattern = /[\(\[\{#]?\s*(?:ID|id|Id)?:?\s*(\d+)\s*[\)\]\}]?|[\-–]\s*(\d+)\s*$|#\s*(\d+)/;
            const idMatch = soforAdi.match(idPattern);
            
            if (idMatch) {
              const extractedId = parseInt(idMatch[1] || idMatch[2] || idMatch[3], 10);
              if (!isNaN(extractedId)) {
                // Bu ID'ye sahip araç var mı kontrol et
                try {
                  const aracById = await prisma.araclar.findUnique({
                    where: {
                      arac_id: extractedId
                    }
                  });
                  
                  if (aracById) {
                    aracId = extractedId;
                    console.log(`Şöför "${soforAdi}" için ID'den araç bulundu: ID ${aracId}`);
                  } else {
                    console.log(`ID ${extractedId} için araç bulunamadı`);
                   
                    // Otomatik araç kaydı oluştur
                    const cleanSoforAdi = soforAdi
                      .replace(/[\(\[\{].*?[\)\]\}]/g, '')
                      .replace(/[\-–]\s*\d+\s*$/g, '')
                      .replace(/\s*ID:?\s*\d+/gi, '')
                      .replace(/#\s*\d+/g, '')
                      .trim();
                    
                    if (cleanSoforAdi) {
                      try {
                        // Önce aynı isimde araç var mı kontrol et
                        const mevcutArac = await prisma.araclar.findFirst({
                          where: {
                            sofor_adi: cleanSoforAdi,
                            sirket_id: sirketId
                          }
                        });
                        
                        if (!mevcutArac) {
                          // Yeni araç oluştur
                          const yeniArac = await prisma.araclar.create({
                            data: {
                              plaka: `PLAKA-${extractedId}`, // Geçici plaka
                              sofor_adi: cleanSoforAdi,
                              vergi_numarasi: '00000000000', // Geçici vergi no
                              sirket_id: sirketId
                  }
                          });
                          
                          aracId = yeniArac.arac_id;
                          console.log(`Şöför "${cleanSoforAdi}" için yeni araç oluşturuldu: ID ${aracId}`);
                        } else {
                          aracId = mevcutArac.arac_id;
                          console.log(`Şöför "${cleanSoforAdi}" için mevcut araç kullanıldı: ID ${aracId}`);
                        }
                      } catch (e) {
                        console.error('Otomatik araç oluşturma hatası:', e);
                      }
                    }
                  }
                } catch (e) {
                  console.error('Araç ID sorgusu sırasında hata:', e);
                }
              }
            }
            }
            
            // Hala araç bulunamadıysa, şöför adıyla daha esnek bir şekilde ara
            if (!aracId) {
              // Parantez, köşeli parantez veya ID bilgisini temizle
              const cleanSoforAdi = soforAdi
                .replace(/[\(\[\{].*?[\)\]\}]/g, '') // Parantez içini sil
                .replace(/[\-–]\s*\d+\s*$/g, '') // Sondaki tire ve rakamı sil
                .replace(/\s*ID:?\s*\d+/gi, '') // ID:123 formatını sil
                .replace(/#\s*\d+/g, '') // #123 formatını sil
                .trim();
              
              if (cleanSoforAdi) {
                try {
                  // Esnek arama - tam eşleşmede başarısız olduysa sadece kısmi eşleşme dene
                  console.log(`Şöför "${cleanSoforAdi}" için esnek arama yapılıyor...`);
                  
                  // Türkçe karakterleri dönüştürme fonksiyonu
                  const turkishChars: Record<string, string> = {
                    'ç': 'c', 'ğ': 'g', 'ı': 'i', 'İ': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
                    'Ç': 'c', 'Ğ': 'g', 'I': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
                  };
                  
                  // Türkçe karakterleri dönüştür
                  const normalizeName = (name: string): string => {
                    return name.split('').map(c => turkishChars[c as keyof typeof turkishChars] || c).join('');
                  };
                  
                  // Daha esnek bir arama algoritması uygulayalım - veritabanındaki isimle karşılaştırma
                  const tum_araclar = await prisma.araclar.findMany({
                    where: {
                      sirket_id: sirketId
                    },
                    select: {
                      arac_id: true,
                      sofor_adi: true
                    }
                  });
                  
                  // Önce tam olarak eşleşen (case insensitive) bir araç arayalım
                  let eslesenArac = tum_araclar.find(a => 
                    a.sofor_adi.toLowerCase().trim() === cleanSoforAdi.toLowerCase().trim()
                  );
                  
                  // Tam eşleşme yoksa, contains ile arayalım
                  if (!eslesenArac) {
                    eslesenArac = tum_araclar.find(a => 
                      a.sofor_adi.toLowerCase().includes(cleanSoforAdi.toLowerCase()) ||
                      cleanSoforAdi.toLowerCase().includes(a.sofor_adi.toLowerCase())
                    );
                  }
                  
                  // Türkçe karakter dönüşümlü arama
                  if (!eslesenArac) {
                    const normalizedSoforAdi = normalizeName(cleanSoforAdi.toLowerCase());
                    
                    // Türkçe karakter dönüşümlü eşleşme ara
                    eslesenArac = tum_araclar.find(a => {
                      const normalizedDbName = normalizeName(a.sofor_adi.toLowerCase());
                      return normalizedDbName === normalizedSoforAdi || 
                             normalizedDbName.includes(normalizedSoforAdi) ||
                             normalizedSoforAdi.includes(normalizedDbName);
                    });
                  }
                  
                  if (eslesenArac) {
                    aracId = eslesenArac.arac_id;
                    console.log(`Şöför "${cleanSoforAdi}" için araç bulundu: ID ${aracId}, Veritabanındaki şöför adı: "${eslesenArac.sofor_adi}"`);
                  } else {
                    // Şirket ID kısıtlamasını kaldırarak tekrar dene
                    console.log(`Şöför "${cleanSoforAdi}" için araç bulunamadı, tüm şirketlerde aranıyor...`);
                    
                    // Tüm şirketlerdeki araçları getir
                    const tumSirketlerAraclar = await prisma.araclar.findMany({
                      select: {
                        arac_id: true,
                        sofor_adi: true,
                        sirket_id: true
                      }
                    });
                    
                    // Aynı eşleştirme algoritmalarını tüm araçlar için uygula
                    let eslesenAracTumSirketler = tumSirketlerAraclar.find(a => 
                      a.sofor_adi.toLowerCase().trim() === cleanSoforAdi.toLowerCase().trim()
                    );
                    
                    // Tam eşleşme yoksa, contains ile arayalım
                    if (!eslesenAracTumSirketler) {
                      eslesenAracTumSirketler = tumSirketlerAraclar.find(a => 
                        a.sofor_adi.toLowerCase().includes(cleanSoforAdi.toLowerCase()) ||
                        cleanSoforAdi.toLowerCase().includes(a.sofor_adi.toLowerCase())
                      );
                    }
                    
                    // Türkçe karakter dönüşümlü arama
                    if (!eslesenAracTumSirketler) {
                      const normalizedSoforAdi = normalizeName(cleanSoforAdi.toLowerCase());
                      
                      // Türkçe karakter dönüşümlü eşleşme ara
                      eslesenAracTumSirketler = tumSirketlerAraclar.find(a => {
                        const normalizedDbName = normalizeName(a.sofor_adi.toLowerCase());
                        return normalizedDbName === normalizedSoforAdi || 
                               normalizedDbName.includes(normalizedSoforAdi) ||
                               normalizedSoforAdi.includes(normalizedDbName);
                      });
                    }
                    
                    if (eslesenAracTumSirketler) {
                      aracId = eslesenAracTumSirketler.arac_id;
                      console.log(`Başka şirkette (${eslesenAracTumSirketler.sirket_id}) şöför "${cleanSoforAdi}" için araç bulundu: ID ${aracId}, Veritabanındaki şöför adı: "${eslesenAracTumSirketler.sofor_adi}"`);
              } else {
                      console.log(`Şöför "${cleanSoforAdi}" için hiçbir şirkette araç bulunamadı`);
                      
                      // Otomatik araç kaydı oluştur
                      try {
                        // Yeni araç oluştur
                        const yeniArac = await prisma.araclar.create({
                          data: {
                            plaka: `PLAKA-${Date.now()}`, // Zaman damgalı geçici plaka
                            sofor_adi: cleanSoforAdi,
                            vergi_numarasi: '00000000000', // Geçici vergi no
                            sirket_id: sirketId
                          }
                        });
                        
                        aracId = yeniArac.arac_id;
                        console.log(`Şöför "${cleanSoforAdi}" için otomatik araç oluşturuldu: ID ${aracId}`);
                        hatalar.push(`Uyarı: Şöför "${cleanSoforAdi}" için otomatik araç kaydı oluşturuldu (ID: ${aracId}). Lütfen araç bilgilerini güncelleyin.`);
                      } catch (e) {
                        console.error('Otomatik araç oluşturma hatası:', e);
                        hatalar.push(`Hata: Şöför "${cleanSoforAdi}" için araç oluşturulamadı: ${e instanceof Error ? e.message : 'Bilinmeyen hata'}`);
                      }
                    }
              }
            } catch (e) {
              console.error('Araç sorgusu sırasında hata:', e);
                }
              }
            }
          }
          
          // İrsaliye numarasını ve diğer değerleri çıkart
          const irsaliyeNumarasi = getExcelValue(sefer, 'İrsaliye Numarası') || null;
          
          // Tarih alanını işle
          let irsaliyeTarihi = null;
          try {
            const irsaliyeTarihiStr = getExcelValue(sefer, 'İrsaliye Tarihi');
            if (irsaliyeTarihiStr) {
              const parsedDate = parseDate(irsaliyeTarihiStr);
              if (parsedDate && !isNaN(parsedDate.getTime())) {
                irsaliyeTarihi = parsedDate;
              }
            }
          } catch (e) {
            console.log('İrsaliye tarihi ayrıştırılamadı, null olarak kaydedilecek');
          }
          
          // Diğer alanları al
          const cikisYeri = getExcelValue(sefer, 'Çıkış Yeri') || '';
          const tahliyeEdilenFirma = getExcelValue(sefer, 'Tahliye Edilen Firma') || '';
          const tahliyeYeri = getExcelValue(sefer, 'Tahliye Yeri/Tesisi') || getExcelValue(sefer, 'Tahliye Yeri') || '';
          const tonajKg = getExcelValue(sefer, 'Tonaj/Kg') || '';
          
          // Araç tipini tonaj değerine göre belirle
          let aracTipi = '';
          if (tonajKg) {
            // Tonaj değerini parse et (kg cinsinden olabilir)
            const tonajStr = tonajKg.toString().replace(/[^\d.,]/g, '').replace(',', '.');
            const tonajValue = parseFloat(tonajStr);
            
            if (!isNaN(tonajValue)) {
              // Eğer değer 1000'den büyükse kg cinsinden olabilir, ton'a çevir
              const tonajTon = tonajValue > 1000 ? tonajValue / 1000 : tonajValue;
              
              if (tonajTon <= 23) {
                aracTipi = 'Kamyon';
              } else {
                aracTipi = 'Tır';
              }
              
              console.log(`Tonaj: ${tonajTon} ton -> Araç Tipi: ${aracTipi}`);
            }
          }
          
          if (!aracTipi) {
            aracTipi = 'Belirtilmemiş';
            console.log('Tonaj değeri bulunamadı, araç tipi belirtilmemiş olarak ayarlandı');
          }
          
          // Sayısal değerleri parse et
          const tasimaFiyatiStr = getTasimaFiyati(sefer);
          const soforUcretiStr = getExcelValue(sefer, 'Şöför Ücreti');
          const soforFaturaUcretiStr = getExcelValue(sefer, 'Şöför Fatura Ücreti');
          const mtStr = getExcelValue(sefer, 'MT');
          
          // Debug için mevcut sütunları göster
          console.log('Mevcut Excel sütunları:', Object.keys(sefer.tumVeriler || {}));
          console.log('Şöför Ücreti ham değer:', soforUcretiStr);
          console.log('Şöför Fatura Ücreti ham değer:', soforFaturaUcretiStr);
          
          const sirketten_alinan_ucret = tasimaFiyatiStr || 0;
          const sofore_odenen_ucret = soforUcretiStr ? parseFloat(soforUcretiStr.toString().replace(/[^\d.,]/g, '').replace(',', '.')) || 0 : 0;
          const sofor_fatura_ucreti = soforFaturaUcretiStr ? parseFloat(soforFaturaUcretiStr.toString().replace(/[^\d.,]/g, '').replace(',', '.')) || 0 : 0;
          const mt = mtStr ? parseFloat(mtStr.toString().replace(/[^\d.,]/g, '').replace(',', '.')) : null;
          
          console.log('Parse edilmiş değerler:', {
            sirketten_alinan_ucret,
            sofore_odenen_ucret,
            sofor_fatura_ucreti
          });
          
          // Açıklama alanı
          const aciklama = getExcelValue(sefer, 'TOPLAM KM VEYA FARK') || getExcelValue(sefer, 'Toplam KM Veya Fark') || null;
          
          // arac_id değerini loglayalım ve seferi kaydedelim
          console.log(`===> Kaydedilecek sefer için arac_id: ${aracId}, tipi: ${typeof aracId}, soforAdi: ${soforAdi}`);
          
          // arac_id null veya undefined değilse sayısal tipe çevir
          const parsedAracId = aracId !== null && aracId !== undefined ? Number(aracId) : null;
          
          // Eğer halen null değilse ve geçersiz bir sayı değilse (NaN) kullan
          const finalAracId = parsedAracId !== null && !isNaN(parsedAracId) ? parsedAracId : null;
          
          console.log(`===> Dönüştürülmüş arac_id: ${finalAracId}, tipi: ${typeof finalAracId}`);
          
          // Yıl bilgisini hesapla - irsaliye tarihinden veya mevcut yıldan
          let yil = new Date().getFullYear(); // Varsayılan olarak mevcut yıl
          if (irsaliyeTarihi) {
            yil = irsaliyeTarihi.getFullYear();
          }

          // Seferi veritabanına kaydet
          await prisma.seferler.create({
            data: {
              sira_no: seferNo,
              irsaliye_numarasi: irsaliyeNumarasi,
              irsaliye_tarihi: irsaliyeTarihi,
              kalkis_saati: null as any, // Eski verilerde genellikle saat bilgisi yok
              varis_saati: null as any,
              cikis_yeri: cikisYeri,
              tahliye_edilen_firma: tahliyeEdilenFirma,
              tahliye_yeri: tahliyeYeri,
              tonaj_kg: tonajKg as any,
              arac_tipi: aracTipi,
              mt: mt as any,
              aciklama: aciklama,
              sirketten_alinan_ucret: sirketten_alinan_ucret,
              sofore_odenen_ucret: sofore_odenen_ucret,
              sofor_fatura_ucreti: sofor_fatura_ucreti as any,
              sirket_id: sirketId,
              arac_id: finalAracId as any,
              ay: ay,
              donem: donem,
              yil: yil  // Yıl alanını ekliyoruz
            }
          });
          
          kaydedilenSeferSayisi++;
          
        } catch (error) {
          console.error(`Şirket ${sirketId}, Sefer ${sefer.seferNo} kaydedilirken hata:`, error);
          hatalar.push(`Şirket ${sirketId}, Sefer ${sefer.seferNo}: ${error instanceof Error ? error.message : 'Bilinmeyen hata'}`);
        }
      }
    }
    
    // Sonuç mesajı
    let mesaj = `${kaydedilenSeferSayisi} sefer başarıyla kaydedildi.`;
    if (hatalar.length > 0) {
      mesaj += ` ${hatalar.length} seferde hata oluştu.`;
    }
    
    return NextResponse.json({
      success: true,
      message: mesaj,
      kaydedilenSeferSayisi,
      hataSayisi: hatalar.length,
      hatalar: hatalar.slice(0, 10) // İlk 10 hatayı göster
    });
    
  } catch (error) {
    console.error('Eski veri yükleme hatası:', error);
    return NextResponse.json({
      error: 'Veri kaydedilirken bir hata oluştu: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata')
    }, { status: 500 });
  }
}

// Excel'den değer alma fonksiyonu
function getExcelValue(sefer: any, columnName: string): string | null {
  if (!sefer.tumVeriler) return null;
  
  // Şöför için özel arama
  if (columnName === 'Şöför') {
    console.log('>>> Şöför değeri aranıyor...');
    
    // Önce tam eşleşme ara
    if (sefer.tumVeriler[columnName] !== undefined && 
        sefer.tumVeriler[columnName] !== null && 
        sefer.tumVeriler[columnName] !== '') {
      console.log('>>> Tam eşleşme bulundu:', sefer.tumVeriler[columnName]);
      return sefer.tumVeriler[columnName].toString();
    }
    
    // Kısmi eşleşme ara
    const soforKeys = Object.keys(sefer.tumVeriler).filter(key => {
      const lowerKey = key.toLowerCase();
      return lowerKey.includes('şöför') || 
             lowerKey.includes('şoför') || 
             lowerKey.includes('soför') || 
             lowerKey.includes('sofor') ||
             lowerKey.includes('driver') ||
             lowerKey.includes('sürücü');
    });
    
    if (soforKeys.length > 0) {
      // En uygun anahtar (en kısa olan) şöför adıdır, fiyat vs değil
      const bestSoforKey = soforKeys.sort((a, b) => a.length - b.length)[0];
      console.log('>>> Şöför için en uygun sütun bulundu:', bestSoforKey);
      
      if (sefer.tumVeriler[bestSoforKey]) {
        console.log('>>> Şöför değeri:', sefer.tumVeriler[bestSoforKey]);
        return sefer.tumVeriler[bestSoforKey].toString();
      }
    }
    
    console.log('>>> Şöför değeri bulunamadı!');
    return null;
  }
  
  // Öncelikle tam eşleşme ara
  if (sefer.tumVeriler[columnName] !== undefined && 
      sefer.tumVeriler[columnName] !== null && 
      sefer.tumVeriler[columnName] !== '') {
    return sefer.tumVeriler[columnName].toString();
  }
  
  // Şöför Ücreti için özel arama
  if (columnName === 'Şöför Ücreti') {
    const matchingKey = Object.keys(sefer.tumVeriler).find(k => {
      const lowerK = k.toLowerCase();
      return (lowerK.includes('şöför') || lowerK.includes('şoför') || 
              lowerK.includes('soför') || lowerK.includes('sofor')) &&
             (lowerK.includes('ücret') || lowerK.includes('ucret')) &&
             !lowerK.includes('fatura');
    });
    
    if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
        sefer.tumVeriler[matchingKey] !== undefined && 
        sefer.tumVeriler[matchingKey] !== '') {
      console.log(`Şöför Ücreti için eşleşen sütun: ${matchingKey}`);
      return sefer.tumVeriler[matchingKey].toString();
    }
  }
  
  // Şöför Fatura Ücreti için özel arama
  if (columnName === 'Şöför Fatura Ücreti') {
    const matchingKey = Object.keys(sefer.tumVeriler).find(k => {
      const lowerK = k.toLowerCase();
      return (lowerK.includes('şöför') || lowerK.includes('şoför') || 
              lowerK.includes('soför') || lowerK.includes('sofor')) &&
             lowerK.includes('fatura');
    });
    
    if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
        sefer.tumVeriler[matchingKey] !== undefined && 
        sefer.tumVeriler[matchingKey] !== '') {
      console.log(`Şöför Fatura Ücreti için eşleşen sütun: ${matchingKey}`);
      return sefer.tumVeriler[matchingKey].toString();
    }
  }
  
  // Genel kısmi eşleşme ara (büyük/küçük harf duyarsız)
  const matchingKey = Object.keys(sefer.tumVeriler).find(key => 
    key.toLowerCase().includes(columnName.toLowerCase()) ||
    columnName.toLowerCase().includes(key.toLowerCase())
  );
  
  if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
      sefer.tumVeriler[matchingKey] !== undefined && 
      sefer.tumVeriler[matchingKey] !== '') {
    return sefer.tumVeriler[matchingKey].toString();
  }
  
  return null;
}

// Tarih ayrıştırma fonksiyonu
function parseDate(dateStr: string | null): Date | null {
  if (!dateStr) return null;
  
  try {
    const cleanDateStr = dateStr.toString().trim();
    
    // Farklı tarih formatlarını dene
    let parsedDate = null;
    
    // DD MM YYYY formatı (boşlukla ayrılmış)
    if (cleanDateStr.includes(' ') && !cleanDateStr.includes('.') && !cleanDateStr.includes('/') && !cleanDateStr.includes('-')) {
      const parts = cleanDateStr.split(' ').filter(part => part.trim() !== '');
      if (parts.length >= 3) {
        const gun = parseInt(parts[0], 10);
        const ay = parseInt(parts[1], 10);
        const yil = parseInt(parts[2], 10);
        
        if (!isNaN(gun) && !isNaN(ay) && !isNaN(yil) && 
            gun >= 1 && gun <= 31 && ay >= 1 && ay <= 12) {
          parsedDate = new Date(yil, ay - 1, gun);
        }
      }
    }
    // DD.MM.YYYY formatı
    else if (cleanDateStr.includes('.')) {
      const [gun, ay, yil] = cleanDateStr.split('.');
      if (gun && ay && yil) {
        parsedDate = new Date(parseInt(yil), parseInt(ay) - 1, parseInt(gun));
      }
    }
    // DD/MM/YYYY formatı
    else if (cleanDateStr.includes('/')) {
      const [gun, ay, yil] = cleanDateStr.split('/');
      if (gun && ay && yil) {
        parsedDate = new Date(parseInt(yil), parseInt(ay) - 1, parseInt(gun));
      }
    }
    // YYYY-MM-DD formatı
    else if (cleanDateStr.includes('-')) {
      parsedDate = new Date(cleanDateStr);
    }
    // Excel serial number formatı (sayı)
    else if (!isNaN(Number(cleanDateStr))) {
      // Excel'de tarihler 1900-01-01'den itibaren gün sayısı olarak saklanır
      const excelEpoch = new Date(1900, 0, 1);
      const days = parseInt(cleanDateStr) - 2; // Excel'in leap year bug'ı için -2
      parsedDate = new Date(excelEpoch.getTime() + days * 24 * 60 * 60 * 1000);
    }
    
    if (parsedDate && !isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  } catch (e) {
    console.error('Tarih ayrıştırma hatası:', e);
  }
  
  return null;
}

// Frontend'teki getTasimaFiyati fonksiyonunun kopyası - sadece Ton/Fiyat sütununu alıyor
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