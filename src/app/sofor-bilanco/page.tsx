'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

interface AracMuhasebeVerisi {
  yil: number;
  aracBazindaAylikVeriler: {
    arac_id: number;
    plaka: string;
    sofor_adi: string;
    aylikVeriler: {
      [key: number]: {
        gelir: number;
        gider: number;
        kar: number;
      };
    };
    yillikToplam: {
      gelir: number;
      gider: number;
      kar: number;
    };
    detayliHesaplar?: {
      aylikDetaylar: {
        [key: number]: {
          hamGelir: number;
          kdvTutari: number;
          kdvDahilTutar: number;
          tevkifatTutari: number;
          netGelir: number;
          gider: number;
          kar: number;
          seferler: Array<{
            sefer_id: number;
            irsaliye_numarasi?: string;
            irsaliye_tarihi?: Date;
            tahliye_yeri: string;
            mt?: number | null;
            sirket_id: number;
            birimFiyati: number;
            hamGelir: number;
            kdvTutari: number;
            kdvDahilTutar: number;
            tevkifatTutari: number;
            netGelir: number;
          }>;
        };
      };
      yillikDetay: {
        hamGelir: number;
        kdvTutari: number;
        kdvDahilTutar: number;
        tevkifatTutari: number;
        netGelir: number;
        gider: number;
        kar: number;
        seferlerBilgileri: Array<any>;
      };
    };
  }[];
  aylikToplamlar: {
    [key: number]: {
      gelir: number;
      gider: number;
      kar: number;
    };
  };
  genelToplam: {
    gelir: number;
    gider: number;
    kar: number;
  };
  hesaplamaNotlari: {
    kdv: string;
    tevkifat?: string;
    formul: string;
    detayliVersiyon?: string;
  };
}

