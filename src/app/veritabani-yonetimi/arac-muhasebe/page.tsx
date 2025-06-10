'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

interface AracMasraf {
  odeme_id: number;
  arac_id: number;
  masraf_tipi_id: number | null;
  odeme_tutari: number;
  odeme_tarihi: string;
  aciklama: string | null;
  arac: {
    plaka: string;
    sofor_adi: string;
  };
}

interface Arac {
  arac_id: number;
  plaka: string;
  sofor_adi: string;
}

interface MasrafTipi {
  masraf_tipi_id: number;
  tip_adi: string;
}

export default function AracMuhasebe() {
  const { theme } = useTheme();
  const [masraflar, setMasraflar] = useState<AracMasraf[]>([]);
  const [araclar, setAraclar] = useState<Arac[]>([]);
  const [masrafTipleri, setMasrafTipleri] = useState<MasrafTipi[]>([]);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState<string>('');
  
  // Yeni masraf ekleme state'leri
  const [yeniMasraf, setYeniMasraf] = useState({
    arac_id: '',
    masraf_tipi_id: '',
    odeme_tutari: '',
    odeme_tarihi: '',
    aciklama: ''
  });

  // Filtreleme state'leri
  const [filtreArac, setFiltreArac] = useState<string>('');
  const [filtreBaslangic, setFiltreBaslangic] = useState<string>('');
  const [filtreBitis, setFiltreBitis] = useState<string>('');

  // Sayfa yüklendiğinde verileri getir
  useEffect(() => {
    masraflariYukle();
    araclariYukle();
    masrafTipleriniYukle();
  }, []);

  // Masrafları yükle
  const masraflariYukle = async () => {
    setYukleniyor(true);
    try {
      const response = await fetch('/api/arac-masraflari');
      if (response.ok) {
        const data = await response.json();
        setMasraflar(data);
      } else {
        setHata('Masraflar yüklenirken hata oluştu');
      }
    } catch (error) {
      setHata('Masraflar yüklenirken hata oluştu');
      console.error('Masraf yükleme hatası:', error);
    } finally {
      setYukleniyor(false);
    }
  };

  // Araçları yükle
  const araclariYukle = async () => {
    try {
      const response = await fetch('/api/araclar');
      if (response.ok) {
        const data = await response.json();
        setAraclar(data);
      }
    } catch (error) {
      console.error('Araç yükleme hatası:', error);
    }
  };

  // Masraf tiplerini yükle
  const masrafTipleriniYukle = async () => {
    try {
      console.log('Masraf tipleri yükleniyor...');
      const response = await fetch('/api/masraf-tipleri');
      console.log('API response:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Masraf tipleri data:', data);
        setMasrafTipleri(data);
      } else {
        console.error('API hatası:', response.status);
      }
    } catch (error) {
      console.error('Masraf tipleri yükleme hatası:', error);
    }
  };

  // Yeni masraf ekle
  const masrafEkle = async () => {
    if (!yeniMasraf.arac_id || !yeniMasraf.odeme_tutari || !yeniMasraf.odeme_tarihi) {
      setHata('Lütfen tüm zorunlu alanları doldurun');
      return;
    }

    try {
      const response = await fetch('/api/arac-masraflari', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          arac_id: parseInt(yeniMasraf.arac_id),
          masraf_tipi_id: yeniMasraf.masraf_tipi_id ? parseInt(yeniMasraf.masraf_tipi_id) : null,
          odeme_tutari: parseFloat(yeniMasraf.odeme_tutari),
          odeme_tarihi: yeniMasraf.odeme_tarihi,
          aciklama: yeniMasraf.aciklama
        }),
      });

      if (response.ok) {
        // Başarılı ekleme sonrası formu temizle ve verileri yenile
        setYeniMasraf({
          arac_id: '',
          masraf_tipi_id: '',
          odeme_tutari: '',
          odeme_tarihi: '',
          aciklama: ''
        });
        setHata('');
        masraflariYukle();
        alert('Araç masrafı başarıyla eklendi!');
      } else {
        const errorData = await response.json();
        setHata(errorData.error || 'Masraf eklenirken hata oluştu');
      }
    } catch (error) {
      setHata('Masraf eklenirken hata oluştu');
      console.error('Masraf ekleme hatası:', error);
    }
  };

  // Masraf sil
  const masrafSil = async (masrafId: number) => {
    if (!confirm('Bu masrafı silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch(`/api/arac-masraflari/${masrafId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        masraflariYukle();
        alert('Masraf başarıyla silindi!');
      } else {
        setHata('Masraf silinirken hata oluştu');
      }
    } catch (error) {
      setHata('Masraf silinirken hata oluştu');
      console.error('Masraf silme hatası:', error);
    }
  };

  // Filtrelenmiş masrafları hesapla
  const filtrelenmis = masraflar.filter(masraf => {
    const aracFiltre = !filtreArac || masraf.arac_id.toString() === filtreArac;
    const tarihFiltre = (!filtreBaslangic || masraf.odeme_tarihi >= filtreBaslangic) &&
                       (!filtreBitis || masraf.odeme_tarihi <= filtreBitis);
    return aracFiltre && tarihFiltre;
  });

  // Toplam masraf hesapla
  const toplamMasraf = filtrelenmis.reduce((toplam, masraf) => toplam + masraf.odeme_tutari, 0);

  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(tutar);
  };

  const getMasrafTipiAdi = (masrafTipiId: number | null) => {
    if (!masrafTipiId) return 'Belirtilmemiş';
    const tip = masrafTipleri.find(t => t.masraf_tipi_id === masrafTipiId);
    return tip ? tip.tip_adi : 'Bilinmeyen';
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <div className="w-64 bg-[var(--nav-bg)] p-6 flex flex-col">
        <Link href="/" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center font-bold mb-6">
          Dashboard
        </Link>
        
        <Link href="/veri-yukle" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center font-medium">
          Veri Yükle
        </Link>
        
        <div className="h-8"></div>
        
        <Link href="/sirket-fiyat-fatura" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center">
          Şirket İçin Fiyat - Fatura
        </Link>
        <div className="h-3"></div>
        <Link href="/sofor-fiyat-fatura" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center">
          Şoför İçin Fiyat - Fatura
        </Link>
        
        <div className="h-8"></div>
        
        <Link href="/sirket-bilanco" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center">
          Şirket Bilanço
        </Link>
        <div className="h-3"></div>
        <Link href="/sofor-bilanco" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center">
          Şöför Bilanço
        </Link>
        <div className="h-3"></div>
        <Link href="/cek-yonetimi" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center">
          Çek Yönetimi
        </Link>
        
        <div className="h-8"></div>
        
        <Link href="/veritabani-yonetimi" className="p-4 border border-[var(--nav-border)] rounded-lg hover:bg-[var(--nav-hover)] text-center font-medium">
          Veritabanı Yönetimi
        </Link>
      </div>

      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-[var(--foreground)]">Araç Muhasebe Yönetimi</h1>
              <Link 
                href="/sofor-bilanco"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Geri Dön
              </Link>
            </div>
          </div>

          {/* Yeni Masraf Ekleme */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Yeni Araç Masrafı Ekle</h2>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Araç Seçin *
                </label>
                <select
                  value={yeniMasraf.arac_id}
                  onChange={(e) => setYeniMasraf({...yeniMasraf, arac_id: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Araç Seçin</option>
                  {araclar.map((arac) => (
                    <option key={arac.arac_id} value={arac.arac_id}>
                      {arac.plaka} - {arac.sofor_adi}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Masraf Tipi
                </label>
                <select
                  value={yeniMasraf.masraf_tipi_id}
                  onChange={(e) => setYeniMasraf({...yeniMasraf, masraf_tipi_id: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Masraf Tipi Seçin ({masrafTipleri.length} tip)</option>
                  {masrafTipleri.map((tip) => (
                    <option key={tip.masraf_tipi_id} value={tip.masraf_tipi_id}>
                      {tip.tip_adi}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Masraf Tutarı (TL) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={yeniMasraf.odeme_tutari}
                  onChange={(e) => setYeniMasraf({...yeniMasraf, odeme_tutari: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Masraf Tarihi *
                </label>
                <input
                  type="date"
                  value={yeniMasraf.odeme_tarihi}
                  onChange={(e) => setYeniMasraf({...yeniMasraf, odeme_tarihi: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Açıklama
                </label>
                <input
                  type="text"
                  value={yeniMasraf.aciklama}
                  onChange={(e) => setYeniMasraf({...yeniMasraf, aciklama: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Detay açıklama"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={masrafEkle}
                  className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Masraf Ekle
                </button>
              </div>
            </div>

            {hata && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {hata}
              </div>
            )}
          </div>

          {/* Filtreleme */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Masrafları Filtrele</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Araç Filtresi
                </label>
                <select
                  value={filtreArac}
                  onChange={(e) => setFiltreArac(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Tüm Araçlar</option>
                  {araclar.map((arac) => (
                    <option key={arac.arac_id} value={arac.arac_id}>
                      {arac.plaka} - {arac.sofor_adi}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  value={filtreBaslangic}
                  onChange={(e) => setFiltreBaslangic(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bitiş Tarihi
                </label>
                <input
                  type="date"
                  value={filtreBitis}
                  onChange={(e) => setFiltreBitis(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => {
                    setFiltreArac('');
                    setFiltreBaslangic('');
                    setFiltreBitis('');
                  }}
                  className="w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                >
                  Filtreleri Temizle
                </button>
              </div>
            </div>
          </div>

          {/* Özet Bilgiler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Toplam Masraf Sayısı</h3>
              <p className="text-2xl font-bold">{filtrelenmis.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-2">Toplam Masraf Tutarı</h3>
              <p className="text-2xl font-bold">{formatTutar(toplamMasraf)}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Ortalama Masraf</h3>
              <p className="text-2xl font-bold">
                {filtrelenmis.length > 0 ? formatTutar(toplamMasraf / filtrelenmis.length) : formatTutar(0)}
              </p>
            </div>
          </div>

          {/* Masraflar Tablosu */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Araç Masrafları Listesi</h2>
            
            {yukleniyor ? (
              <div className="text-center py-8">
                <div className="text-gray-600">Masraflar yükleniyor...</div>
              </div>
            ) : filtrelenmis.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-600">Henüz masraf kaydı bulunmamaktadır.</div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarih
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plaka
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Şöför
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Masraf Tipi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tutar
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Açıklama
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filtrelenmis.map((masraf) => (
                      <tr key={masraf.odeme_id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(masraf.odeme_tarihi).toLocaleDateString('tr-TR')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                          {masraf.arac.plaka}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {masraf.arac.sofor_adi}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-600 font-medium">
                          {getMasrafTipiAdi(masraf.masraf_tipi_id)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                          {formatTutar(masraf.odeme_tutari)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {masraf.aciklama || 'Açıklama yok'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => masrafSil(masraf.odeme_id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 