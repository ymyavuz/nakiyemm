import React, { useState, useEffect } from 'react';

interface Sefer {
  sefer_id: number;
  sira_no: number;
  irsaliye_numarasi?: string;
  irsaliye_tarihi?: string;
  cikis_yeri: string;
  tahliye_edilen_firma: string;
  tahliye_yeri: string;
  tonaj_kg: string;
  mt?: number;
  arac_tipi: string;
  sirketten_alinan_ucret: number;
  sofore_odenen_ucret: number;
  aciklama?: string;
  sirket?: {
    sirket_id: number;
    sirket_adi: string;
  };
  arac?: {
    arac_id: number;
    plaka: string;
    sofor_adi: string;
  };
}

// Fiyat listesi için tip tanımı
interface FiyatListesi {
  fiyat_listesi_id: number;
  sirket_id: number;
  tahliye_yeri: string;
  km: number | null;
  arac_tipi: string;
  ucret: number;
  sofor_ucreti: number | null;
}

interface SeferlerTablosuProps {
  seferler: Sefer[];
  fiyatGuncelle: (seferId: number, yeniFiyat: number) => Promise<void>;
}

const SeferlerTablosu: React.FC<SeferlerTablosuProps> = ({ seferler, fiyatGuncelle }) => {
  const [yeniFiyatlar, setYeniFiyatlar] = useState<{ [key: number]: number }>({});
  const [kaydediliyor, setKaydediliyor] = useState(false);
  const [fiyatListesi, setFiyatListesi] = useState<FiyatListesi[]>([]);
  const [eslesenYerler, setEslesenYerler] = useState<{ [key: number]: string }>({});
  
  // Seferlerin sıra numarasına göre sıralanması için yardımcı fonksiyon
  const siralamaYap = (seferler: Sefer[]): Sefer[] => {
    return [...seferler].sort((a, b) => {
      const aNum = Number(a.sira_no);
      const bNum = Number(b.sira_no);
      return aNum - bNum;
    });
  };
  
  // Seferler değiştiğinde yeniFiyatlar state'ini güncelle
  useEffect(() => {
    const fiyatlar: { [key: number]: number } = {};
    seferler.forEach(sefer => {
      if (sefer && sefer.sefer_id && typeof sefer.sirketten_alinan_ucret === 'number') {
        // Sayısal değer olarak kaydet
        fiyatlar[sefer.sefer_id] = Number(sefer.sirketten_alinan_ucret);
      }
    });
    console.log("Fiyatlar state yüklendi:", fiyatlar);
    setYeniFiyatlar(fiyatlar);
  }, [seferler]);

  // Tüm fiyat listesini getir
  useEffect(() => {
    fetchFiyatListesi();
  }, [seferler]);

  // Fiyat listesini getiren fonksiyon
  const fetchFiyatListesi = async () => {
    try {
      console.log("Fiyat listesi getiriliyor...");
      const response = await fetch('/api/fiyat-listesi?tip=sirket');
      if (response.ok) {
        const data = await response.json();
        setFiyatListesi(data);
        console.log(`Alınan fiyat listesi: ${data.length} kayıt`);
        
        // Mevcut fiyatlar için eşleşen yerleri bul
        const eslesmeYerleri: { [key: number]: string } = {};
        seferler.forEach(sefer => {
          if (sefer.sirket) {
            // Araç tipine göre filtrelenmiş fiyat listesi
            const filteredList = data.filter(
              (fiyat: FiyatListesi) =>
                fiyat.sirket_id === sefer.sirket?.sirket_id &&
                fiyat.arac_tipi === sefer.arac_tipi
            );
            
            console.log(`Sefer #${sefer.sefer_id} için filtrelenmiş fiyat listesi (${sefer.arac_tipi}):`, filteredList.length);
            
            // Fiyata en yakın olanı bul
            const eslesenFiyat = filteredList.find(
              (fiyat: FiyatListesi) =>
                Math.abs(fiyat.ucret - sefer.sirketten_alinan_ucret) < 1.0 // Tolerans değeri
            );
            
            if (eslesenFiyat) {
              eslesmeYerleri[sefer.sefer_id] = eslesenFiyat.tahliye_yeri;
              console.log(`Sefer #${sefer.sefer_id} için eşleşen fiyat bulundu: ${eslesenFiyat.tahliye_yeri} (Fiyat: ${eslesenFiyat.ucret})`);
            } else {
              console.log(`Sefer #${sefer.sefer_id} için eşleşen fiyat bulunamadı - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Fiyat: ${sefer.sirketten_alinan_ucret}`);
              
              // En yakın fiyatı göster (debug için)
              if (filteredList.length > 0) {
                filteredList.sort((a: FiyatListesi, b: FiyatListesi) => 
                  Math.abs(a.ucret - sefer.sirketten_alinan_ucret) - Math.abs(b.ucret - sefer.sirketten_alinan_ucret)
                );
                console.log(`En yakın fiyat: ${filteredList[0].tahliye_yeri} (Fiyat: ${filteredList[0].ucret}, Fark: ${Math.abs(filteredList[0].ucret - sefer.sirketten_alinan_ucret)})`);
              }
            }
          }
        });
        setEslesenYerler(eslesmeYerleri);
      }
    } catch (error) {
      console.error('Fiyat listesi getirme hatası:', error);
    }
  };

  // Girilen fiyat için eşleşen tahliye yerini bul
  const findMatchingTahliyeYeri = (sefer: Sefer, fiyat: number): string => {
    if (!sefer.sirket) return '';
    
    console.log(`Eşleşme aranıyor - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Fiyat: ${fiyat}`);
    
    // Araç tipine göre filtrelenmiş fiyat listesi
    const filteredList = fiyatListesi.filter(
      f => 
        f.sirket_id === sefer.sirket?.sirket_id &&
        f.arac_tipi === sefer.arac_tipi
    );
    
    // Fiyata en yakın olanı bul
    const eslesenFiyat = filteredList.find(
      f => Math.abs(f.ucret - fiyat) < 1.0 // Tolerans değeri
    );
    
    if (eslesenFiyat) {
      console.log(`Eşleşen fiyat bulundu: ${eslesenFiyat.tahliye_yeri} (Fiyat: ${eslesenFiyat.ucret})`);
    } else {
      console.log(`Eşleşen fiyat bulunamadı`);
      // Tüm olası eşleşmeleri yazdır
      console.log("Olası eşleşmeler:");
      filteredList.forEach(f => {
        console.log(`  Tahliye: ${f.tahliye_yeri}, Fiyat: ${f.ucret}, Fark: ${Math.abs(f.ucret - fiyat)}`);
      });
    }
    
    return eslesenFiyat ? eslesenFiyat.tahliye_yeri : '';
  };

  // Fiyat debug butonu
  const debugFiyatEslesmeleri = () => {
    console.log("Mevcut fiyat listesi:", fiyatListesi);
    console.log("Mevcut eşleşen yerler:", eslesenYerler);
    
    seferler.forEach(sefer => {
      if (sefer.sirket) {
        console.log(`Sefer #${sefer.sefer_id} - Şirket: ${sefer.sirket.sirket_adi}, Araç: ${sefer.arac_tipi}, Fiyat: ${sefer.sirketten_alinan_ucret}`);
      }
    });
    
    alert("Fiyat eşleştirme bilgileri konsola yazdırıldı. Geliştirici konsolunu kontrol edin.");
  };

  const fiyatDegistir = (seferId: number, yeniFiyat: number, sefer: Sefer) => {
    if (seferId && !isNaN(yeniFiyat)) {
      // Sayısal değer olarak kaydet
      const numericFiyat = Number(yeniFiyat);
      console.log(`Fiyat değiştiriliyor - Sefer #${seferId}: ${sefer.sirketten_alinan_ucret} -> ${numericFiyat}`);
      
      // Fiyatlar state'ini güncelle
      setYeniFiyatlar(prev => {
        const updated = {
          ...prev,
          [seferId]: numericFiyat
        };
        
        console.log("Güncel fiyatlar:", updated);
        return updated;
      });
      
      // Yeni fiyata göre tahliye yeri eşleştirmesini güncelle
      const eslesenYer = findMatchingTahliyeYeri(sefer, numericFiyat);
      console.log(`Sefer #${seferId} için bulunan eşleşen yer: "${eslesenYer}"`);
      
      // Her durumda state'i güncelle (boş string bile olsa)
      setEslesenYerler(prev => ({
        ...prev,
        [seferId]: eslesenYer
      }));
    }
  };

  // Input değişikliği işleyicisi
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, sefer: Sefer) => {
    const value = e.target.value;
    const numValue = parseFloat(value);
    
    if (!isNaN(numValue) && numValue > 0) {
      // Sayısal değer kontrolü
      console.log(`Input değeri değişti: ${value}, sayısal değer: ${numValue}`);
      fiyatDegistir(sefer.sefer_id, numValue, sefer);
    } else {
      // Değer boş veya geçersizse, fiyat yerini temizle
      setYeniFiyatlar(prev => ({
        ...prev,
        [sefer.sefer_id]: value === '' ? 0 : numValue || 0
      }));
      setEslesenYerler(prev => ({
        ...prev,
        [sefer.sefer_id]: ''
      }));
    }
  };

  // Toplam fiyatı hesapla (MT * Birim Fiyat)
  const hesaplaToplamFiyat = (sefer: Sefer, birimFiyat: number): number => {
    // YAP-İstanbul (sirket_id=2) için birim fiyat doğrudan toplam fiyat olarak kullanılır
    if (sefer.sirket?.sirket_id === 2) {
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
  const hesaplaKDVDahilGelir = (sefer: Sefer, birimFiyat: number): number => {
    const temelGelir = hesaplaToplamFiyat(sefer, birimFiyat);
    const kdv = hesaplaKDV(temelGelir);
    return temelGelir + kdv;
  };

  // Fiyat değişti mi kontrolü
  const fiyatDegistiMi = (sefer: Sefer): boolean => {
    if (!sefer || !sefer.sefer_id || yeniFiyatlar[sefer.sefer_id] === undefined) {
      return false;
    }
    
    // Doğru karşılaştırma için sayısal değerlere dönüştürme
    const yeniFiyat = Number(yeniFiyatlar[sefer.sefer_id]);
    const eskiFiyat = Number(sefer.sirketten_alinan_ucret);
    
    // Hata ayıklaması
    console.log(`Fiyat değişimi kontrolü - Sefer #${sefer.sefer_id}: ` +
      `Eski: ${eskiFiyat}, Yeni: ${yeniFiyat}, Değişti mi: ${Math.abs(yeniFiyat - eskiFiyat) > 0.001}`);
    
    // Tolerans değeri ile karşılaştırma
    return Math.abs(yeniFiyat - eskiFiyat) > 0.001;
  };

  // Tüm fiyat değişikliklerini toplu olarak kaydet
  const tumFiyatlariKaydet = async () => {
    setKaydediliyor(true);
    let basariliKayit = 0;
    let basarisizKayit = 0;
    
    try {
      // Değişiklik yapılan seferleri ve değerlerini loglayalım
      console.log("Mevcut fiyatlar:", yeniFiyatlar);
      
      // Değişen fiyatları bul
      const degisiklikYapilanSeferler = seferler.filter(sefer => fiyatDegistiMi(sefer));
      
      console.log(`Değişiklik yapılan sefer sayısı: ${degisiklikYapilanSeferler.length}`);
      
      if (degisiklikYapilanSeferler.length === 0) {
        alert('Değişiklik yapılmadı. Lütfen önce fiyat değişikliği yapınız.');
        return;
      }
      
      // Onay isteği
      if (!window.confirm(`${degisiklikYapilanSeferler.length} adet sefer için fiyat değişikliği yapılacak. Onaylıyor musunuz?`)) {
        return;
      }
      
      // Her bir değişikliği kaydet
      for (const sefer of degisiklikYapilanSeferler) {
        try {
          const yeniFiyat = yeniFiyatlar[sefer.sefer_id];
          console.log(`Kaydediliyor - Sefer #${sefer.sefer_id}: ${sefer.sirketten_alinan_ucret} -> ${yeniFiyat}`);
          
          await fiyatGuncelle(sefer.sefer_id, yeniFiyat);
          basariliKayit++;
          
          // Server'dan en güncel veriyi al
          sefer.sirketten_alinan_ucret = yeniFiyat;
        } catch (error) {
          console.error(`Sefer #${sefer.sefer_id} fiyatı güncellenirken hata:`, error);
          basarisizKayit++;
        }
      }
      
      // Bilgi mesajı göster
      if (basariliKayit > 0 && basarisizKayit === 0) {
        alert(`${basariliKayit} adet fiyat değişikliği başarıyla kaydedildi.`);
      } else if (basariliKayit > 0 && basarisizKayit > 0) {
        alert(`${basariliKayit} adet fiyat değişikliği kaydedildi, ${basarisizKayit} adet kayıt başarısız oldu.`);
      } else {
        alert('Fiyat değişiklikleri kaydedilemedi.');
      }
    } catch (error) {
      console.error('Fiyatlar kaydedilirken hata:', error);
      alert('Fiyatlar kaydedilirken bir hata oluştu');
    } finally {
      setKaydediliyor(false);
    }
  };

  // Seferleri şirketlere göre gruplandır
  const sirketGruplari = seferler.reduce((gruplar, sefer) => {
    if (!sefer.sirket) return gruplar;
    
    const sirketId = sefer.sirket.sirket_id;
    if (!gruplar[sirketId]) {
      gruplar[sirketId] = {
        sirket: sefer.sirket,
        seferler: []
      };
    }
    
    gruplar[sirketId].seferler.push(sefer);
    return gruplar;
  }, {} as { 
    [key: number]: { 
      sirket: { sirket_id: number; sirket_adi: string }; 
      seferler: Sefer[] 
    } 
  });

  // Fiyat değeri al
  const getFiyatDegeri = (sefer: Sefer): number => {
    if (sefer && sefer.sefer_id && yeniFiyatlar[sefer.sefer_id] !== undefined) {
      return yeniFiyatlar[sefer.sefer_id];
    }
    return sefer ? sefer.sirketten_alinan_ucret : 0;
  };
  
  // Şirket bazında toplam tutarı hesapla
  const hesaplaSirketToplami = (seferler: Sefer[]): number => {
    return seferler.reduce((toplam, sefer) => {
      const birimFiyat = getFiyatDegeri(sefer);
      const normalFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
      return toplam + normalFiyat;
    }, 0);
  };
  
  // Genel toplam tutarı hesapla
  const genelToplamTutar = seferler.reduce((toplam, sefer) => {
    const birimFiyat = getFiyatDegeri(sefer);
    const normalFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
    return toplam + normalFiyat;
  }, 0);

  // Genel toplam KDV hesapla
  const genelToplamKDV = seferler.reduce((toplam, sefer) => {
    const birimFiyat = getFiyatDegeri(sefer);
    const normalFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
    const kdv = hesaplaKDV(normalFiyat);
    return toplam + kdv;
  }, 0);

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Toplam Tutar: {genelToplamTutar.toLocaleString('tr-TR')} TL</h2>
          <p className="text-sm text-gray-600">KDV (%20): {genelToplamKDV.toLocaleString('tr-TR')} TL</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={debugFiyatEslesmeleri}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
          >
            Fiyat Debug
          </button>
          <button
            onClick={tumFiyatlariKaydet}
            disabled={kaydediliyor}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
          >
            {kaydediliyor ? 'Kaydediliyor...' : 'Tüm Değişiklikleri Kaydet'}
          </button>
        </div>
      </div>
      
      {Object.values(sirketGruplari).map((grup) => {
        // Her grup için seferleri sıra numarasına göre sırala
        const siraliSeferler = siralamaYap(grup.seferler);
        
        return (
        <div key={grup.sirket.sirket_id} className="mb-8">
          <div className="bg-gray-100 p-4 rounded-t-lg border border-gray-300">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {grup.sirket.sirket_adi}
                {grup.sirket.sirket_id === 2 && 
                  <span className="text-sm ml-2 font-normal text-red-600">
                    (Bu şirket için birim fiyat = toplam fiyat)
                  </span>
                }
              </h3>
              <div className="text-right">
                <span className="font-medium">
                  Toplam: {hesaplaSirketToplami(grup.seferler).toLocaleString('tr-TR')} TL
                </span>
                <div className="text-sm text-gray-600">
                  KDV: {grup.seferler.reduce((toplam, sefer) => {
                    const birimFiyat = getFiyatDegeri(sefer);
                    const normalFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
                    const kdv = hesaplaKDV(normalFiyat);
                    return toplam + kdv;
                  }, 0).toLocaleString('tr-TR')} TL
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-t-0">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-3 border text-left w-16">Sıra No</th>
                  <th className="py-2 px-3 border text-left">Araç/Şoför</th>
                  <th className="py-2 px-3 border text-left">İrsaliye No</th>
                  <th className="py-2 px-3 border text-left">İrsaliye Tarihi</th>
                  <th className="py-2 px-3 border text-left">Çıkış Yeri</th>
                  <th className="py-2 px-3 border text-left w-40">Tahliye Edilen Firma</th>
                  <th className="py-2 px-3 border text-left">Tahliye Yeri</th>
                  <th className="py-2 px-3 border text-left">MT</th>
                  <th className="py-2 px-3 border text-left">Araç Tipi</th>
                  <th className="py-2 px-3 border text-left w-32">
                    {grup.sirket.sirket_id === 2 ? 'Toplam Fiyat (TL)' : 'Birim Fiyat (TL)'}
                  </th>
                  <th className="py-2 px-3 border text-left">
                    {grup.sirket.sirket_id === 2 ? 'Toplam Fiyat (TL)' : 'Fiyat (TL)'}
                  </th>
                  <th className="py-2 px-3 border text-left">Fiyat Yeri</th>
                </tr>
              </thead>
              <tbody>
                {siraliSeferler.map((sefer) => sefer && (
                  <tr key={sefer.sefer_id} className="hover:bg-gray-50">
                    <td className="py-2 px-3 border w-16">{sefer.sira_no}</td>
                    <td className="py-2 px-3 border">{sefer.arac ? `${sefer.arac.sofor_adi}` : '-'}</td>
                    <td className="py-2 px-3 border">{sefer.irsaliye_numarasi || '-'}</td>
                    <td className="py-2 px-3 border">
                      {sefer.irsaliye_tarihi ? new Date(sefer.irsaliye_tarihi).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="py-2 px-3 border">{sefer.cikis_yeri}</td>
                    <td className="py-2 px-3 border w-40">{sefer.tahliye_edilen_firma}</td>
                    <td className="py-2 px-3 border">{sefer.tahliye_yeri}</td>
                    <td className="py-2 px-3 border">
                      {sefer.sirket?.sirket_id === 2 ? 
                        <span className="text-xs text-gray-500">(Kullanılmıyor)</span> : 
                        (sefer.mt !== undefined ? sefer.mt : '-')
                      }
                    </td>
                    <td className="py-2 px-3 border">{sefer.arac_tipi}</td>
                    <td className="py-2 px-3 border w-32">
                      <input
                        type="number"
                        className={`w-full p-1 border rounded ${fiyatDegistiMi(sefer) ? 'bg-yellow-50 border-yellow-500' : ''}`}
                        value={getFiyatDegeri(sefer)}
                        onChange={(e) => handleInputChange(e, sefer)}
                      />
                    </td>
                    <td className="py-2 px-3 border font-medium">
                      {hesaplaToplamFiyat(sefer, getFiyatDegeri(sefer)).toLocaleString('tr-TR')}
                    </td>
                    <td className="py-2 px-3 border font-medium text-green-600">
                      {eslesenYerler[sefer.sefer_id] || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default SeferlerTablosu; 