export default function SoforBilanco() {
  const { theme } = useTheme();
  const [raporVerisi, setRaporVerisi] = useState<AracMuhasebeVerisi | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState<string>('');
  const [secilenYil, setSecilenYil] = useState<string>(new Date().getFullYear().toString());
  const [gosterim, setGosterim] = useState<'kar' | 'gelir' | 'gider'>('kar');

  const aylar = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const yillar = [];
  const simdikiYil = new Date().getFullYear();
  for (let yil = simdikiYil; yil >= simdikiYil - 5; yil--) {
    yillar.push(yil.toString());
  }

  // Sayfa yüklendiğinde verileri getir
  useEffect(() => {
    raporuYukle();
  }, [secilenYil]);

  // Rapor verilerini yükle
  const raporuYukle = async () => {
    setYukleniyor(true);
    setHata('');

    try {
      const response = await fetch(`/api/arac-muhasebe-raporu?yil=${secilenYil}`);
      
      if (response.ok) {
        const data = await response.json();
        setRaporVerisi(data);
      } else {
        const errorData = await response.json();
        setHata(errorData.error || 'Rapor verisi alınırken hata oluştu');
      }
    } catch (error) {
      setHata('Rapor verisi alınırken hata oluştu');
      console.error('Rapor yükleme hatası:', error);
    } finally {
      setYukleniyor(false);
    }
  };

  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(tutar);
  };

  const getCellValue = (aracVeri: any, ay: number) => {
    const veri = aracVeri.aylikVeriler[ay];
    if (!veri) return 0;
    
    switch (gosterim) {
      case 'gelir':
        return veri.gelir;
      case 'gider':
        return veri.gider;
      case 'kar':
      default:
        return veri.kar;
    }
  };

  const getCellClass = (deger: number) => {
    if (gosterim === 'kar') {
      if (deger > 0) return 'text-green-600 font-medium';
      if (deger < 0) return 'text-red-600 font-medium';
      return 'text-gray-500';
    }
    return 'text-gray-900';
  };

  // Detaylı hesaplamaları göster
  const DetayliHesaplamalar = ({ arac }: { arac: AracMuhasebeVerisi['aracBazindaAylikVeriler'][0] }) => {
    const [acikDetay, setAcikDetay] = useState(false);

    if (!arac.detayliHesaplar) return null;

    const yillikDetay = arac.detayliHesaplar.yillikDetay;

    return (
      <div className="mt-3 border-t pt-3">
        <button
          onClick={() => setAcikDetay(!acikDetay)}
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
        >
          <span className="mr-2">{acikDetay ? '▼' : '►'}</span>
          Detaylı Hesaplamalar {acikDetay ? 'Gizle' : 'Göster'}
        </button>

        {acikDetay && (
          <div className="mt-3 overflow-x-auto">
            <h4 className="text-sm font-semibold mb-2">{arac.plaka} - {arac.sofor_adi} Detaylı Hesabı</h4>
            
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-1 px-2 border-b border-r text-left text-xs">Açıklama</th>
                  <th className="py-1 px-2 border-b border-r text-right text-xs">Tutar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 px-2 border-b border-r text-xs">Ham Gelir</td>
                  <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.hamGelir)}</td>
                </tr>
                <tr>
                  <td className="py-1 px-2 border-b border-r text-xs">KDV Tutarı (%20)</td>
                  <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.kdvTutari)}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-1 px-2 border-b border-r font-semibold text-xs">KDV Dahil Tutar</td>
                  <td className="py-1 px-2 border-b border-r text-right font-semibold text-xs">{formatTutar(yillikDetay.kdvDahilTutar)}</td>
                </tr>
                <tr>
                  <td className="py-1 px-2 border-b border-r text-xs">Tevkifat Tutarı (%4)</td>
                  <td className="py-1 px-2 border-b border-r text-right text-red-600 text-xs">-{formatTutar(yillikDetay.tevkifatTutari)}</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-1 px-2 border-b border-r font-semibold text-xs">Net Gelir</td>
                  <td className="py-1 px-2 border-b border-r text-right font-semibold text-xs">{formatTutar(yillikDetay.netGelir)}</td>
                </tr>
                <tr>
                  <td className="py-1 px-2 border-b border-r text-xs">Toplam Gider</td>
                  <td className="py-1 px-2 border-b border-r text-right text-red-600 text-xs">-{formatTutar(yillikDetay.gider)}</td>
                </tr>
                <tr className={`${yillikDetay.kar >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                  <td className="py-1 px-2 border-b border-r font-bold text-xs">KAR / ZARAR</td>
                  <td className={`py-1 px-2 border-b border-r text-right font-bold text-xs ${yillikDetay.kar >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatTutar(yillikDetay.kar)}
                  </td>
                </tr>
              </tbody>
            </table>

            <h5 className="text-sm font-semibold mt-4 mb-2">Aylık Detaylı Hesaplamalar</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-1 px-2 border-b border-r text-left text-xs">Ay</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">Ham Gelir</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">KDV</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">KDV Dahil</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">Tevkifat</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">Net Gelir</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">Gider</th>
                    <th className="py-1 px-2 border-b border-r text-right text-xs">Kar/Zarar</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(arac.detayliHesaplar.aylikDetaylar).map(([ay, detay]) => {
                    const ayNum = parseInt(ay);
                    const ayAdi = aylar[ayNum - 1];
                    
                    // Sıfır değerli ayları gösterme
                    if (detay.hamGelir === 0 && detay.gider === 0) return null;
                    
                    return (
                      <tr key={ay} className={ayNum % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="py-1 px-2 border-b border-r text-xs">{ayAdi}</td>
                        <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(detay.hamGelir)}</td>
                        <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(detay.kdvTutari)}</td>
                        <td className="py-1 px-2 border-b border-r text-right font-medium text-xs">{formatTutar(detay.kdvDahilTutar)}</td>
                        <td className="py-1 px-2 border-b border-r text-right text-red-500 text-xs">-{formatTutar(detay.tevkifatTutari)}</td>
                        <td className="py-1 px-2 border-b border-r text-right font-medium text-xs">{formatTutar(detay.netGelir)}</td>
                        <td className="py-1 px-2 border-b border-r text-right text-red-500 text-xs">{detay.gider > 0 ? `-${formatTutar(detay.gider)}` : '₺0'}</td>
                        <td className={`py-1 px-2 border-b border-r text-right font-medium text-xs ${detay.kar >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatTutar(detay.kar)}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gray-100 font-bold">
                    <td className="py-1 px-2 border-b border-r text-xs">Yıllık Toplam</td>
                    <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.hamGelir)}</td>
                    <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.kdvTutari)}</td>
                    <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.kdvDahilTutar)}</td>
                    <td className="py-1 px-2 border-b border-r text-right text-red-500 text-xs">-{formatTutar(yillikDetay.tevkifatTutari)}</td>
                    <td className="py-1 px-2 border-b border-r text-right text-xs">{formatTutar(yillikDetay.netGelir)}</td>
                    <td className="py-1 px-2 border-b border-r text-right text-red-500 text-xs">-{formatTutar(yillikDetay.gider)}</td>
                    <td className={`py-1 px-2 border-b border-r text-right text-xs ${yillikDetay.kar >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatTutar(yillikDetay.kar)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-1 p-4 overflow-x-auto">
        <div className="max-w-none mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-[var(--foreground)]">
                Şöför Bilanço - {secilenYil}
            </h1>
              <div className="flex gap-2">
                <Link 
                  href="/sofor-bilanco/arac-masraflari"
                  className="bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Masraf Yönetimi
                </Link>
                <Link 
                  href="/sofor-bilanco/arac-muhasebe"
                  className="bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors text-sm"
                >
                  Muhasebe Yönetimi
                </Link>
                <Link 
                  href="/"
                  className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  ← Ana Sayfa
                </Link>
              </div>
            </div>
          </div>

          {/* Kontroller */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-3 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yıl Seçin
                </label>
                <select
                  value={secilenYil}
                  onChange={(e) => setSecilenYil(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  {yillar.map((yil) => (
                    <option key={yil} value={yil}>
                      {yil}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gösterim
                </label>
                <div className="flex gap-1">
                  <button
                    onClick={() => setGosterim('kar')}
                    className={`px-3 py-1.5 rounded-md transition-colors text-sm ${
                      gosterim === 'kar'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Kar/Zarar
                  </button>
                  <button
                    onClick={() => setGosterim('gelir')}
                    className={`px-3 py-1.5 rounded-md transition-colors text-sm ${
                      gosterim === 'gelir'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Gelir
                  </button>
                  <button
                    onClick={() => setGosterim('gider')}
                    className={`px-3 py-1.5 rounded-md transition-colors text-sm ${
                      gosterim === 'gider'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Gider
                  </button>
                </div>
              </div>

              <div className="flex-1 md:flex-none">
                <button
                  onClick={raporuYukle}
                  disabled={yukleniyor}
                  className="w-full md:w-auto bg-purple-600 text-white px-4 py-1.5 rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm"
                >
                  {yukleniyor ? 'Yükleniyor...' : 'Yenile'}
                </button>
              </div>
            </div>

            {hata && (
              <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {hata}
              </div>
            )}
          </div>

          {/* Excel Benzeri Tablo */}
          {raporVerisi && !yukleniyor && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="sticky left-0 z-10 bg-gray-50 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                        Araç / Ay
                      </th>
                      {aylar.map((ay, index) => (
                        <th key={index} className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ay}
                        </th>
                      ))}
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 border-l-2 border-gray-300">
                        TOPLAM
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {raporVerisi.aracBazindaAylikVeriler.map((aracVeri, index) => (
                      <tr key={aracVeri.arac_id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="sticky left-0 z-10 px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900 bg-white border-r">
                          {aracVeri.plaka}
                          <div className="text-xs text-gray-500">{aracVeri.sofor_adi}</div>
                        </td>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ay) => {
                          const deger = getCellValue(aracVeri, ay);
                          return (
                            <td key={ay} className={`px-1 py-2 whitespace-nowrap text-xs text-center ${getCellClass(deger)}`}>
                              {deger !== 0 ? formatTutar(deger) : '-'}
                            </td>
                          );
                        })}
                        <td className={`px-2 py-2 whitespace-nowrap text-xs text-center font-bold bg-gray-100 border-l-2 border-gray-300 ${
                          getCellClass(
                            gosterim === 'gelir' ? aracVeri.yillikToplam.gelir :
                            gosterim === 'gider' ? aracVeri.yillikToplam.gider :
                            aracVeri.yillikToplam.kar
                          )
                        }`}>
                          {formatTutar(
                            gosterim === 'gelir' ? aracVeri.yillikToplam.gelir :
                            gosterim === 'gider' ? aracVeri.yillikToplam.gider :
                            aracVeri.yillikToplam.kar
                          )}
                        </td>
                      </tr>
                    ))}

                    {/* Aylık Toplamlar Satırı */}
                    <tr className="bg-yellow-50 font-bold border-t-2 border-gray-300">
                      <td className="sticky left-0 z-10 px-3 py-2 whitespace-nowrap text-xs text-gray-900 bg-yellow-50 border-r">
                        AYLIK TOPLAM
                      </td>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ay) => {
                        const toplamVeri = raporVerisi.aylikToplamlar[ay];
                        const deger = gosterim === 'gelir' ? toplamVeri.gelir :
                                     gosterim === 'gider' ? toplamVeri.gider :
                                     toplamVeri.kar;
                        return (
                          <td key={ay} className={`px-1 py-2 whitespace-nowrap text-xs text-center ${getCellClass(deger)}`}>
                            {formatTutar(deger)}
                          </td>
                        );
                      })}
                      <td className={`px-2 py-2 whitespace-nowrap text-xs text-center bg-yellow-100 border-l-2 border-gray-300 ${
                        getCellClass(
                          gosterim === 'gelir' ? raporVerisi.genelToplam.gelir :
                          gosterim === 'gider' ? raporVerisi.genelToplam.gider :
                          raporVerisi.genelToplam.kar
                        )
                      }`}>
                        {formatTutar(
                          gosterim === 'gelir' ? raporVerisi.genelToplam.gelir :
                          gosterim === 'gider' ? raporVerisi.genelToplam.gider :
                          raporVerisi.genelToplam.kar
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Belirtilen Araçlar İçin Özel Kar/Zarar Tablosu */}
          {raporVerisi && !yukleniyor && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Şöför Adı
                      </th>
                      {aylar.map((ay, index) => (
                        <th key={index} className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {ay}
                        </th>
                      ))}
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-100 border-l-2 border-gray-300">
                        Yıllık Toplam
                      </th>
                      <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-100 border-l-2 border-blue-300">
                        Şirket Payı
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[3, 5, 7, 8].map((istenenAracId, index) => {
                      const aracVeri = raporVerisi.aracBazindaAylikVeriler.find(arac => arac.arac_id === istenenAracId);
                      
                      if (!aracVeri) {
                        return (
                          <tr key={istenenAracId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500" colSpan={14}>
                              Araç bulunamadı
                            </td>
                          </tr>
                        );
                      }

                      return (
                        <tr key={aracVeri.arac_id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-600">
                            {aracVeri.sofor_adi}
                          </td>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ay) => {
                            const karZarar = aracVeri.aylikVeriler[ay]?.kar || 0;
                            return (
                              <td key={ay} className={`px-1 py-2 whitespace-nowrap text-xs text-center ${
                                karZarar > 0 ? 'text-green-600 font-medium' : 
                                karZarar < 0 ? 'text-red-600 font-medium' : 'text-gray-500'
                              }`}>
                                {karZarar !== 0 ? formatTutar(karZarar) : '-'}
                              </td>
                            );
                          })}
                          <td className={`px-2 py-2 whitespace-nowrap text-xs text-center font-bold bg-gray-100 border-l-2 border-gray-300 ${
                            aracVeri.yillikToplam.kar > 0 ? 'text-green-600' : 
                            aracVeri.yillikToplam.kar < 0 ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {formatTutar(aracVeri.yillikToplam.kar)}
                          </td>
                          <td className={`px-2 py-2 whitespace-nowrap text-xs text-center font-bold bg-blue-100 border-l-2 border-blue-300 ${
                            (() => {
                              // Araç ID'sine göre şirket payı hesaplama
                              let sirketPayi = 0;
                              const yillikToplam = aracVeri.yillikToplam.kar;
                              
                              if (aracVeri.arac_id === 3) {
                                sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                              } else if (aracVeri.arac_id === 5) {
                                sirketPayi = (yillikToplam / 4) * 3; // (Yıllık Toplam/4)*3
                              } else if (aracVeri.arac_id === 7) {
                                sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                              } else if (aracVeri.arac_id === 8) {
                                sirketPayi = yillikToplam / 6; // Yıllık Toplam/6
                              }
                              
                              return sirketPayi > 0 ? 'text-blue-600' : 'text-gray-500';
                            })()
                          }`}>
                            {(() => {
                              // Araç ID'sine göre şirket payı hesaplama
                              let sirketPayi = 0;
                              const yillikToplam = aracVeri.yillikToplam.kar;
                              
                              if (aracVeri.arac_id === 3) {
                                sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                              } else if (aracVeri.arac_id === 5) {
                                sirketPayi = (yillikToplam / 4) * 3; // (Yıllık Toplam/4)*3
                              } else if (aracVeri.arac_id === 7) {
                                sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                              } else if (aracVeri.arac_id === 8) {
                                sirketPayi = yillikToplam / 6; // Yıllık Toplam/6
                              }
                              
                              return formatTutar(sirketPayi);
                            })()}
                          </td>
                        </tr>
                      );
                    })}
                    
                    {/* Seçili Araçlar Toplamı */}
                    <tr className="bg-purple-50 font-bold border-t-2 border-purple-300">
                      <td className="px-3 py-2 whitespace-nowrap text-xs text-purple-900">
                        SEÇİLİ ARAÇLAR TOPLAMI
                      </td>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ay) => {
                        const aylikToplam = [3, 5, 7, 8].reduce((toplam, aracId) => {
                          const aracVeri = raporVerisi.aracBazindaAylikVeriler.find(arac => arac.arac_id === aracId);
                          return toplam + (aracVeri?.aylikVeriler[ay]?.kar || 0);
                        }, 0);
                        
                        return (
                          <td key={ay} className={`px-1 py-2 whitespace-nowrap text-xs text-center ${
                            aylikToplam > 0 ? 'text-green-600' : 
                            aylikToplam < 0 ? 'text-red-600' : 'text-gray-500'
                          }`}>
                            {formatTutar(aylikToplam)}
                          </td>
                        );
                      })}
                      <td className={`px-2 py-2 whitespace-nowrap text-xs text-center bg-purple-100 border-l-2 border-purple-300 ${
                        (() => {
                          const yillikToplam = [3, 5, 7, 8].reduce((toplam, aracId) => {
                            const aracVeri = raporVerisi.aracBazindaAylikVeriler.find(arac => arac.arac_id === aracId);
                            return toplam + (aracVeri?.yillikToplam.kar || 0);
                          }, 0);
                          return yillikToplam > 0 ? 'text-green-600' : 
                                 yillikToplam < 0 ? 'text-red-600' : 'text-gray-500';
                        })()
                      }`}>
                        {formatTutar([3, 5, 7, 8].reduce((toplam, aracId) => {
                          const aracVeri = raporVerisi.aracBazindaAylikVeriler.find(arac => arac.arac_id === aracId);
                          return toplam + (aracVeri?.yillikToplam.kar || 0);
                        }, 0))}
                      </td>
                      <td className={`px-2 py-2 whitespace-nowrap text-xs text-center bg-blue-100 border-l-2 border-blue-300 text-blue-600`}>
                        {formatTutar([3, 5, 7, 8].reduce((toplam, aracId) => {
                          const aracVeri = raporVerisi.aracBazindaAylikVeriler.find(arac => arac.arac_id === aracId);
                          if (!aracVeri) return toplam;
                          
                          // Araç ID'sine göre şirket payı hesaplama
                          let sirketPayi = 0;
                          const yillikToplam = aracVeri.yillikToplam.kar;
                          
                          if (aracVeri.arac_id === 3) {
                            sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                          } else if (aracVeri.arac_id === 5) {
                            sirketPayi = (yillikToplam / 4) * 3; // (Yıllık Toplam/4)*3
                          } else if (aracVeri.arac_id === 7) {
                            sirketPayi = yillikToplam / 2; // Yıllık Toplam/2
                          } else if (aracVeri.arac_id === 8) {
                            sirketPayi = yillikToplam / 6; // Yıllık Toplam/6
                          }
                          
                          return toplam + sirketPayi;
                        }, 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Rapor tablosu */}
          {!yukleniyor && raporVerisi && (
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 overflow-x-auto">
              <h3 className="text-lg font-bold mb-3">Araçlar Bazında Detaylı Hesaplamalar</h3>
              
              {raporVerisi.aracBazindaAylikVeriler.map((arac) => (
                <div key={arac.arac_id} className="mb-6 p-3 border border-gray-200 rounded-lg">
                  <h4 className="text-md font-bold mb-2">
                    {arac.plaka} - {arac.sofor_adi}
                  </h4>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <span className="block text-xs text-gray-600">Yıllık Gelir</span>
                      <span className="text-sm font-bold">{formatTutar(arac.yillikToplam.gelir)}</span>
                    </div>
                    <div className="p-2 bg-red-50 rounded-lg">
                      <span className="block text-xs text-gray-600">Yıllık Gider</span>
                      <span className="text-sm font-bold">{formatTutar(arac.yillikToplam.gider)}</span>
                    </div>
                    <div className={`p-2 rounded-lg ${arac.yillikToplam.kar >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                      <span className="block text-xs text-gray-600">Yıllık Kar/Zarar</span>
                      <span className={`text-sm font-bold ${arac.yillikToplam.kar >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatTutar(arac.yillikToplam.kar)}
                      </span>
                    </div>
                  </div>
                  
                  <DetayliHesaplamalar arac={arac} />
                </div>
              ))}
              
              {/* Hesaplama notları */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                <h3 className="text-md font-semibold mb-2">Hesaplama Notları</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{raporVerisi.hesaplamaNotlari.kdv}</li>
                  {raporVerisi.hesaplamaNotlari.tevkifat && (
                    <li>{raporVerisi.hesaplamaNotlari.tevkifat}</li>
                  )}
                  <li>{raporVerisi.hesaplamaNotlari.formul}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 