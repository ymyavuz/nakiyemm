'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

interface Cek {
  id: number;
  cek_no: string;
  vade_tarihi: string;
  tutar: number;
  durum: 'beklemede' | 'tahsil_edildi' | 'iade_edildi';
  aciklama?: string;
  odenme_tarihi?: string;
  olusturma_tarihi: string;
}

export default function CekYonetimi() {
  const { theme } = useTheme();
  const [cekler, setCekler] = useState<Cek[]>([]);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [toplamCiro, setToplamCiro] = useState<number>(0);
  const [ciroYukleniyor, setCiroYukleniyor] = useState(false);
  const [yeniCek, setYeniCek] = useState({
    cek_no: '',
    vade_tarihi: '',
    tutar: '',
    aciklama: '',
    odenme_tarihi: ''
  });
  const [cekEklemeAktif, setCekEklemeAktif] = useState(false);

  // Çekleri yükle
  const cekleriYukle = async () => {
    setYukleniyor(true);
    try {
      const response = await fetch('/api/cekler');
      if (response.ok) {
        const data = await response.json();
        setCekler(data);
      } else {
        alert('Çekler yüklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Çekler yüklenirken hata:', error);
      alert('Çekler yüklenirken bir hata oluştu');
    } finally {
      setYukleniyor(false);
    }
  };

  // Toplam ciroyu yükle
  const ciroYukle = async () => {
    setCiroYukleniyor(true);
    try {
      const response = await fetch('/api/ciro-hesapla');
      if (response.ok) {
        const data = await response.json();
        setToplamCiro(data.toplamCiro);
      } else {
        console.error('Ciro yüklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Ciro yüklenirken hata:', error);
    } finally {
      setCiroYukleniyor(false);
    }
  };

  // Sayfa yüklendiğinde çekleri ve ciroyu getir
  useEffect(() => {
    cekleriYukle();
    ciroYukle();
  }, []);

  // Yeni çek ekle
  const yeniCekEkle = async () => {
    if (!yeniCek.cek_no || !yeniCek.vade_tarihi || !yeniCek.tutar) {
      alert('Lütfen tüm zorunlu alanları doldurun');
      return;
    }

    try {
      const response = await fetch('/api/cekler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...yeniCek,
          tutar: parseFloat(yeniCek.tutar)
        }),
      });

      if (response.ok) {
        alert('Çek başarıyla eklendi');
        setYeniCek({
          cek_no: '',
          vade_tarihi: '',
          tutar: '',
          aciklama: '',
          odenme_tarihi: ''
        });
        setCekEklemeAktif(false);
        cekleriYukle();
      } else {
        const errorData = await response.json();
        alert('Çek eklenirken bir hata oluştu: ' + (errorData.error || 'Bilinmeyen hata'));
      }
    } catch (error) {
      console.error('Çek ekleme hatası:', error);
      alert('Çek eklenirken bir hata oluştu');
    }
  };

  // Çek durumunu güncelle
  const cekDurumuGuncelle = async (cekId: number, yeniDurum: string) => {
    try {
      const response = await fetch(`/api/cekler/${cekId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ durum: yeniDurum }),
      });

      if (response.ok) {
        alert('Çek durumu güncellendi');
        cekleriYukle();
      } else {
        alert('Çek durumu güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Çek durumu güncelleme hatası:', error);
      alert('Çek durumu güncellenirken bir hata oluştu');
    }
  };

  // Çek sil
  const cekSil = async (cekId: number) => {
    if (!confirm('Bu çeki silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      const response = await fetch(`/api/cekler/${cekId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Çek başarıyla silindi');
        cekleriYukle();
      } else {
        alert('Çek silinirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Çek silme hatası:', error);
      alert('Çek silinirken bir hata oluştu');
    }
  };

  const formatTarih = (tarih: string) => {
    return new Date(tarih).toLocaleDateString('tr-TR');
  };

  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(tutar);
  };

  const getDurumRengi = (durum: string) => {
    switch (durum) {
      case 'beklemede':
        return 'bg-yellow-100 text-yellow-800';
      case 'tahsil_edildi':
        return 'bg-green-100 text-green-800';
      case 'iade_edildi':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDurumMetni = (durum: string) => {
    switch (durum) {
      case 'beklemede':
        return 'Beklemede';
      case 'tahsil_edildi':
        return 'Tahsil Edildi';
      case 'iade_edildi':
        return 'İade Edildi';
      default:
        return durum;
    }
  };

  // Hesaplama fonksiyonları
  const hesaplaAlinacakNakit = () => {
    const tahsilEdilenCekler = cekler.filter(c => c.durum === 'tahsil_edildi');
    const tahsilEdilenToplam = tahsilEdilenCekler.reduce((sum, c) => sum + c.tutar, 0);
    return toplamCiro - tahsilEdilenToplam;
  };

  const hesaplaAlinacakCek = () => {
    const tahsilEdilenCekler = cekler.filter(c => c.durum === 'tahsil_edildi');
    const bekleyenCekler = cekler.filter(c => c.durum === 'beklemede');
    const tahsilEdilenToplam = tahsilEdilenCekler.reduce((sum, c) => sum + c.tutar, 0);
    const bekleyenToplam = bekleyenCekler.reduce((sum, c) => sum + c.tutar, 0);
    return toplamCiro - tahsilEdilenToplam - bekleyenToplam;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sol kenar menüsü */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Çek Yönetimi</h1>
              <button
                onClick={() => setCekEklemeAktif(!cekEklemeAktif)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {cekEklemeAktif ? 'İptal' : 'Yeni Çek Ekle'}
              </button>
            </div>
          </div>

          {/* Yeni çek ekleme formu */}
          {cekEklemeAktif && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Yeni Çek Ekle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Çek No *
                  </label>
                  <input
                    type="text"
                    value={yeniCek.cek_no}
                    onChange={(e) => setYeniCek({...yeniCek, cek_no: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    placeholder="Çek numarası"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Tutar (TL) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={yeniCek.tutar}
                    onChange={(e) => setYeniCek({...yeniCek, tutar: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Çekin Alınma Tarihi *
                  </label>
                  <input
                    type="date"
                    value={yeniCek.vade_tarihi}
                    onChange={(e) => setYeniCek({...yeniCek, vade_tarihi: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Ödenme Tarihi
                  </label>
                  <input
                    type="date"
                    value={yeniCek.odenme_tarihi}
                    onChange={(e) => setYeniCek({...yeniCek, odenme_tarihi: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Açıklama
                  </label>
                  <input
                    type="text"
                    value={yeniCek.aciklama}
                    onChange={(e) => setYeniCek({...yeniCek, aciklama: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                    placeholder="Opsiyonel açıklama"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={yeniCekEkle}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Çek Ekle
                </button>
              </div>
            </div>
          )}

          {/* Özet kartları */}
          {cekler.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Bekleyen Çekler */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Bekleyen Çekler</h3>
                <div className="text-3xl font-bold text-yellow-900">
                  {cekler.filter(c => c.durum === 'beklemede').length}
                </div>
                <div className="text-sm text-yellow-700 mt-2">
                  Toplam: {formatTutar(cekler.filter(c => c.durum === 'beklemede').reduce((sum, c) => sum + c.tutar, 0))}
                </div>
              </div>
              
              {/* Tahsil Edilen */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Tahsil Edilen</h3>
                <div className="text-3xl font-bold text-green-900">
                  {cekler.filter(c => c.durum === 'tahsil_edildi').length}
                </div>
                <div className="text-sm text-green-700 mt-2">
                  Toplam: {formatTutar(cekler.filter(c => c.durum === 'tahsil_edildi').reduce((sum, c) => sum + c.tutar, 0))}
                </div>
              </div>

              {/* İade Edilen */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">İade Edilen</h3>
                <div className="text-3xl font-bold text-red-900">
                  {cekler.filter(c => c.durum === 'iade_edildi').length}
                </div>
                <div className="text-sm text-red-700 mt-2">
                  Toplam: {formatTutar(cekler.filter(c => c.durum === 'iade_edildi').reduce((sum, c) => sum + c.tutar, 0))}
                </div>
              </div>
            </div>
          )}

          {/* Çek listesi */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Çek Listesi</h2>
              
              {yukleniyor ? (
                <div className="text-center py-12">
                  <div className="text-gray-600">Çekler yükleniyor...</div>
                </div>
              ) : cekler.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-600">Henüz çek bulunmuyor</div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Çek No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tutar
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Alınma Tarihi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Ödenme Tarihi
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Durum
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
                      {cekler.map((cek) => (
                        <tr key={cek.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {cek.cek_no}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatTutar(cek.tutar)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatTarih(cek.vade_tarihi)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cek.odenme_tarihi ? formatTarih(cek.odenme_tarihi) : '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDurumRengi(cek.durum)}`}>
                              {getDurumMetni(cek.durum)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cek.aciklama || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              {cek.durum === 'beklemede' && (
                                <>
                                  <button
                                    onClick={() => cekDurumuGuncelle(cek.id, 'tahsil_edildi')}
                                    className="text-green-600 hover:text-green-900"
                                  >
                                    Tahsil Et
                                  </button>
                                  <button
                                    onClick={() => cekDurumuGuncelle(cek.id, 'iade_edildi')}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    İade Et
                                  </button>
                                </>
                              )}
                              <button
                                onClick={() => cekSil(cek.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Nakit Hesaplama Özeti */}
          {toplamCiro > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Nakit Hesaplama Özeti</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Toplam Ciro</h3>
                  <div className="text-2xl font-bold text-blue-900">
                    {formatTutar(toplamCiro)}
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Alınacak Nakit</h3>
                  <div className="text-2xl font-bold text-orange-900">
                    {formatTutar(hesaplaAlinacakNakit())}
                  </div>
                  <div className="text-sm text-orange-700 mt-1">
                    (Ciro - Tahsil Edilen Çekler)
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Alınacak Çek</h3>
                  <div className="text-2xl font-bold text-purple-900">
                    {formatTutar(hesaplaAlinacakCek())}
                  </div>
                  <div className="text-sm text-purple-700 mt-1">
                    (Ciro - Tahsil Edilen - Bekleyen Çekler)
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