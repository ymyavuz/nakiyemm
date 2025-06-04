'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

interface BilancoVerisi {
  genel: boolean;
  sirket?: {
    sirket_adi: string;
    vergi_numarasi: string;
    ozelDurum?: string;
  };
  gelirGider: {
    toplamGelir: number;
    toplamGider: number;
    netKar: number;
    karMarji: string;
    toplamTevkifat?: number;
    toplamKDV?: number;
    toplamSoforKDV?: number;
    toplamGiderVeTevkifat?: number;
  };
  seferler: {
    toplamSeferSayisi: number;
    aylikDagitim: any[];
    seferDetaylari?: {
      sefer_id: number;
      sira_no: string;
      mt: number;
      birimFiyatGelir: number;
      birimFiyatGider: number;
      toplamFiyatGelir: number;
      toplamFiyatGider: number;
      tahliye_yeri: string;
      arac_tipi: string;
      fiyatListesiTahliyeYeri?: string;
    }[];
  };
  sirketler?: {
    toplamSirketSayisi: number;
    sirketBazindaVeriler: any[];
  };
  filtrelemeBilgileri?: {
    ay: number | null;
    donem: number | null;
  };
  hesaplamaNotlari?: {
    genel?: string;
    yapIstanbulOzel?: string;
    formul?: string;
    aciklama?: string;
    kdv?: string;
  };
}

interface Sirket {
  sirket_id: number;
  sirket_adi: string;
  vergi_numarasi: string;
}

