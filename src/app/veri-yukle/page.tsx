'use client';

import { useState, useRef, useEffect, ChangeEvent, FormEvent, DragEvent } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import * as XLSX from 'xlsx';

export default function VeriYukle() {
  const { theme } = useTheme();
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [fileName, setFileName] = useState('');
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [excelDataBySirket, setExcelDataBySirket] = useState<{[key: string]: any[]}>({});
  const [showData, setShowData] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [sirketler, setSirketler] = useState<{[key: string]: {id: string, ad: string}}>({});
  const [sirketlerYukleniyor, setSirketlerYukleniyor] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

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
        console.log('API Yanıtı:', JSON.stringify(data));
        
        // Şirketleri ID'ye göre map'leyelim
        const sirketMap: {[key: string]: {id: string, ad: string}} = {};
        data.forEach((sirket: any) => {
          console.log('Şirket verisi:', JSON.stringify(sirket));
          
          // API'den gelen şirket ID'si muhtemelen sayı olarak gelecek
          // Ama biz string key kullanıyoruz, o yüzden string'e dönüştürelim
          const sirketId = String(sirket.sirket_id);
          
          sirketMap[sirketId] = {
            id: sirketId,
            ad: sirket.sirket_adi || `Şirket ${sirketId}`
          };
        });
        
        console.log('Oluşturulan şirket haritası:', sirketMap);
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
      setShowData(false); // Yeni dosya seçildiğinde veri görüntüsünü sıfırla
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
        alert('Lütfen sadece Excel dosyası (.xlsx veya .xls) yükleyin');
      }
    }
  };

  // Excel verilerini seferlere göre işleme fonksiyonu
  const processExcelData = (rawData: any[]) => {
    const seferler: any[] = [];
    let currentSefer: any = null;
    
    rawData.forEach((row) => {
      // Sıra No sütunu varsa ve değeri dolu ise, yeni sefer başlat
      // Excel dosyasındaki ilk sütunun adını dinamik olarak alıyoruz
      // Örneğin "Sıra No" veya "1" gibi olabilir
      const firstColumnKey = Object.keys(row)[0];
      
      if (row[firstColumnKey] !== null && row[firstColumnKey] !== undefined && row[firstColumnKey] !== '') {
        // Yeni sefer
        if (currentSefer) {
          seferler.push(currentSefer);
        }
        
        // ÖNEMLİ: tumVeriler, Excel'deki ham verileri doğrudan içeren bir objedir
        // Değerleri birleştirme veya manipüle etme işlemi yapılmıyor
        currentSefer = {
          seferNo: row[firstColumnKey],
          duraklar: [row],
          tumVeriler: { ...row } // Ham verilerin tam kopyası
        };
        
        // Debug log
        console.log('Yeni sefer oluşturuldu:', currentSefer.seferNo, 'İlk değerler:', Object.keys(currentSefer.tumVeriler).map(k => `${k}: ${currentSefer.tumVeriler[k]}`));
      } else if (currentSefer) {
        // Mevcut sefere yeni durak ekle
        currentSefer.duraklar.push(row);
        
        // ÖNEMLİ: Eğer durakta boş olmayan değerler varsa, bunları tumVeriler'e ekle
        // Ancak var olan değerleri ASLA değiştirme - bu kritik!
        Object.keys(row).forEach(key => {
          if (row[key] !== null && row[key] !== undefined && row[key] !== '') {
            // Önceki değer var mı kontrol et
            if (currentSefer.tumVeriler[key] === undefined || 
                currentSefer.tumVeriler[key] === null || 
                currentSefer.tumVeriler[key] === '') {
              // Önceki değer yoksa yeni değeri ekle
              currentSefer.tumVeriler[key] = row[key];
              console.log(`Yeni durak için "${key}" değeri eklendi:`, row[key]);
            } else {
              // Önceki değer varsa, aynı değer mi kontrol et
              if (String(currentSefer.tumVeriler[key]) !== String(row[key])) {
                console.log(`UYARI: Durak için "${key}" değeri farklı:`, 
                            `Önceki: "${currentSefer.tumVeriler[key]}", `, 
                            `Yeni: "${row[key]}"`);
                
                // İki değeri birleştir - aralarına " - " ekle
                if (!String(currentSefer.tumVeriler[key]).includes(String(row[key]))) {
                  const combinedValue = `${currentSefer.tumVeriler[key]} - ${row[key]}`;
                  console.log(`İki değer birleştiriliyor: "${combinedValue}"`);
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
    const matchingKey = Object.keys(sefer.tumVeriler || {}).find(k => 
      k.toLowerCase().includes(columnName.toLowerCase())
    );
    
    if (matchingKey && sefer.tumVeriler[matchingKey] !== null && 
        sefer.tumVeriler[matchingKey] !== undefined && 
        sefer.tumVeriler[matchingKey] !== '') {
      return sefer.tumVeriler[matchingKey];
    }
    
    return '';
  };

  // Şirket adını ID'den alma fonksiyonu
  const getSirketAdi = (sirketId: string) => {
    console.log('getSirketAdi çağrıldı. ID:', sirketId, 'Mevcut şirketler:', sirketler);
    
    // ID'yi sayıya çevir çünkü veritabanımızda ID'ler sayı olarak saklanıyor
    const numericId = Number(sirketId);
    
    // Şirket bilgilerini kontrol et
    if (sirketler[sirketId]) {
      const sirketAdi = sirketler[sirketId].ad;
      console.log(`ID ${sirketId} için şirket adı:`, sirketAdi);
      return sirketAdi;
    }
    
    console.log(`ID ${sirketId} için şirket bilgisi bulunamadı`);
    return `Şirket ${sirketId}`;
  };

  // Tablo oluşturma komponenti
  const TableForCompany = ({ sirketId, data }: { sirketId: string, data: any[] }) => {
    // Şirket adını al ve kontrol et
    const sirketAdi = getSirketAdi(sirketId);
    console.log(`TableForCompany: sirketId=${sirketId}, sirketAdi=${sirketAdi}`);
    
    return (
      <div className="bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] w-full mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">{sirketAdi}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[var(--card-bg)] border border-[var(--nav-border)] rounded-lg">
            <thead>
              <tr className="bg-[var(--nav-bg)]">
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-16">Sıra No</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-28">İrsaliye Numarası</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-56">İrsaliye Tarihi</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-24">Kalkış Saati</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-24">Varış Saati</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-32">Şoför</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-32">Çıkış Yeri</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-40">Tahliye Edilen Firma</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-32">Tahliye Yeri/Fırın</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-24">Tonaj/Kg</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-28">Araç Tipi Tlr/K.Ayak</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-16">MT</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-24">Ton/Fiyat</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-24">Taşıma Fiyatı</th>
                <th className="px-4 py-2 text-left border-b border-[var(--nav-border)] w-32">Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {data.map((sefer, index) => {
                // İlk sütun (Sıra No) her zaman sefer numarası olacak
                const siraNo = sefer.seferNo;
                
                return (
                  <tr key={index} className={index % 2 === 0 ? 'bg-[var(--background)]' : ''}>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{siraNo}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'İrsaliye Numarası')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-nowrap">{getColumnValue(sefer, 'İrsaliye Tarihi')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Kalkış Saati')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Varış Saati')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Şoför')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Çıkış Yeri')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Tahliye Edilen Firma')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Tahliye Yeri/Fırın')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Tonaj/Kg')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Araç Tipi Tlr/K.Ayak')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'MT')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Ton/Fiyat')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Taşıma Fiyatı')}</td>
                    <td className="px-4 py-2 border-b border-[var(--nav-border)] whitespace-normal">{getColumnValue(sefer, 'Açıklama')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Verileri kaydetme fonksiyonu
  const handleSaveData = async () => {
    if (!selectedMonth || !selectedPeriod) {
      alert('Lütfen ay ve dönem seçin');
      return;
    }
    
    // Ay indeksini bulalım (1-12 arası)
    const months = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    const ayIndex = months.indexOf(selectedMonth) + 1; // 1-12 arası
    
    // Dönem değerini hesaplayalım (1-3 arası)
    let donemValue = 0;
    switch (selectedPeriod) {
      case '1-10':
        donemValue = 1;
        break;
      case '11-20':
        donemValue = 2;
        break;
      case '21-Ay Sonu':
        donemValue = 3;
        break;
      default:
        donemValue = 0;
    }
    
    // Kaydetmeden önce son kontrol
    if (ayIndex < 1 || donemValue < 1) {
      alert('Geçersiz ay veya dönem seçimi');
      return;
    }
    
    try {
      setIsSaving(true);
      
      // Veri kontrolü ve debug
      console.log('Excel verilerini kontrol ediyorum...');
      
      // Tüm verilerin doğru formatını sağla
      const optimizedData: {[key: string]: any[]} = {};
      
      // Her şirket için
      Object.entries(excelDataBySirket).forEach(([sirketId, seferler]) => {
        optimizedData[sirketId] = seferler.map(sefer => {
          // tumVeriler doğrudan kullan, durakları birleştirme işlemine gerek yok
          // böylece Excel'deki orijinal değerler korunacak
          return {
            seferNo: sefer.seferNo,
            tumVeriler: sefer.tumVeriler
          };
        });
      });
      
      // Debug log
      console.log('API\'ye gönderilecek veri örneği:', 
        Object.keys(optimizedData).length > 0 ? 
        JSON.stringify(optimizedData[Object.keys(optimizedData)[0]][0]) : 
        'Veri yok');
      
      // Excel verilerini API'ye gönder
      const response = await fetch('/api/seferler/kaydet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ay: ayIndex,
          donem: donemValue,
          seferler: optimizedData // Burada optimizedData kullanıyoruz
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Veriler kaydedilirken bir hata oluştu');
      }
      
      const result = await response.json();
      alert('Veriler başarıyla kaydedildi! Toplam ' + result.kaydedilenSeferSayisi + ' sefer kaydedildi.');
      
      // Başarılı kayıttan sonra formu sıfırla
      setShowData(false);
      setIsFileSelected(false);
      setFileName('');
      setExcelDataBySirket({});
      setSelectedMonth('');
      setSelectedPeriod('');
      
    } catch (error: any) {
      console.error('Veri kaydetme hatası:', error);
      alert('Veriler kaydedilirken bir hata oluştu: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <Sidebar />
      
      {/* Ana içerik alanı */}
      <div className="flex-1 p-10 relative">
        {/* Tema değiştirme butonu - sağ üst köşe */}
        <div className="absolute top-4 right-6">
          <Link href="/" className="text-sm text-[var(--foreground)] opacity-60 hover:opacity-100">
            Ana Sayfa
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-8">Veri Yükleme</h1>
        
        {!showData ? (
          // Dosya yükleme alanı - sadece veriler gösterilmediğinde
          <div className="bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] max-w-3xl mb-6">
            <div 
              className="border-2 border-dashed border-[var(--nav-border)] rounded-lg p-8 text-center"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="fileUpload"
                ref={fileInputRef}
                className="hidden"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                required
              />
              
              {!isFileSelected ? (
                <div>
                  <p className="mb-4">Excel dosyanızı buraya sürükleyin veya yükleyin</p>
                  <button
                    type="button"
                    onClick={browseFile}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Dosya Seç
                  </button>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    (Sadece .xlsx veya .xls uzantılı dosyalar)
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <svg className="w-8 h-8 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{fileName}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={browseFile}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Dosyayı Değiştir
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (fileInputRef.current?.files?.[0]) {
                          const e = { preventDefault: () => {} } as FormEvent<HTMLFormElement>;
                          handleSubmit(e);
                        } else {
                          alert('Lütfen bir dosya seçin');
                        }
                      }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Dosyayı Görüntüle
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Dönem seçimi ve veriler - sadece veriler gösterildiğinde
          <div>
            <div className="bg-[var(--card-bg)] p-6 rounded-lg border border-[var(--card-border)] max-w-3xl mb-6">
              <h2 className="text-xl font-medium mb-4">Dönem Seçimi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="month" className="block mb-2 text-sm font-medium">
                    Ay Seçin
                  </label>
                  <select
                    id="month"
                    className="w-full p-3 border border-[var(--nav-border)] rounded-lg bg-[var(--background)] focus:ring-2 focus:ring-blue-500"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="">Ay Seçin</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="period" className="block mb-2 text-sm font-medium">
                    Dönem Seçin
                  </label>
                  <select
                    id="period"
                    className="w-full p-3 border border-[var(--nav-border)] rounded-lg bg-[var(--background)] focus:ring-2 focus:ring-blue-500"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                  >
                    <option value="">Dönem Seçin</option>
                    {periods.map((period) => (
                      <option key={period.id} value={period.name}>
                        {period.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowData(false); 
                    setIsFileSelected(false);
                    setFileName('');
                    setExcelDataBySirket({});
                  }}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 mr-3"
                >
                  Yeni Dosya Yükle
                </button>
                <button
                  type="button"
                  onClick={handleSaveData}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  disabled={isSaving}
                >
                  {isSaving ? 'Kaydediliyor...' : 'Verileri Kaydet'}
                </button>
              </div>
            </div>
            
            {/* Excel verilerini gösteren tablolar - her şirket için ayrı tablo */}
            {Object.entries(excelDataBySirket).map(([sirketId, seferVerileri]) => (
              seferVerileri.length > 0 && (
                <TableForCompany 
                  key={sirketId} 
                  sirketId={sirketId} 
                  data={seferVerileri} 
                />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
}