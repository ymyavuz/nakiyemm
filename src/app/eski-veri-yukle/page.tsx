'use client';

import { useState, useRef, useEffect, ChangeEvent, FormEvent, DragEvent } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import * as XLSX from 'xlsx';

export default function EskiVeriYukle() {
  const { theme } = useTheme();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [fileName, setFileName] = useState('');
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [excelDataBySirket, setExcelDataBySirket] = useState<{[key: string]: any[]}>({});
  const [showData, setShowData] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [sirketler, setSirketler] = useState<{[key: string]: {id: string, ad: string}}>({});
  const [sirketlerYukleniyor, setSirketlerYukleniyor] = useState(true);

  // Veritabanından şirket bilgilerini çekme
  useEffect(() => {
    const fetchSirketler = async () => {
      try {
        setSirketlerYukleniyor(true);
        const response = await fetch('/api/sirketler');
        
        if (!response.ok) {
          throw new Error('Şirket verileri çekilemedi');
        }
        
        const data = await response.json();
        
        // Şirketleri ID'ye göre map'leyelim
        const sirketMap: {[key: string]: {id: string, ad: string}} = {};
        data.forEach((sirket: any) => {
          const sirketId = String(sirket.sirket_id);
          sirketMap[sirketId] = {
            id: sirketId,
            ad: sirket.sirket_adi || `Şirket ${sirketId}`
          };
        });
        
        setSirketler(sirketMap);
      } catch (error) {
        console.error('Şirket verileri çekilirken hata oluştu:', error);
        
        // Hata durumunda varsayılan şirket isimleri kullanılacak
        setSirketler({
          '1': { id: '1', ad: 'Şirket 1' },
          '2': { id: '2', ad: 'Şirket 2' },
          '3': { id: '3', ad: 'Şirket 3' }
        });
      } finally {
        setSirketlerYukleniyor(false);
      }
    };
    
    fetchSirketler();
  }, []);

  const months = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const periods = [
    { id: '1', name: '1-10' },
    { id: '2', name: '11-20' },
    { id: '3', name: '21-Ay Sonu' }
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setIsFileSelected(true);
      setShowData(false);
    } else {
      setFileName('');
      setIsFileSelected(false);
      setShowData(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!isFileSelected || !fileInputRef.current?.files?.[0]) {
      alert('Lütfen bir dosya seçin');
      return;
    }
    
    const file = fileInputRef.current.files[0];
    const reader = new FileReader();
    
    reader.onload = (evt) => {
      try {
        if (!evt.target?.result) return;
        
        const binaryStr = evt.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        
        // Her şirket için ayrı veriler
        const dataGroupedBySirket: {[key: string]: any[]} = {};
        
        // Her sayfa için döngü
        workbook.SheetNames.forEach((sheetName, sheetIndex) => {
          // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
          const sirketId = String(sheetIndex + 1);
          
          const worksheet = workbook.Sheets[sheetName];
          const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: null });
          
          // Her satıra şirket id'si ekle
          const dataWithCompanyId = rawData.map((row: any) => ({
            ...row,
            sirket_id: sirketId
          }));
          
          // Verileri şirket ID'sine göre gruplandır
          const processedData = processExcelData(dataWithCompanyId);
          
          // Şirket ID'sine göre veri kaydet
          dataGroupedBySirket[sirketId] = processedData;
        });
        
        setExcelDataBySirket(dataGroupedBySirket);
        setShowData(true);
      } catch (error) {
        console.error('Excel dosyası okunurken hata oluştu:', error);
        alert('Excel dosyası okunurken bir hata oluştu.');
      }
    };
    
    reader.readAsBinaryString(file);
  };

  // Excel verilerini seferlere göre işleme fonksiyonu
  const processExcelData = (rawData: any[]) => {
    const seferler: any[] = [];
    let currentSefer: any = null;
    
    rawData.forEach((row) => {
      // Sıra No sütunu varsa ve değeri dolu ise, yeni sefer başlat
      const firstColumnKey = Object.keys(row)[0];
      
      if (row[firstColumnKey] !== null && row[firstColumnKey] !== undefined && row[firstColumnKey] !== '') {
        // Yeni sefer
        if (currentSefer) {
          seferler.push(currentSefer);
        }
        
        currentSefer = {
          seferNo: row[firstColumnKey],
          duraklar: [row],
          tumVeriler: { ...row } // Ham verilerin tam kopyası
        };
      } else if (currentSefer) {
        // Mevcut sefere yeni durak ekle
        currentSefer.duraklar.push(row);
        
        // Eğer durakta boş olmayan değerler varsa, bunları tumVeriler'e ekle
        Object.keys(row).forEach(key => {
          if (row[key] !== null && row[key] !== undefined && row[key] !== '') {
            // Önceki değer var mı kontrol et
            if (currentSefer.tumVeriler[key] === undefined || 
                currentSefer.tumVeriler[key] === null || 
                currentSefer.tumVeriler[key] === '') {
              // Önceki değer yoksa yeni değeri ekle
              currentSefer.tumVeriler[key] = row[key];
            } else {
              // Önceki değer varsa, aynı değer mi kontrol et
              if (String(currentSefer.tumVeriler[key]) !== String(row[key])) {
                // İki değeri birleştir - aralarına " - " ekle
                if (!String(currentSefer.tumVeriler[key]).includes(String(row[key]))) {
                  const combinedValue = `${currentSefer.tumVeriler[key]} - ${row[key]}`;
                  currentSefer.tumVeriler[key] = combinedValue;
                }
              }
            }
          }
        });
      }
    });
    
    // Son seferi ekle
    if (currentSefer) {
      seferler.push(currentSefer);
    }
    
    return seferler;
  };

  // Bir tablo için sütun verilerini getirme fonksiyonu
  const getColumnValue = (sefer: any, columnName: string) => {
    // İlk sefer için debug bilgisi
    if (sefer.seferNo === 1 && columnName === 'Şöför') {
      console.log('Excel sütun adları:', Object.keys(sefer.tumVeriler || {}));
      console.log('Sefer verileri:', sefer.tumVeriler);
    }
    
    // Şöför için özel işlem - araç ID'sini çıkar ve göster
    if (columnName === 'Şöför') {
      let soforDegeri = '';
      
      // Öncelikle Excel'deki orijinal veriyi kontrol et
      if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && 
          sefer.tumVeriler[columnName] !== null && 
          sefer.tumVeriler[columnName] !== '') {
        soforDegeri = sefer.tumVeriler[columnName];
      } else {
        // Kısmı eşleşme için şöför sütunu ara
        const soforMatchingKey = Object.keys(sefer.tumVeriler || {}).find(k => {
          const lowerK = k.toLowerCase();
          return lowerK.includes('şöför') || 
                 lowerK.includes('şoför') || 
                 lowerK.includes('soför') || 
                 lowerK.includes('sofor') ||
                 lowerK.includes('driver') ||
                 lowerK.includes('sürücü');
        });
        
        if (soforMatchingKey && sefer.tumVeriler[soforMatchingKey] !== null && 
            sefer.tumVeriler[soforMatchingKey] !== undefined && 
            sefer.tumVeriler[soforMatchingKey] !== '') {
          soforDegeri = sefer.tumVeriler[soforMatchingKey];
        }
      }
      
      // Şöför değeri varsa, araç ID'sini vurgula
      if (soforDegeri) {
        // ID pattern'i kontrol et
        const idPattern = /[\(\[\{#]?\s*(?:ID|id|Id)?:?\s*(\d+)\s*[\)\]\}]?|[\-–]\s*(\d+)\s*$|#\s*(\d+)/;
        const idMatch = soforDegeri.match(idPattern);
        
        if (idMatch) {
          const extractedId = idMatch[1] || idMatch[2] || idMatch[3];
          // ID'yi vurgulu göster
          const cleanName = soforDegeri
            .replace(/[\(\[\{].*?[\)\]\}]/g, '')
            .replace(/[\-–]\s*\d+\s*$/g, '')
            .replace(/\s*ID:?\s*\d+/gi, '')
            .replace(/#\s*\d+/g, '')
            .trim();
          
          return `${cleanName} [Araç ID: ${extractedId}]`;
        }
      }
      
      return soforDegeri;
    }
    
    // Taşıma Fiyatı için özel işlem
    if (columnName === 'Birim Fiyatı') {
      return getTasimaFiyati(sefer);
    }
    
    // Araç Tipi için özel işlem - MT değerine göre belirle
    if (columnName === 'Araç Tipi') {
      // Önce MT değerini al
      let mtValue = null;
      
      // MT sütununu bul
      if (sefer.tumVeriler && sefer.tumVeriler['MT'] !== undefined && 
          sefer.tumVeriler['MT'] !== null && 
          sefer.tumVeriler['MT'] !== '') {
        mtValue = sefer.tumVeriler['MT'];
      } else {
        // Kısmı eşleşme için MT sütunu ara
        const mtMatchingKey = Object.keys(sefer.tumVeriler || {}).find(k => 
          k.toLowerCase().includes('mt') || 
          k.toLowerCase().includes('tonaj') ||
          k.toLowerCase().includes('ağırlık') ||
          k.toLowerCase().includes('agirlik')
        );
        
        if (mtMatchingKey && sefer.tumVeriler[mtMatchingKey] !== null && 
            sefer.tumVeriler[mtMatchingKey] !== undefined && 
            sefer.tumVeriler[mtMatchingKey] !== '') {
          mtValue = sefer.tumVeriler[mtMatchingKey];
        }
      }
      
      // MT değeri varsa buna göre araç tipini belirle
      if (mtValue !== null && mtValue !== undefined && mtValue !== '') {
        try {
          // MT değerini sayıya çevir
          const mtNumeric = parseFloat(mtValue.toString().replace(/[^\d.,]/g, '').replace(',', '.'));
          
          if (!isNaN(mtNumeric)) {
            if (mtNumeric < 23) {
              return 'Kırkayak';
            } else {
              return 'Tır';
            }
          }
        } catch (e) {
          console.error('MT değeri işlenirken hata:', e);
        }
      }
      
      // MT değeri yoksa veya işlenemediyse, Excel'den direkt Araç Tipi değerini al
      if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && 
          sefer.tumVeriler[columnName] !== null && 
          sefer.tumVeriler[columnName] !== '') {
        return sefer.tumVeriler[columnName];
      }
      
      // Kısmı eşleşme için Araç Tipi sütunu ara
      const aracTipiMatchingKey = Object.keys(sefer.tumVeriler || {}).find(k => 
        k.toLowerCase().includes('araç') && k.toLowerCase().includes('tip') ||
        k.toLowerCase().includes('arac') && k.toLowerCase().includes('tip') ||
        k.toLowerCase().includes('vehicle') && k.toLowerCase().includes('type')
      );
      
      if (aracTipiMatchingKey && sefer.tumVeriler[aracTipiMatchingKey] !== null && 
          sefer.tumVeriler[aracTipiMatchingKey] !== undefined && 
          sefer.tumVeriler[aracTipiMatchingKey] !== '') {
        return sefer.tumVeriler[aracTipiMatchingKey];
      }
      
      return '';
    }
    
    // İrsaliye Tarihi için özel işlem
    if (columnName === 'İrsaliye Tarihi') {
      // Öncelikle Excel'deki orijinal veriyi kontrol et
      let tarihDegeri = '';
      
      if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && 
          sefer.tumVeriler[columnName] !== null && 
          sefer.tumVeriler[columnName] !== '') {
        tarihDegeri = sefer.tumVeriler[columnName];
      } else {
        // Kısmı eşleşme için (başlık farklı olabilir)
        const matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => 
          k.toLowerCase().includes(columnName.toLowerCase())
        );
        
        if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
            sefer.tumVeriler[matchingKey] !== undefined && 
            sefer.tumVeriler[matchingKey] !== '') {
          tarihDegeri = sefer.tumVeriler[matchingKey];
        }
      }
      
      // Eğer tarih değeri varsa, GG AA YYYY formatına çevir
      if (tarihDegeri) {
        try {
          // Tarih formatını kontrol et ve dönüştür
          const cleanDateStr = tarihDegeri.toString().trim();
          
          // Nokta veya slash ile ayrılmış tarih formatı
          const dateParts = cleanDateStr.split(/[\/\.]/);
          if (dateParts.length >= 3) {
            const day = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10);
            let year = parseInt(dateParts[2], 10);
            
            // 2 haneli yıl kontrolü
            if (year < 100) {
              year += 2000; // 23 -> 2023
            }
            
            // Geçerli tarih değerleri kontrolü
            if (!isNaN(day) && !isNaN(month) && !isNaN(year) && 
                day >= 1 && day <= 31 && month >= 1 && month <= 12) {
              // GG AA YYYY formatına dönüştür
              return `${day < 10 ? '0' + day : day} ${month < 10 ? '0' + month : month} ${year}`;
            }
          }
          
          // Eğer dönüştürme yapılamazsa, orijinal değeri döndür
          return tarihDegeri;
        } catch (e) {
          console.error('Tarih dönüştürme hatası:', e);
          return tarihDegeri;
        }
      }
      
      return '';
    }
    
    // Diğer sütunlar için normal işlem
    // Öncelikle Excel'deki orijinal veriyi kontrol et
    if (sefer.tumVeriler && sefer.tumVeriler[columnName] !== undefined && 
        sefer.tumVeriler[columnName] !== null && 
        sefer.tumVeriler[columnName] !== '') {
      return sefer.tumVeriler[columnName];
    }
    
    // Kısmı eşleşme için (başlık farklı olabilir)
    let matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => 
      k.toLowerCase().includes(columnName.toLowerCase())
    );
    
    // Şöför için özel arama - daha esnek
    if (!matchingKey && columnName.toLowerCase().includes('şöför')) {
      matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => {
        const lowerK = k.toLowerCase();
        return lowerK.includes('şöför') || 
               lowerK.includes('şoför') || 
               lowerK.includes('soför') || 
               lowerK.includes('sofor') ||
               lowerK.includes('driver') ||
               lowerK.includes('sürücü');
      });
      
      // Şöför Ücreti için ek kontrol
      if (columnName.toLowerCase().includes('ücret') && !columnName.toLowerCase().includes('fatura')) {
        matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => {
          const lowerK = k.toLowerCase();
          return (lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor')) &&
                 (lowerK.includes('ücret') || lowerK.includes('ucret')) &&
                 !lowerK.includes('fatura');
        });
      }
      
      // Şöför Fatura Ücreti için ek kontrol
      if (columnName.toLowerCase().includes('fatura')) {
        matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => {
          const lowerK = k.toLowerCase();
          return (lowerK.includes('şöför') || lowerK.includes('şoför') || lowerK.includes('soför') || lowerK.includes('sofor')) &&
                 lowerK.includes('fatura');
        });
      }
    }
    
    if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
        sefer.tumVeriler[matchingKey] !== undefined && 
        sefer.tumVeriler[matchingKey] !== '') {
      return sefer.tumVeriler[matchingKey];
    }
    
    return '';
  };

  // Taşıma fiyatını alma fonksiyonu
  const getTasimaFiyati = (sefer: any) => {
    if (!sefer.tumVeriler) return '';
    
    // Önce Ton/Fiyat sütununu bul
    let tonFiyatValue = null;
    
    // Tam eşleşme ara
    if (sefer.tumVeriler['Ton/Fiyat']) {
      tonFiyatValue = sefer.tumVeriler['Ton/Fiyat'];
    } else {
      // Kısmi eşleşme ara
      const matchingKey = Object.keys(sefer.tumVeriler).find(k => {
        const lowerKey = k.toLowerCase();
        return (lowerKey.includes('ton') && lowerKey.includes('fiyat')) ||
               lowerKey.includes('ton/fiyat') ||
               lowerKey.includes('ton-fiyat') ||
               lowerKey.includes('birim') && lowerKey.includes('fiyat');
      });
      if (matchingKey) {
        tonFiyatValue = sefer.tumVeriler[matchingKey];
      }
    }
    
    // Ton/Fiyat değeri varsa onu kullan
    if (tonFiyatValue !== null && tonFiyatValue !== undefined && tonFiyatValue !== '') {
      const valueStr = tonFiyatValue.toString().trim();
      
      // Eğer değer birleştirilmişse (örn: "0 - 21888", "13600 - 113468")
      if (valueStr.includes(' - ')) {
        const parts = valueStr.split(' - ');
        
        // Sıfır olmayan ilk değeri bul
        for (const part of parts) {
          const cleanPart = part.trim();
          const numValue = parseFloat(cleanPart.replace(/[^\d.,]/g, '').replace(',', '.'));
          
          if (!isNaN(numValue) && numValue > 0) {
            return cleanPart;
          }
        }
        
        // Hiç sıfır olmayan değer yoksa boş döndür
        return '';
      }
      
      // Tek değerse, sıfır değilse göster
      const numValue = parseFloat(valueStr.replace(/[^\d.,]/g, '').replace(',', '.'));
      if (!isNaN(numValue) && numValue > 0) {
        return valueStr;
      }
    }
    
    // Ton/Fiyat bulunamazsa, genel taşıma fiyatı sütunlarını ara
    const fiyatKeys = Object.keys(sefer.tumVeriler).filter(key => 
      key.toLowerCase().includes('taşıma') && key.toLowerCase().includes('fiyat') ||
      key.toLowerCase().includes('tasima') && key.toLowerCase().includes('fiyat') ||
      key.toLowerCase().includes('birim') && key.toLowerCase().includes('fiyat') ||
      key.toLowerCase().includes('transport') && key.toLowerCase().includes('price')
    );
    
    if (fiyatKeys.length > 0) {
      const fiyatValue = sefer.tumVeriler[fiyatKeys[0]];
      
      if (fiyatValue !== null && fiyatValue !== undefined && fiyatValue !== '') {
        const valueStr = fiyatValue.toString().trim();
        
        // Eğer değer birleştirilmişse
        if (valueStr.includes(' - ')) {
          const parts = valueStr.split(' - ');
          
          // Sıfır olmayan ilk değeri bul
          for (const part of parts) {
            const cleanPart = part.trim();
            const numValue = parseFloat(cleanPart.replace(/[^\d.,]/g, '').replace(',', '.'));
            
            if (!isNaN(numValue) && numValue > 0) {
              return cleanPart;
            }
          }
          
          return '';
        }
        
        // Tek değerse, sıfır değilse göster
        const numValue = parseFloat(valueStr.replace(/[^\d.,]/g, '').replace(',', '.'));
        if (!isNaN(numValue) && numValue > 0) {
          return valueStr;
        }
      }
    }
    
    return '';
  };

  // Şirket adını ID'den alma fonksiyonu
  const getSirketAdi = (sirketId: string) => {
    if (sirketler[sirketId]) {
      return sirketler[sirketId].ad;
    }
    return `Şirket ${sirketId}`;
  };

  // Tablo oluşturma komponenti
  const TableForCompany = ({ sirketId, data }: { sirketId: string, data: any[] }) => {
    const sirketAdi = getSirketAdi(sirketId);
    
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 w-full mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">{sirketAdi}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left border-b border-gray-200 w-16 text-gray-700 text-sm">Sıra No</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm">İrsaliye Tarihi</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm">İrsaliye Numarası</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm">Çıkış Yeri</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-40 text-gray-700 text-sm">Tahliye Edilen Firma</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm">Tahliye Yeri/Tesisi</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm">Tonaj/Kg</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm">Araç Tipi</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-16 text-gray-700 text-sm">MT</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm">Birim Fiyatı</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-32 text-gray-700 text-sm">Şöför</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-24 text-gray-700 text-sm">Şöför Ücreti</th>
                <th className="px-4 py-2 text-left border-b border-gray-200 w-28 text-gray-700 text-sm">Şöför Fatura Ücreti</th>
              </tr>
            </thead>
            <tbody>
              {data.map((sefer, index) => {
                const siraNo = sefer.seferNo;
                
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{siraNo}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'İrsaliye Tarihi')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'İrsaliye Numarası')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Çıkış Yeri')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Tahliye Edilen Firma')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Tahliye Yeri/Tesisi')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Tonaj/Kg')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Araç Tipi')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'MT')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Birim Fiyatı')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Şöför')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Şöför Ücreti')}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-gray-900 text-sm">{getColumnValue(sefer, 'Şöför Fatura Ücreti')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const browseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      
      // Excel dosyası kontrolü
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          file.type === 'application/vnd.ms-excel') {
        
        // fileInputRef'i güncelle ki handleSubmit fonksiyonu bu dosyayı okuyabilsin
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        
        if (fileInputRef.current) {
          fileInputRef.current.files = dataTransfer.files;
        }
        
        setFileName(file.name);
        setIsFileSelected(true);
        setShowData(false);
        
        // Otomatik olarak dosyayı görüntüle
        const reader = new FileReader();
        
        reader.onload = (evt) => {
          try {
            if (!evt.target?.result) return;
            
            const binaryStr = evt.target.result;
            const workbook = XLSX.read(binaryStr, { type: 'binary' });
            
            // Her şirket için ayrı veriler
            const dataGroupedBySirket: {[key: string]: any[]} = {};
            
            // Her sayfa için döngü
            workbook.SheetNames.forEach((sheetName, sheetIndex) => {
              // Sayfa indeksine göre şirket id'sini belirle (1-tabanlı)
              const sirketId = String(sheetIndex + 1);
              
              const worksheet = workbook.Sheets[sheetName];
              const rawData = XLSX.utils.sheet_to_json(worksheet, { defval: null });
              
              // Her satıra şirket id'si ekle
              const dataWithCompanyId = rawData.map((row: any) => ({
                ...row,
                sirket_id: sirketId
              }));
              
              // Verileri şirket ID'sine göre gruplandır
              const processedData = processExcelData(dataWithCompanyId);
              
              // Şirket ID'sine göre veri kaydet
              dataGroupedBySirket[sirketId] = processedData;
            });
            
            setExcelDataBySirket(dataGroupedBySirket);
            setShowData(true);
          } catch (error) {
            console.error('Excel dosyası okunurken hata oluştu:', error);
            alert('Excel dosyası okunurken bir hata oluştu.');
          }
        };
        
        reader.readAsBinaryString(file);
      } else {
        alert('Lütfen Excel dosyası (.xlsx veya .xls) seçin');
      }
    }
  };

  const handleSaveData = async () => {
    if (!selectedMonth || !selectedPeriod) {
      alert('Lütfen ay ve dönem seçin');
      return;
    }

    if (!excelDataBySirket || Object.keys(excelDataBySirket).length === 0) {
      alert('Kaydedilecek veri bulunamadı');
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch('/api/eski-veri-yukle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ay: months.indexOf(selectedMonth) + 1,
          donem: parseInt(selectedPeriod),
          seferler: excelDataBySirket
        }),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Başarı mesajını göster
        let mesaj = `Başarılı! ${result.message}`;
        
        // Eğer hatalar varsa, detayları göster
        if (result.hatalar && result.hatalar.length > 0) {
          mesaj += '\n\nHata Detayları:\n';
          result.hatalar.forEach((hata: string, index: number) => {
            mesaj += `${index + 1}. ${hata}\n`;
          });
        }
        
        alert(mesaj);
        setShowData(false);
        setIsFileSelected(false);
        setFileName('');
        setSelectedMonth('');
        setSelectedPeriod('');
        setExcelDataBySirket({});
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        const errorData = await response.json();
        alert(`Hata: ${errorData.error || 'Bilinmeyen hata'}`);
      }
    } catch (error) {
      console.error('Veri kaydedilirken hata oluştu:', error);
      alert('Veri kaydedilirken bir hata oluştu');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol kenar menüsü */}
      <Sidebar />
      
      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Üst navigation */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Eski Veri Yükle</h1>
            <Link 
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              ← Ana Menü
            </Link>
          </div>
          
          {/* Dosya yükleme formu */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Excel Dosyası Yükle</h2>
            <p className="text-sm text-gray-600 mb-4">
              Excel dosyasında 3 sayfa olmalıdır: 1. sayfa Şirket 1, 2. sayfa Şirket 2, 3. sayfa Şirket 3 için seferler.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Ay ve Dönem Seçimi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ay Seçin
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Ay seçin...</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dönem Seçin
                  </label>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Dönem seçin...</option>
                    {periods.map((period) => (
                      <option key={period.id} value={period.id}>
                        {period.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dosya Yükleme Alanı */}
              <div
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={browseFile}
              >
                <div className="space-y-4">
                  <div className="text-4xl text-gray-400">📁</div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      {fileName || 'Excel dosyasını buraya sürükleyin veya tıklayın'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Desteklenen formatlar: .xlsx, .xls
                    </p>
                  </div>
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.xls"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Dosya Görüntüle Butonu */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={!isFileSelected}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  Dosyayı Görüntüle
                </button>
              </div>
            </form>
          </div>

          {/* Veri Önizleme */}
          {showData && Object.keys(excelDataBySirket).length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Veri Önizleme ({Object.values(excelDataBySirket).reduce((total, seferler) => total + seferler.length, 0)} toplam sefer)
                </h3>
                <button
                  onClick={handleSaveData}
                  disabled={isSaving}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isSaving ? 'Kaydediliyor...' : 'Verileri Kaydet'}
                </button>
              </div>

              {/* Her şirket için tablo */}
              {Object.entries(excelDataBySirket).map(([sirketId, seferler]) => (
                <TableForCompany key={sirketId} sirketId={sirketId} data={seferler} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 