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
  sofor_fatura_ucreti?: number;
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
  const [faturaModuAktif, setFaturaModuAktif] = useState(false);
  const [faturaFiyatlari, setFaturaFiyatlari] = useState<{ [key: number]: number }>({});
  const [faturaKaydediliyor, setFaturaKaydediliyor] = useState(false);
  
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
      if (sefer && sefer.sefer_id && typeof sefer.sofore_odenen_ucret === 'number') {
        fiyatlar[sefer.sefer_id] = sefer.sofore_odenen_ucret;
      }
    });
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
      const response = await fetch('/api/fiyat-listesi?tip=sofor');
      if (response.ok) {
        const data = await response.json();
        setFiyatListesi(data);
        console.log(`Alınan fiyat listesi: ${data.length} kayıt`);
        
        // Mevcut fiyatlar için eşleşen yerleri bul
        const eslesmeYerleri: { [key: number]: string } = {};
        const otomatikFiyatlar: { [key: number]: number } = {...yeniFiyatlar};
        
        seferler.forEach(sefer => {
          if (sefer.sirket) {
            // Araç tipine göre filtrelenmiş fiyat listesi
            const filteredList = data.filter(
              (fiyat: FiyatListesi) =>
                fiyat.sirket_id === sefer.sirket?.sirket_id &&
                fiyat.arac_tipi === sefer.arac_tipi
            );
            
            console.log(`Şoför sefer #${sefer.sefer_id} için filtrelenmiş fiyat listesi (${sefer.arac_tipi}):`, filteredList.length);
            
            // ŞİRKET fiyatına en yakın olanı bul (sofore_odenen_ucret yerine sirketten_alinan_ucret'e göre)
            const eslesenFiyat = filteredList.find(
              (fiyat: FiyatListesi) =>
                Math.abs(fiyat.ucret - sefer.sirketten_alinan_ucret) < 1.0 // Tolerans değeri
            );
            
            if (eslesenFiyat) {
              eslesmeYerleri[sefer.sefer_id] = eslesenFiyat.tahliye_yeri;
              
              // Şoför ücreti varsa, bu ücreti otomatik olarak ayarla
              if (eslesenFiyat.sofor_ucreti !== null) {
                otomatikFiyatlar[sefer.sefer_id] = eslesenFiyat.sofor_ucreti;
              }
              
              console.log(`Sefer #${sefer.sefer_id} için şirket fiyatına göre eşleşen fiyat bulundu: ${eslesenFiyat.tahliye_yeri} (Fiyat: ${eslesenFiyat.ucret}, Şoför Ücreti: ${eslesenFiyat.sofor_ucreti})`);
            } else {
              console.log(`Sefer #${sefer.sefer_id} için şirket fiyatına göre eşleşen fiyat bulunamadı - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}`);
              
              // En yakın fiyatı göster (debug için)
              if (filteredList.length > 0) {
                filteredList.sort((a: FiyatListesi, b: FiyatListesi) => 
                  Math.abs(a.ucret - sefer.sirketten_alinan_ucret) - Math.abs(b.ucret - sefer.sirketten_alinan_ucret)
                );
                console.log(`En yakın şirket fiyatı: ${filteredList[0].tahliye_yeri} (Fiyat: ${filteredList[0].ucret}, Fark: ${Math.abs(filteredList[0].ucret - sefer.sirketten_alinan_ucret)})`);
              }
            }
          }
        });
        
        setEslesenYerler(eslesmeYerleri);
        // Yeni fiyatları set et
        setYeniFiyatlar(otomatikFiyatlar);
      }
    } catch (error: any) {
      console.error('Fiyat listesi getirme hatası:', error);
    }
  };

  // Girilen fiyat için eşleşen tahliye yerini bul
  const findMatchingTahliyeYeri = (sefer: Sefer, fiyat: number): string => {
    if (!sefer.sirket) return '';
    
    console.log(`Şoför eşleşme aranıyor - Şirket: ${sefer.sirket.sirket_id}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}, Girilen Şoför Fiyatı: ${fiyat}`);
    
    // Araç tipine göre filtrelenmiş fiyat listesi
    const filteredList = fiyatListesi.filter(
      f => 
        f.sirket_id === sefer.sirket?.sirket_id &&
        f.arac_tipi === sefer.arac_tipi
    );
    
    // 1. İlk olarak girilen şoför fiyatına tam eşleşme var mı bakalım
    let eslesenFiyat = filteredList.find(
      f => f.sofor_ucreti !== null && Math.abs(f.sofor_ucreti - fiyat) < 0.1 // Şoför fiyatı için daha hassas tolerans
    );
    
    if (eslesenFiyat) {
      console.log(`Şoför fiyatına göre eşleşme bulundu: ${eslesenFiyat.tahliye_yeri} (Şoför Fiyatı: ${eslesenFiyat.sofor_ucreti})`);
      return eslesenFiyat.tahliye_yeri;
    }
    
    // 2. Şoför fiyatı eşleşmesi bulunamazsa, eski yöntemle şirket fiyatına göre eşleşme arayalım
    eslesenFiyat = filteredList.find(
      f => Math.abs(f.ucret - sefer.sirketten_alinan_ucret) < 1.0 // Tolerans değeri
    );
    
    if (eslesenFiyat) {
      // Şirket fiyatına göre eşleşme bulundu, şimdi girilen şoför fiyatı ile karşılaştıralım
      if (eslesenFiyat.sofor_ucreti !== null && Math.abs(eslesenFiyat.sofor_ucreti - fiyat) < 1.0) {
        // Şoför fiyatı da aynı kaydın şoför fiyatına yakınsa, eşleşen kaydı kullanalım
        console.log(`Şirket fiyatına göre eşleşen bulundu ve şoför fiyatı da uyumlu: ${eslesenFiyat.tahliye_yeri} (Şirket: ${eslesenFiyat.ucret}, Şoför: ${eslesenFiyat.sofor_ucreti})`);
        return eslesenFiyat.tahliye_yeri;
      } else {
        // Şoför fiyatı farklı, bu durumda eşleşen tahliye yeri bulunamadı olarak değerlendiriyoruz
        console.log(`Şirket fiyatına göre eşleşme bulundu (${eslesenFiyat.tahliye_yeri}) ama şoför fiyatı farklı. Eşleşme yok kabul ediliyor.`);
        return '';
      }
    }
    
    // Hiçbir şekilde eşleşme bulunamadı
    console.log(`Eşleşen fiyat bulunamadı`);
    console.log("Olası fiyat eşleşmeleri:");
    if (filteredList.length > 0) {
      filteredList.forEach(f => {
        console.log(`  Tahliye: ${f.tahliye_yeri}, Şirket: ${f.ucret}, Şoför: ${f.sofor_ucreti}, Şirket Farkı: ${Math.abs(f.ucret - sefer.sirketten_alinan_ucret)}, Şoför Farkı: ${f.sofor_ucreti !== null ? Math.abs(f.sofor_ucreti - fiyat) : 'N/A'}`);
      });
    }
    
    return '';
  };

  // Fiyat debug butonu
  const debugFiyatEslesmeleri = () => {
    console.log("Mevcut fiyat listesi:", fiyatListesi);
    console.log("Mevcut eşleşen yerler:", eslesenYerler);
    
    console.log("Şirket fiyatları olan kayıtlar:", fiyatListesi.filter(f => f.ucret !== null));
    
    seferler.forEach(sefer => {
      if (sefer.sirket) {
        console.log(`Sefer #${sefer.sefer_id} - Şirket: ${sefer.sirket.sirket_adi}, Araç: ${sefer.arac_tipi}, Şirket Fiyatı: ${sefer.sirketten_alinan_ucret}, Şoför Fiyatı: ${sefer.sofore_odenen_ucret}`);
      }
    });
    
    alert("Şirket ve şoför fiyat eşleştirme bilgileri konsola yazdırıldı. Geliştirici konsolunu kontrol edin.");
  };

  const fiyatDegistir = (seferId: number, yeniFiyat: number, sefer: Sefer) => {
    if (seferId && !isNaN(yeniFiyat)) {
      // Kullanıcının girdiği değeri direkt olarak set edelim
      setYeniFiyatlar(prev => ({
        ...prev,
        [seferId]: yeniFiyat
      }));
      
      // Şoför fiyatı değiştiğinde tahliye yerini şirket fiyatına göre bul
      // Yani burada sofore_odenen_ucret değişirken, tahliye yerini sirketten_alinan_ucret'e göre buluyoruz
      const eslesenYer = findMatchingTahliyeYeri(sefer, yeniFiyat);
      console.log(`Şoför sefer #${seferId} için bulunan eşleşen yer: "${eslesenYer}"`);
      
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
      console.log(`Şoför input değeri değişti: ${value}, sayısal değer: ${numValue}`);
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
    const mt = sefer.mt || 0;
    
    // YAP-İstanbul için özel durum - MT ile çarpma yapılmayacak
    if (sefer.sirket && sefer.sirket.sirket_adi === 'YAP-İstanbul') {
      return birimFiyat; // MT ile çarpma yapılmayacak, sadece birim fiyat
    }
    
    return mt * birimFiyat;
  };

  // Tüm fiyat değişikliklerini toplu olarak kaydet
  const tumFiyatlariKaydet = async () => {
    setKaydediliyor(true);
    
    try {
      // Değişen fiyatları bul
      const degisiklikYapilanSeferler = seferler.filter(
        sefer => sefer && sefer.sefer_id && 
        yeniFiyatlar[sefer.sefer_id] !== undefined && 
        yeniFiyatlar[sefer.sefer_id] !== sefer.sofore_odenen_ucret
      );
      
      // Değişiklik yoksa işlemi sonlandır
      if (degisiklikYapilanSeferler.length === 0) {
        alert('Değişiklik yapılmadı');
        return;
      }
      
      // Her bir değişikliği kaydet
      for (const sefer of degisiklikYapilanSeferler) {
        await fiyatGuncelle(sefer.sefer_id, yeniFiyatlar[sefer.sefer_id]);
      }
      
      alert('Tüm fiyat değişiklikleri kaydedildi');
    } catch (error: any) {
      console.error('Fiyatlar kaydedilirken hata:', error);
      alert('Fiyatlar kaydedilirken bir hata oluştu');
    } finally {
      setKaydediliyor(false);
    }
  };

  // Fatura oluştur - %10 artırılmış fiyatları hesapla
  const faturaOlustur = () => {
    const yeniFaturaFiyatlari: { [key: number]: number } = {};
    
    seferler.forEach(sefer => {
      if (sefer && sefer.sefer_id) {
        // Mevcut şoför fiyatını %10 artır ve tam sayıya yuvarla
        const mevcutFiyat = yeniFiyatlar[sefer.sefer_id] || sefer.sofore_odenen_ucret;
        const artirilimisFiyat = Math.round(mevcutFiyat * 1.1); // Tam sayıya yuvarla
        yeniFaturaFiyatlari[sefer.sefer_id] = artirilimisFiyat;
      }
    });
    
    setFaturaFiyatlari(yeniFaturaFiyatlari);
    setFaturaModuAktif(true);
  };

  // Fatura fiyatını değiştir
  const faturaFiyatiDegistir = (seferId: number, yeniFiyat: number) => {
    setFaturaFiyatlari(prev => ({
      ...prev,
      [seferId]: yeniFiyat
    }));
  };

  // Fatura fiyatlarını kaydet
  const faturaFiyatlariKaydet = async () => {
    setFaturaKaydediliyor(true);
    
    try {
      console.log('Fatura fiyatları kaydediliyor...', faturaFiyatlari);
      
      // Her bir fatura fiyatını kaydet
      for (const sefer of seferler) {
        if (sefer && sefer.sefer_id && faturaFiyatlari[sefer.sefer_id] !== undefined) {
          console.log(`Sefer ${sefer.sefer_id} için fatura fiyatı kaydediliyor: ${faturaFiyatlari[sefer.sefer_id]}`);
          
          const response = await fetch('/api/seferler/sofor-fatura-guncelle', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              seferId: sefer.sefer_id,
              sofor_fatura_ucreti: faturaFiyatlari[sefer.sefer_id]
            }),
          });
          
          if (!response.ok) {
            const errorData = await response.json();
            console.error(`Sefer ${sefer.sefer_id} API hatası:`, errorData);
            throw new Error(`Sefer ${sefer.sefer_id} fatura ücreti güncellenirken hata oluştu: ${errorData.error || response.statusText}`);
          }
          
          const result = await response.json();
          console.log(`Sefer ${sefer.sefer_id} başarıyla güncellendi:`, result);
        }
      }
      
      alert('Fatura fiyatları başarıyla kaydedildi');
      setFaturaModuAktif(false);
      setFaturaFiyatlari({});
      
      // Sayfayı yenile (parent component'ten seferleri yeniden getir)
      window.location.reload();
      
    } catch (error: any) {
      console.error('Fatura fiyatları kaydedilirken hata:', error);
      alert(`Fatura fiyatları kaydedilirken bir hata oluştu: ${error.message || error}`);
    } finally {
      setFaturaKaydediliyor(false);
    }
  };

  // Fatura modunu iptal et
  const faturaModuIptal = () => {
    setFaturaModuAktif(false);
    setFaturaFiyatlari({});
  };

  // Seferleri araçlara göre gruplandır
  const aracGruplari = seferler.reduce((gruplar, sefer) => {
    if (!sefer.arac) return gruplar;
    
    const aracId = sefer.arac.arac_id;
    if (!gruplar[aracId]) {
      gruplar[aracId] = {
        arac: sefer.arac,
        seferler: []
      };
    }
    
    gruplar[aracId].seferler.push(sefer);
    return gruplar;
  }, {} as { 
    [key: number]: { 
      arac: { arac_id: number; plaka: string; sofor_adi: string }; 
      seferler: Sefer[] 
    } 
  });

  // Fiyat değişti mi kontrolü
  const fiyatDegistiMi = (sefer: Sefer): boolean => {
    if (!sefer || !sefer.sefer_id || yeniFiyatlar[sefer.sefer_id] === undefined) {
      return false;
    }
    return yeniFiyatlar[sefer.sefer_id] !== sefer.sofore_odenen_ucret;
  };

  // Fiyat değeri al
  const getFiyatDegeri = (sefer: Sefer): number => {
    if (sefer && sefer.sefer_id && yeniFiyatlar[sefer.sefer_id] !== undefined) {
      return yeniFiyatlar[sefer.sefer_id];
    }
    return sefer ? sefer.sofore_odenen_ucret : 0;
  };
  
  // Genel toplam tutarı hesapla
  const genelToplamTutar = seferler.reduce((toplam, sefer) => {
    if (faturaModuAktif) {
      const faturaFiyati = faturaFiyatlari[sefer.sefer_id] || 0;
      const toplamFiyat = hesaplaToplamFiyat(sefer, faturaFiyati);
      return toplam + toplamFiyat;
    } else {
      const birimFiyat = getFiyatDegeri(sefer);
      const toplamFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
      return toplam + toplamFiyat;
    }
  }, 0);
  
  // Araç bazında toplam tutarı hesapla
  const hesaplaAracToplami = (seferler: Sefer[]): number => {
    return seferler.reduce((toplam, sefer) => {
      if (faturaModuAktif) {
        const faturaFiyati = faturaFiyatlari[sefer.sefer_id] || 0;
        const toplamFiyat = hesaplaToplamFiyat(sefer, faturaFiyati);
        return toplam + toplamFiyat;
      } else {
        const birimFiyat = getFiyatDegeri(sefer);
        const toplamFiyat = hesaplaToplamFiyat(sefer, birimFiyat);
        return toplam + toplamFiyat;
      }
    }, 0);
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">
            {faturaModuAktif ? 'Fatura Modu - ' : ''}Genel Toplam: {genelToplamTutar.toLocaleString('tr-TR')} TL
          </h2>
          {faturaModuAktif && (
            <p className="text-sm text-blue-600 mt-1">
              Fatura fiyatları (%10 artırılmış) gösteriliyor. Fiyatları düzenleyebilir ve kaydedebilirsiniz.
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={debugFiyatEslesmeleri}
            className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
          >
            Fiyat Debug
          </button>
          
          {!faturaModuAktif ? (
            <>
              <button
                onClick={faturaOlustur}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Fatura Oluştur
              </button>
              <button
                onClick={tumFiyatlariKaydet}
                disabled={kaydediliyor}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
              >
                {kaydediliyor ? 'Kaydediliyor...' : 'Tüm Değişiklikleri Kaydet'}
              </button>
            </>
          ) : (
            <>
              <button
                onClick={faturaModuIptal}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                İptal
              </button>
              <button
                onClick={faturaFiyatlariKaydet}
                disabled={faturaKaydediliyor}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
              >
                {faturaKaydediliyor ? 'Kaydediliyor...' : 'Fatura Fiyatlarını Kaydet'}
              </button>
            </>
          )}
        </div>
      </div>
      
      {Object.values(aracGruplari).map((grup) => {
        // Her grup için seferleri sıra numarasına göre sırala
        const siraliSeferler = siralamaYap(grup.seferler);
        
        return (
        <div key={grup.arac.arac_id} className="mb-8">
          <div className="bg-gray-100 p-4 rounded-t-lg border border-gray-300">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{grup.arac.sofor_adi}</h3>
              <span className="font-medium">
                Toplam: {hesaplaAracToplami(grup.seferler).toLocaleString('tr-TR')} TL
              </span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-t-0">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-3 border text-left w-16">Sıra No</th>
                  <th className="py-2 px-3 border text-left">Şirket</th>
                  <th className="py-2 px-3 border text-left">İrsaliye No</th>
                  <th className="py-2 px-3 border text-left">İrsaliye Tarihi</th>
                  <th className="py-2 px-3 border text-left w-40">Tahliye Edilen Firma</th>
                  <th className="py-2 px-3 border text-left">Tahliye Yeri</th>
                  <th className="py-2 px-3 border text-left">MT</th>
                  <th className="py-2 px-3 border text-left">Araç Tipi</th>
                  <th className="py-2 px-3 border text-left w-24">Şirket Birim Fiyatı (TL)</th>
                  <th className="py-2 px-3 border text-left w-32">
                    {faturaModuAktif ? 'Fatura Fiyatı (TL)' : 'Birim Fiyat (TL)'}
                  </th>
                  <th className="py-2 px-3 border text-left">Fiyat (TL)</th>
                  <th className="py-2 px-3 border text-left">Fiyat Yeri</th>
                </tr>
              </thead>
              <tbody>
                {siraliSeferler.map((sefer) => sefer && (
                  <tr key={sefer.sefer_id} className="hover:bg-gray-50">
                    <td className="py-2 px-3 border w-16">{sefer.sira_no}</td>
                    <td className="py-2 px-3 border">{sefer.sirket ? sefer.sirket.sirket_adi : '-'}</td>
                    <td className="py-2 px-3 border">{sefer.irsaliye_numarasi || '-'}</td>
                    <td className="py-2 px-3 border">
                      {sefer.irsaliye_tarihi ? new Date(sefer.irsaliye_tarihi).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="py-2 px-3 border w-40">{sefer.tahliye_edilen_firma}</td>
                    <td className="py-2 px-3 border">{sefer.tahliye_yeri}</td>
                    <td className="py-2 px-3 border">{sefer.mt !== undefined ? sefer.mt : '-'}</td>
                    <td className="py-2 px-3 border">{sefer.arac_tipi}</td>
                    <td className="py-2 px-3 border w-24">{sefer.sirketten_alinan_ucret.toLocaleString('tr-TR')}</td>
                    <td className="py-2 px-3 border w-32">
                      {faturaModuAktif ? (
                        <input
                          type="number"
                          className="w-full p-1 border rounded bg-blue-50 border-blue-500"
                          value={faturaFiyatlari[sefer.sefer_id] || 0}
                          onChange={(e) => faturaFiyatiDegistir(sefer.sefer_id, parseFloat(e.target.value) || 0)}
                        />
                      ) : (
                        <input
                          type="number"
                          className={`w-full p-1 border rounded ${fiyatDegistiMi(sefer) ? 'bg-yellow-50 border-yellow-500' : ''}`}
                          value={getFiyatDegeri(sefer)}
                          onChange={(e) => handleInputChange(e, sefer)}
                        />
                      )}
                    </td>
                    <td className="py-2 px-3 border font-medium">
                      {faturaModuAktif 
                        ? hesaplaToplamFiyat(sefer, faturaFiyatlari[sefer.sefer_id] || 0).toLocaleString('tr-TR')
                        : hesaplaToplamFiyat(sefer, getFiyatDegeri(sefer)).toLocaleString('tr-TR')
                      }
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