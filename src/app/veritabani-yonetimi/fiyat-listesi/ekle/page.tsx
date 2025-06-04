'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import * as XLSX from 'xlsx';

type Sirket = {
  sirket_id: number;
  sirket_adi: string;
};

export default function YeniFiyatListesiEkle() {
  const [sirketler, setSirketler] = useState<Sirket[]>([]);
  const [seciliSirket, setSeciliSirket] = useState<number | ''>('');
  const [yukleniyor, setYukleniyor] = useState(true);
  const [kayitDurumu, setKayitDurumu] = useState<{ basarili: boolean; mesaj: string } | null>(null);
  
  // Yeni fiyat girişi için state
  const [yeniFiyat, setYeniFiyat] = useState({
    varisNoktasi: '',
    km: '',
    sirketTirFiyati: '', // Şirket için tır fiyatı
    sirketKirkayakFiyati: '', // Şirket için kırkayak fiyatı
    soforTirFiyati: '', // Şoför için tır fiyatı
    soforKirkayakFiyati: '' // Şoför için kırkayak fiyatı
  });
  
  // Fiyat listesi tablosunu tutacak state
  const [fiyatListesi, setFiyatListesi] = useState<{
    varisNoktasi: string;
    km: string;
    sirketTirFiyati: string;
    sirketKirkayakFiyati: string;
    soforTirFiyati: string;
    soforKirkayakFiyati: string;
  }[]>([]);

  // Excel yükleme için state
  const [excelYukleniyor, setExcelYukleniyor] = useState(false);
  
  useEffect(() => {
    // Şirketleri getir
    const fetchSirketler = async () => {
      try {
        console.log('Şirketleri getirme başladı...');
        const response = await fetch('/api/sirketler');
        console.log('API yanıtı alındı:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: Şirketler yüklenirken bir hata oluştu`);
        }
        
        const data = await response.json();
        console.log("Gelen şirketler:", data); // Şirketleri konsola yazdırma
        
        if (Array.isArray(data)) {
          setSirketler(data);
          console.log('Şirketler state\'e set edildi:', data.length, 'adet');
        } else {
          console.error('API\'den gelen veri array değil:', typeof data, data);
          throw new Error('API\'den beklenmeyen veri formatı geldi');
        }
      } catch (error) {
        console.error('Şirketler yüklenirken hata:', error);
        alert('Şirketler yüklenirken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)));
      } finally {
        console.log('Şirket yükleme işlemi tamamlandı');
        setYukleniyor(false);
      }
    };
    
    fetchSirketler();
  }, []);
  
  // Input değişikliklerini takip et
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'seciliSirket') {
      setSeciliSirket(value === '' ? '' : parseInt(value, 10));
    } else {
      setYeniFiyat(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // Fiyat listesine yeni bir fiyat ekle
  const fiyatEkle = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tüm alanların doldurulduğunu kontrol et
    if (!yeniFiyat.varisNoktasi) {
      alert('Lütfen varış noktasını girin');
      return;
    }
    
    // En az bir fiyat girilmiş olmalı
    if (!yeniFiyat.sirketTirFiyati && !yeniFiyat.sirketKirkayakFiyati && 
        !yeniFiyat.soforTirFiyati && !yeniFiyat.soforKirkayakFiyati) {
      alert('En az bir fiyat girmelisiniz');
      return;
    }
    
    // Listeye ekle
    setFiyatListesi(prev => [...prev, { ...yeniFiyat }]);
    
    // Formu temizle
    setYeniFiyat({
      varisNoktasi: '',
      km: '',
      sirketTirFiyati: '',
      sirketKirkayakFiyati: '',
      soforTirFiyati: '',
      soforKirkayakFiyati: ''
    });
  };
  
  // Fiyat listesinden bir fiyatı kaldır
  const fiyatKaldir = (index: number) => {
    setFiyatListesi(prev => prev.filter((_, i) => i !== index));
  };
  
  // Tüm fiyat listesini kaydet
  const fiyatListesiKaydet = async () => {
    if (!seciliSirket) {
      alert('Lütfen bir şirket seçin');
      return;
    }
    
    if (fiyatListesi.length === 0) {
      alert('Lütfen en az bir fiyat ekleyin');
      return;
    }
    
    try {
      setYukleniyor(true);
      
      // Tır fiyatları için
      const tirFiyatlari = fiyatListesi
        .filter(fiyat => fiyat.sirketTirFiyati || fiyat.soforTirFiyati)
        .map(fiyat => ({
          sirket_id: seciliSirket,
          tahliye_yeri: fiyat.varisNoktasi,
          km: fiyat.km ? parseFloat(fiyat.km) : null,
          arac_tipi: 'Tır',
          ucret: fiyat.sirketTirFiyati ? parseFloat(fiyat.sirketTirFiyati) : 0,
          sofor_ucreti: fiyat.soforTirFiyati ? parseFloat(fiyat.soforTirFiyati) : null
        }));
        
      // Kırkayak fiyatları için
      const kirkayakFiyatlari = fiyatListesi
        .filter(fiyat => fiyat.sirketKirkayakFiyati || fiyat.soforKirkayakFiyati)
        .map(fiyat => ({
          sirket_id: seciliSirket,
          tahliye_yeri: fiyat.varisNoktasi, 
          km: fiyat.km ? parseFloat(fiyat.km) : null,
          arac_tipi: 'Kırkayak',
          ucret: fiyat.sirketKirkayakFiyati ? parseFloat(fiyat.sirketKirkayakFiyati) : 0,
          sofor_ucreti: fiyat.soforKirkayakFiyati ? parseFloat(fiyat.soforKirkayakFiyati) : null
        }));
      
      // Tüm fiyatları birleştir
      const tumFiyatlar = [...tirFiyatlari, ...kirkayakFiyatlari];
      
      // Fiyatları API'ye gönder
      const response = await fetch('/api/fiyat-listesi/sirket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sirket_id: seciliSirket,
          fiyatlar: tumFiyatlar
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Fiyat listesi kaydedilirken bir hata oluştu');
      }
      
      const result = await response.json();
      setKayitDurumu({
        basarili: true,
        mesaj: 'Fiyat listesi başarıyla kaydedildi!'
      });
      
      // Listeyi temizle
      setFiyatListesi([]);
      
    } catch (error: any) {
      console.error('Fiyat listesi kaydedilirken hata:', error);
      setKayitDurumu({
        basarili: false,
        mesaj: `Hata: ${error.message}`
      });
    } finally {
      setYukleniyor(false);
    }
  };
  
  // Excel dosyası yükleme fonksiyonu
  const handleExcelUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!seciliSirket) {
      alert('Lütfen önce bir şirket seçin');
      event.target.value = '';
      return;
    }

    setExcelYukleniyor(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // İlk satırı başlık olarak kabul et, ikinci satırdan itibaren veri
        const rows = jsonData.slice(1) as any[][];
        
        const excelFiyatlar: typeof fiyatListesi = [];

        rows.forEach((row, index) => {
          // Boş satırları atla
          if (!row[0] || row[0].toString().trim() === '') return;

          const tahliyeYeri = row[0]?.toString().trim() || '';
          const tirUcret = row[1] ? parseFloat(row[1].toString()) : '';
          const kirkayakUcret = row[2] ? parseFloat(row[2].toString()) : '';
          const tirSoforUcret = row[3] ? parseFloat(row[3].toString()) : '';
          const kirkayakSoforUcret = row[4] ? parseFloat(row[4].toString()) : '';

          if (tahliyeYeri) {
            excelFiyatlar.push({
              varisNoktasi: tahliyeYeri,
              km: '', // Excel'de km bilgisi yok, boş bırak
              sirketTirFiyati: tirUcret ? tirUcret.toString() : '',
              sirketKirkayakFiyati: kirkayakUcret ? kirkayakUcret.toString() : '',
              soforTirFiyati: tirSoforUcret ? tirSoforUcret.toString() : '',
              soforKirkayakFiyati: kirkayakSoforUcret ? kirkayakSoforUcret.toString() : ''
            });
          }
        });

        if (excelFiyatlar.length > 0) {
          setFiyatListesi(prev => [...prev, ...excelFiyatlar]);
          setKayitDurumu({
            basarili: true,
            mesaj: `Excel dosyasından ${excelFiyatlar.length} fiyat başarıyla yüklendi!`
          });
        } else {
          setKayitDurumu({
            basarili: false,
            mesaj: 'Excel dosyasında geçerli veri bulunamadı. Lütfen format kontrolü yapın.'
          });
        }

      } catch (error) {
        console.error('Excel okuma hatası:', error);
        setKayitDurumu({
          basarili: false,
          mesaj: 'Excel dosyası okunurken bir hata oluştu. Lütfen dosya formatını kontrol edin.'
        });
      } finally {
        setExcelYukleniyor(false);
        event.target.value = '';
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Yeni Fiyat Listesi Ekle</h1>
      
      {/* Üst Kısım: Şirket Seçimi */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Şirket Seçin</label>
            <select
              name="seciliSirket"
              value={seciliSirket}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              disabled={yukleniyor}
            >
              <option value="">Şirket Seçin</option>
              {sirketler.map((sirket) => (
                <option key={sirket.sirket_id} value={sirket.sirket_id}>
                  {sirket.sirket_adi}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Excel Dosyası Yükle</label>
            <div className="space-y-2">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleExcelUpload}
                disabled={!seciliSirket || excelYukleniyor}
                className="w-full p-2 border rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-500">
                Excel formatı: 1.Sütun: Tahliye Yeri, 2.Sütun: Tır Ücreti, 3.Sütun: Kırkayak Ücreti, 4.Sütun: Tır Şöför Ücreti, 5.Sütun: Kırkayak Şöför Ücreti
              </p>
              {excelYukleniyor && (
                <p className="text-sm text-blue-600">Excel dosyası işleniyor...</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <h3 className="font-medium text-blue-800 mb-2">Excel Dosyası Format Bilgisi:</h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p>• 1. Sütun: Tahliye Yeri (örn: Ankara, İstanbul)</p>
            <p>• 2. Sütun: Tır için Şirket Ücreti (örn: 2500)</p>
            <p>• 3. Sütun: Kırkayak için Şirket Ücreti (örn: 2000)</p>
            <p>• 4. Sütun: Tır için Şöför Ücreti (örn: 1800)</p>
            <p>• 5. Sütun: Kırkayak için Şöför Ücreti (örn: 1500)</p>
            <p className="font-medium">Not: İlk satır başlık olarak kabul edilir ve atlanır.</p>
          </div>
        </div>
      </div>
      
      {/* Fiyat Ekleme Formu */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Yeni Fiyat Ekle</h2>
        
        <form onSubmit={fiyatEkle} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Varış Noktası</label>
            <input
              type="text"
              name="varisNoktasi"
              value={yeniFiyat.varisNoktasi}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Örn: Ankara"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Km</label>
            <input
              type="number"
              name="km"
              value={yeniFiyat.km}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Örn: 250"
            />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-medium border-b pb-2 mb-4">Şirket Fiyatları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Tır Fiyatı (₺)</label>
            <input
              type="number"
                  name="sirketTirFiyati"
                  value={yeniFiyat.sirketTirFiyati}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Örn: 2500"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Kırkayak Fiyatı (₺)</label>
            <input
              type="number"
                  name="sirketKirkayakFiyati"
                  value={yeniFiyat.sirketKirkayakFiyati}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Örn: 2000"
            />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="font-medium border-b pb-2 mb-4">Şoför Fiyatları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Tır Fiyatı (₺)</label>
                <input
                  type="number"
                  name="soforTirFiyati"
                  value={yeniFiyat.soforTirFiyati}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Örn: 1800"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Kırkayak Fiyatı (₺)</label>
                <input
                  type="number"
                  name="soforKirkayakFiyati"
                  value={yeniFiyat.soforKirkayakFiyati}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Örn: 1500"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              disabled={yukleniyor}
            >
              Fiyat Ekle
            </button>
          </div>
        </form>
      </div>
      
      {/* Fiyat Listesi Tablosu */}
      {fiyatListesi.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Fiyat Listesi</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border text-left">Varış Noktası</th>
                  <th className="py-2 px-4 border text-left">Km</th>
                  <th className="py-2 px-4 border text-left" colSpan={2}>Şirket Fiyatları (₺)</th>
                  <th className="py-2 px-4 border text-left" colSpan={2}>Şoför Fiyatları (₺)</th>
                  <th className="py-2 px-4 border text-left">İşlemler</th>
                </tr>
                <tr>
                  <th className="py-2 px-4 border text-left"></th>
                  <th className="py-2 px-4 border text-left"></th>
                  <th className="py-2 px-4 border text-left">Tır</th>
                  <th className="py-2 px-4 border text-left">Kırkayak</th>
                  <th className="py-2 px-4 border text-left">Tır</th>
                  <th className="py-2 px-4 border text-left">Kırkayak</th>
                  <th className="py-2 px-4 border text-left"></th>
                </tr>
              </thead>
              <tbody>
                {fiyatListesi.map((fiyat, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-4 border">{fiyat.varisNoktasi}</td>
                    <td className="py-2 px-4 border">{fiyat.km || '-'}</td>
                    <td className="py-2 px-4 border">{fiyat.sirketTirFiyati || '-'}</td>
                    <td className="py-2 px-4 border">{fiyat.sirketKirkayakFiyati || '-'}</td>
                    <td className="py-2 px-4 border">{fiyat.soforTirFiyati || '-'}</td>
                    <td className="py-2 px-4 border">{fiyat.soforKirkayakFiyati || '-'}</td>
                    <td className="py-2 px-4 border">
                      <button
                        onClick={() => fiyatKaldir(index)}
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs"
                      >
                        Kaldır
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={fiyatListesiKaydet}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={yukleniyor}
            >
              {yukleniyor ? 'Kaydediliyor...' : 'Fiyat Listesini Kaydet'}
            </button>
          </div>
        </div>
      )}
      
      {/* Kayıt Durumu Bildirimi */}
      {kayitDurumu && (
        <div className={`p-4 mb-8 rounded-md ${kayitDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {kayitDurumu.mesaj}
        </div>
      )}
      
      <div className="flex space-x-4">
        <Link
          href="/veritabani-yonetimi/fiyat-listesi"
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Fiyat Listelerine Dön
        </Link>
        <Link
          href="/veritabani-yonetimi"
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Veritabanı Yönetimine Dön
        </Link>
      </div>
    </div>
  );
} 