export default function SirketBilanco() {
  const { theme } = useTheme();
  const [sirketler, setSirketler] = useState<Sirket[]>([]);
  const [secilenSirket, setSecilenSirket] = useState<string>('');
  const [secilenAy, setSecilenAy] = useState<string>('');
  const [secilenDonem, setSecilenDonem] = useState<string>('');
  const [bilancoVerisi, setBilancoVerisi] = useState<BilancoVerisi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState<string>('');
  const [genelGorunumAktif, setGenelGorunumAktif] = useState(true);

  const aylar = [
    { value: '1', label: 'Ocak' },
    { value: '2', label: 'Şubat' },
    { value: '3', label: 'Mart' },
    { value: '4', label: 'Nisan' },
    { value: '5', label: 'Mayıs' },
    { value: '6', label: 'Haziran' },
    { value: '7', label: 'Temmuz' },
    { value: '8', label: 'Ağustos' },
    { value: '9', label: 'Eylül' },
    { value: '10', label: 'Ekim' },
    { value: '11', label: 'Kasım' },
    { value: '12', label: 'Aralık' }
  ];

  const donemler = [
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' }
  ];

  // Şirketleri yükle
  useEffect(() => {
    const sirketleriYukle = async () => {
      try {
        const response = await fetch('/api/sirketler');
        if (response.ok) {
          const data = await response.json();
          setSirketler(data);
        }
      } catch (error) {
        console.error('Şirketler yüklenirken hata:', error);
      }
    };

    sirketleriYukle();
  }, []);

  // Sayfa açılır açılmaz genel özeti yükle
  useEffect(() => {
    genelOzetiYukle();
  }, []);

  // Genel özeti yükle
  const genelOzetiYukle = async () => {
    setYukleniyor(true);
    setHata('');
    setGenelGorunumAktif(true);

    try {
      const response = await fetch('/api/sirket-bilanco');
      
      if (response.ok) {
        const data = await response.json();
        setBilancoVerisi(data);
      } else {
        const errorData = await response.json();
        setHata(errorData.error || 'Genel özet alınırken hata oluştu');
      }
    } catch (error) {
      setHata('Genel özet alınırken hata oluştu');
      console.error('Genel özet yükleme hatası:', error);
    } finally {
      setYukleniyor(false);
    }
  };

  // Bilanço verilerini yükle (filtrelenmiş)
  const bilancoyuYukle = async () => {
    setYukleniyor(true);
    setHata('');
    setGenelGorunumAktif(false);

    try {
      const params = new URLSearchParams();

      if (secilenSirket) params.append('sirket_id', secilenSirket);
      if (secilenAy) params.append('ay', secilenAy);
      if (secilenDonem) params.append('donem', secilenDonem);

      const response = await fetch(`/api/sirket-bilanco?${params}`);
      
      if (response.ok) {
        const data = await response.json();
        setBilancoVerisi(data);
      } else {
        const errorData = await response.json();
        setHata(errorData.error || 'Bilanço verisi alınırken hata oluştu');
      }
    } catch (error) {
      setHata('Bilanço verisi alınırken hata oluştu');
      console.error('Bilanço yükleme hatası:', error);
    } finally {
      setYukleniyor(false);
    }
  };

  // Filtreleri temizle ve genel görünüme dön
  const filtreleriTemizle = () => {
    setSecilenSirket('');
    setSecilenAy('');
    setSecilenDonem('');
    setHata('');
    genelOzetiYukle();
  };

  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(tutar);
  };

  const formatTarih = (tarih: string) => {
    return new Date(tarih).toLocaleDateString('tr-TR');
  };

  const formatSayi = (sayi: number) => {
    return new Intl.NumberFormat('tr-TR').format(sayi);
  };

  const getAyAdi = (ayNumarasi: number) => {
    const ay = aylar.find(a => parseInt(a.value) === ayNumarasi);
    return ay ? ay.label : ayNumarasi.toString();
  };

  // Net kar hesaplama yardımcı fonksiyonu
  const hesaplaNetKar = (gelir: number, kdv: number, tevkifat: number, gider: number) => {
    // Toplam Gelir - Tevkifat - Toplam Gider
    return (gelir + kdv) - tevkifat - gider;
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              {genelGorunumAktif ? 'Genel Finansal Durum' : 'Şirket Bilanço'}
            </h1>
          </div>

        {/* Filtreler */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filtreler</h2>
            {!genelGorunumAktif && (
              <button
                onClick={filtreleriTemizle}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Genel Görünüme Dön
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Şirket Seçin
              </label>
              <select
                value={secilenSirket}
                onChange={(e) => setSecilenSirket(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ay (Opsiyonel)
              </label>
              <select
                value={secilenAy}
                onChange={(e) => setSecilenAy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tüm Aylar</option>
                {aylar.map((ay) => (
                  <option key={ay.value} value={ay.value}>
                    {ay.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dönem (Opsiyonel)
              </label>
              <select
                value={secilenDonem}
                onChange={(e) => setSecilenDonem(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tüm Dönemler</option>
                {donemler.map((donem) => (
                  <option key={donem.value} value={donem.value}>
                    {donem.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={bilancoyuYukle}
                disabled={yukleniyor || (!secilenSirket && !secilenAy && !secilenDonem)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {yukleniyor ? 'Yükleniyor...' : 'Detaylı Bilanço Getir'}
              </button>
            </div>
          </div>

          {hata && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {hata}
            </div>
          )}
        </div>

        {/* Bilanço Verileri */}
        {bilancoVerisi && (
          <div className="space-y-8">
            {/* Şirket Bilgileri (sadece tek şirket görünümünde) */}
            {!bilancoVerisi.genel && bilancoVerisi.sirket && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Şirket Bilgileri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Şirket Adı:</span> {bilancoVerisi.sirket.sirket_adi}
                  </div>
                  <div>
                    <span className="font-medium">Vergi Numarası:</span> {bilancoVerisi.sirket.vergi_numarasi}
                  </div>
                </div>
              </div>
            )}

            {/* Genel Bilgiler (sadece genel görünümde) */}
            {bilancoVerisi.genel && bilancoVerisi.sirketler && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Genel Bilgiler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-blue-600">Toplam Şirket</h3>
                    <p className="text-2xl font-bold">{bilancoVerisi.sirketler.toplamSirketSayisi}</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-purple-600">Toplam Sefer</h3>
                    <p className="text-2xl font-bold">{bilancoVerisi.seferler.toplamSeferSayisi}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Şirket Bazında Dağılım (sadece genel görünümde) */}
            {bilancoVerisi.genel && bilancoVerisi.sirketler && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h2 className="text-xl font-semibold">Şirket Bazında Performans</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Şirket Adı
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sefer Sayısı
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam MT
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam Gelir
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tevkifat
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam Gider
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Net Kar/Zarar
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kar Marjı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bilancoVerisi.sirketler.sirketBazindaVeriler.map((sirketVeri, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {sirketVeri.sirket_adi}
                            {sirketVeri.ozelDurum && (
                              <div className="text-xs text-gray-500 mt-1">{sirketVeri.ozelDurum}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {sirketVeri.seferSayisi}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                            {formatSayi(sirketVeri.toplamMT)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600">
                            {formatTutar(sirketVeri.gelir + sirketVeri.kdv)}
                            <div className="text-xs text-gray-500">KDV dahil</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-yellow-600">
                            {formatTutar(sirketVeri.tevkifat || 0)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-600">
                            {formatTutar(sirketVeri.gider + (sirketVeri.gider / 5) - (sirketVeri.gider / 25))}
                          </td>
                          <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${
                            ((sirketVeri.gelir + sirketVeri.kdv) - sirketVeri.tevkifat - (sirketVeri.gider + (sirketVeri.gider / 5) - (sirketVeri.gider / 25))) >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {formatTutar((sirketVeri.gelir + sirketVeri.kdv) - sirketVeri.tevkifat - (sirketVeri.gider + (sirketVeri.gider / 5) - (sirketVeri.gider / 25)))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              ((sirketVeri.gelir + sirketVeri.kdv) - sirketVeri.tevkifat - (sirketVeri.gider + (sirketVeri.gider / 5) - (sirketVeri.gider / 25))) >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                              %{(sirketVeri.gelir + sirketVeri.kdv) > 0 ? ((((sirketVeri.gelir + sirketVeri.kdv) - sirketVeri.tevkifat - (sirketVeri.gider + (sirketVeri.gider / 5) - (sirketVeri.gider / 25))) / (sirketVeri.gelir + sirketVeri.kdv)) * 100).toFixed(1) : '0.0'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Aylık Performans */}
            {bilancoVerisi.seferler.aylikDagitim.length > 0 && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h2 className="text-xl font-semibold">Aylık Performans</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ay
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sefer Sayısı
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam MT
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam Gelir
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tevkifat
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Toplam Gider
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Net Kar/Zarar
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Kar Marjı
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bilancoVerisi.seferler.aylikDagitim.map((ayVeri: any, index) => {
                        const toplamGelir = ayVeri.gelir + ayVeri.kdv;
                        const toplamGider = ayVeri.gider + ayVeri.soforKdv + ayVeri.tevkifat;
                        const hesaplananToplamGider = ayVeri.gider + (ayVeri.gider / 5) - (ayVeri.gider / 25);
                        const hesaplananNetKar = toplamGelir - ayVeri.tevkifat - hesaplananToplamGider;
                        
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {getAyAdi(ayVeri.ay)}
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {ayVeri.seferSayisi}
                              </span>
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                              {formatSayi(ayVeri.toplamMT)}
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-green-600">
                              {formatTutar(toplamGelir)}
                              <div className="text-xs text-gray-500">KDV dahil</div>
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-yellow-600">
                              {/* Tüm aylar için normal tevkifat hesaplaması */}
                              {formatTutar(ayVeri.tevkifat)}
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-red-600">
                              {formatTutar(hesaplananToplamGider)}
                          </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-bold ${
                              ((ayVeri.gelir + ayVeri.kdv) - ayVeri.tevkifat - (ayVeri.gider + (ayVeri.gider / 5) - (ayVeri.gider / 25))) >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                              {formatTutar((ayVeri.gelir + ayVeri.kdv) - ayVeri.tevkifat - (ayVeri.gider + (ayVeri.gider / 5) - (ayVeri.gider / 25)))}
                          </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                ((ayVeri.gelir + ayVeri.kdv) - ayVeri.tevkifat - (ayVeri.gider + (ayVeri.gider / 5) - (ayVeri.gider / 25))) >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                                %{toplamGelir > 0 ? ((hesaplaNetKar(ayVeri.gelir, ayVeri.kdv, ayVeri.tevkifat, ayVeri.gider) / toplamGelir) * 100).toFixed(1) : '0.0'}
                              </span>
                          </td>
                        </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Finansal Özet - Basit */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">
                {bilancoVerisi.genel ? 'Genel Finansal Özet' : 'Şirket Finansal Özet'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded">
                  <p className="text-sm text-gray-600">Toplam Gelir</p>
                  <p className="text-xl font-bold text-green-600">
                    {formatTutar(bilancoVerisi.gelirGider.toplamGelir + (bilancoVerisi.gelirGider.toplamKDV || 0))}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-red-50 rounded">
                  <p className="text-sm text-gray-600">Toplam Gider</p>
                  <p className="text-xl font-bold text-red-600">
                    {formatTutar(bilancoVerisi.gelirGider.toplamGider + (bilancoVerisi.gelirGider.toplamSoforKDV || 0) + (bilancoVerisi.gelirGider.toplamTevkifat || 0))}
                  </p>
                </div>
                
                <div className={`text-center p-4 rounded ${
                  bilancoVerisi.gelirGider.netKar >= 0 ? 'bg-blue-50' : 'bg-orange-50'
                }`}>
                  <p className="text-sm text-gray-600">Net {bilancoVerisi.gelirGider.netKar >= 0 ? 'Kar' : 'Zarar'}</p>
                  <p className={`text-xl font-bold ${
                    bilancoVerisi.gelirGider.netKar >= 0 ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {formatTutar(bilancoVerisi.gelirGider.netKar)}
                  </p>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded">
                  <p className="text-sm text-gray-600">Kar Marjı</p>
                  <p className="text-xl font-bold text-gray-600">
                    %{bilancoVerisi.gelirGider.karMarji}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}