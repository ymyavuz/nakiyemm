'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import { useTheme } from '../../context/ThemeContext';

interface OdemeKaydi {
  id: number;
  sofor_adi: string;
  tutar: number;
  tarih: string;
  aciklama?: string;
}

// Sabit başlangıç borç verileri
const BASLANGIC_BORCLAR = [
  { sofor_adi: 'Tahsin', plaka: '-', baslangic_borc: 893587 },
  { sofor_adi: 'Ökkeş', plaka: '-', baslangic_borc: 940444 },
  { sofor_adi: 'İbrahim Halil Kalkan', plaka: '34 CAC 05', baslangic_borc: 1031211 },
  { sofor_adi: 'İsmail Kaymaz (Şükrü)', plaka: '34 MC 1034', baslangic_borc: 1143746 },
  { sofor_adi: 'Ali Kalkan', plaka: '34 FC 1458', baslangic_borc: 1096967 },
  { sofor_adi: 'Bilal Kalkan', plaka: '34 TAU 26', baslangic_borc: 1739939 },
  { sofor_adi: 'Mehmet Kalkan (Durdu)', plaka: '34 CAC 06', baslangic_borc: 1790896 },
  { sofor_adi: 'Seyhan Kalkan', plaka: '34 PAU 12', baslangic_borc: 1719341 }
];

export default function AracMuhasebeYonetimi() {
  const { theme } = useTheme();
  const [hata, setHata] = useState<string>('');
  const [odemeKayitlari, setOdemeKayitlari] = useState<OdemeKaydi[]>([]);
  const [odemelerYukleniyor, setOdemelerYukleniyor] = useState(false);
  
  // Yeni ödeme için state
  const [yeniOdeme, setYeniOdeme] = useState({
    sofor_adi: '',
    tutar: '',
    aciklama: ''
  });

  // Ödeme modalı state
  const [odemeModalAcik, setOdemeModalAcik] = useState(false);

  useEffect(() => {
    odemeleriYukle();
  }, []);

  // Ödemeleri veritabanından yükle
  const odemeleriYukle = async () => {
    setOdemelerYukleniyor(true);
    try {
      const response = await fetch('/api/sofor-odemeler');
      if (response.ok) {
        const data = await response.json();
        setOdemeKayitlari(data);
      } else {
        console.error('Ödemeler yüklenirken hata oluştu');
      }
    } catch (error) {
      console.error('Ödemeler yükleme hatası:', error);
    } finally {
      setOdemelerYukleniyor(false);
    }
  };

  // Borç hesaplama fonksiyonu
  const hesaplaBorcDurumu = (soforAdi: string) => {
    const baslangicBorc = BASLANGIC_BORCLAR.find(b => b.sofor_adi === soforAdi)?.baslangic_borc || 0;
    const toplamOdeme = odemeKayitlari
      .filter(odeme => odeme.sofor_adi === soforAdi)
      .reduce((toplam, odeme) => toplam + odeme.tutar, 0);
    
    return {
      baslangic_borc: baslangicBorc,
      toplam_odeme: toplamOdeme,
      kalan_borc: baslangicBorc - toplamOdeme
    };
  };

  // Ödeme ekle - Veritabanına kaydet
  const odemeEkle = async () => {
    if (!yeniOdeme.sofor_adi || !yeniOdeme.tutar) {
      setHata('Lütfen şöför ve tutar alanlarını doldurun');
      return;
    }

    try {
      const response = await fetch('/api/sofor-odemeler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sofor_adi: yeniOdeme.sofor_adi,
          tutar: parseFloat(yeniOdeme.tutar),
          aciklama: yeniOdeme.aciklama || null
        }),
      });

      if (response.ok) {
        await odemeleriYukle(); // Verileri yeniden yükle
        setYeniOdeme({ sofor_adi: '', tutar: '', aciklama: '' });
        setOdemeModalAcik(false);
        setHata('');
        alert('Ödeme başarıyla eklendi!');
      } else {
        const errorData = await response.json();
        setHata(errorData.error || 'Ödeme eklenirken hata oluştu');
      }
    } catch (error) {
      setHata('Ödeme eklenirken hata oluştu');
      console.error('Ödeme ekleme hatası:', error);
    }
  };

  // Ödeme sil
  const odemeSil = async (id: number) => {
    if (!confirm('Bu ödeme kaydını silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch(`/api/sofor-odemeler?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await odemeleriYukle(); // Verileri yeniden yükle
        alert('Ödeme kaydı başarıyla silindi!');
      } else {
        setHata('Ödeme kaydı silinirken hata oluştu');
      }
    } catch (error) {
      setHata('Ödeme kaydı silinirken hata oluştu');
      console.error('Ödeme silme hatası:', error);
    }
  };

  // Tüm ödemeleri sil
  const tumOdemeleriSil = async () => {
    if (!confirm('TÜM ödeme kayıtlarını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) {
      return;
    }

    if (!confirm('Bu işlem gerçekten geri alınamaz! Devam etmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch('/api/sofor-odemeler', {
        method: 'DELETE',
      });

      if (response.ok) {
        await odemeleriYukle(); // Verileri yeniden yükle
        alert('Tüm ödeme kayıtları başarıyla silindi!');
      } else {
        setHata('Ödeme kayıtları silinirken hata oluştu');
      }
    } catch (error) {
      setHata('Ödeme kayıtları silinirken hata oluştu');
      console.error('Toplu silme hatası:', error);
    }
  };

  // Para formatı
  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(tutar);
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
              <h1 className="text-2xl font-bold text-[var(--foreground)]">Şöför Borç Takip Sistemi</h1>
              <div className="flex gap-2">
                <Link 
                  href="/sofor-bilanco/arac-masraflari"
                  className="bg-purple-600 text-white px-3 py-1.5 rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Masraf Yönetimi
                </Link>
                <Link 
                  href="/sofor-bilanco"
                  className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  ← Şöför Bilanço
                </Link>
              </div>
            </div>
          </div>

          {/* Şöförlere Olan Borç Tablosu */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Şöförlere Olan Borçlarımız</h2>
              <button
                onClick={() => setOdemeModalAcik(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                💳 Ödeme Ekle
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Şirket Bilançosu'ndaki gelir toplamları - şöförlere ödenmesi gereken tutarlar
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Şöför Adı
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Başlangıç Borç
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Toplam Ödeme
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Kalan Borç
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Durum
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {BASLANGIC_BORCLAR.map((borc, index) => {
                    const borcDurumu = hesaplaBorcDurumu(borc.sofor_adi);
                    return (
                      <tr key={borc.sofor_adi} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {borc.sofor_adi}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-600">
                          {formatTutar(borc.baslangic_borc)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-green-600">
                          {formatTutar(borcDurumu.toplam_odeme)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-red-600">
                          {formatTutar(borcDurumu.kalan_borc)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            borcDurumu.kalan_borc <= 0 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {borcDurumu.kalan_borc <= 0 ? 'Ödendi' : 'Borçlu'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-gray-100">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-bold text-gray-900">
                      TOPLAM
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-gray-700">
                      {formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc) => toplam + borc.baslangic_borc, 0))}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-green-700">
                      {formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc) => {
                        return toplam + hesaplaBorcDurumu(borc.sofor_adi).toplam_odeme;
                      }, 0))}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-bold text-red-700 text-lg">
                      {formatTutar(BASLANGIC_BORCLAR.reduce((toplam, borc) => {
                        return toplam + hesaplaBorcDurumu(borc.sofor_adi).kalan_borc;
                      }, 0))}
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Ödeme Modalı */}
          {odemeModalAcik && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 className="text-lg font-semibold mb-4">Ödeme Ekle</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Şöför Seçin *
                    </label>
                    <select
                      value={yeniOdeme.sofor_adi}
                      onChange={(e) => setYeniOdeme({...yeniOdeme, sofor_adi: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm"
                    >
                      <option value="">Şöför Seçin</option>
                      {BASLANGIC_BORCLAR.map((borc) => (
                        <option key={borc.sofor_adi} value={borc.sofor_adi}>
                          {borc.sofor_adi} - Kalan Borç: {formatTutar(hesaplaBorcDurumu(borc.sofor_adi).kalan_borc)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ödeme Tutarı (TL) *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={yeniOdeme.tutar}
                      onChange={(e) => setYeniOdeme({...yeniOdeme, tutar: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm"
                      placeholder="0.00"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Açıklama
                    </label>
                    <input
                      type="text"
                      value={yeniOdeme.aciklama}
                      onChange={(e) => setYeniOdeme({...yeniOdeme, aciklama: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-sm"
                      placeholder="Ödeme açıklaması..."
                    />
                  </div>

                  {hata && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                      {hata}
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => {
                      setOdemeModalAcik(false);
                      setYeniOdeme({ sofor_adi: '', tutar: '', aciklama: '' });
                      setHata('');
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                  >
                    İptal
                  </button>
                  <button
                    onClick={odemeEkle}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                  >
                    Ödeme Ekle
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Ödeme Geçmişi */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Ödeme Geçmişi</h2>
              {odemeKayitlari.length > 0 && (
                <button
                  onClick={tumOdemeleriSil}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  🗑️ Tüm Ödemeleri Sil
                </button>
              )}
            </div>
            
            {odemelerYukleniyor ? (
              <div className="text-center py-4">
                <p className="text-gray-500">Ödeme kayıtları yükleniyor...</p>
              </div>
            ) : odemeKayitlari.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Henüz ödeme kaydı bulunmuyor.</p>
                <p className="text-sm text-gray-400 mt-1">Yeni ödeme eklemek için yukarıdaki "Ödeme Ekle" butonunu kullanın.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Şöför Adı
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tutar
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarih
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Açıklama
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {odemeKayitlari.map((odeme) => (
                      <tr key={odeme.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {odeme.sofor_adi}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-green-600 font-medium">
                          {formatTutar(odeme.tutar)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {new Date(odeme.tarih).toLocaleDateString('tr-TR')}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {odeme.aciklama || '-'}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-center">
                          <button
                            onClick={() => odemeSil(odeme.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                            title="Ödeme kaydını sil"
                          >
                            🗑️ Sil
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