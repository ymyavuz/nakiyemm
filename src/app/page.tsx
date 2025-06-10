'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Layout from './components/Layout';
import { useTheme } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';

interface DashboardData {
  toplamCiro: number;
  seferSayisi: number;
  cekler: {
    bekleyen: number;
    tahsilEdilen: number;
    iadeEdilen: number;
    bekleyenTutar: number;
    tahsilEdilenTutar: number;
    iadeEdilenTutar: number;
  };
  sirketler: {
    toplamSirketSayisi: number;
    enYuksekCiro: { sirket_adi: string; ciro: number } | null;
  };
}

interface DashboardOzet {
  oncekiAy: {
    ay: number;
    ayAdi: string;
    yil: number;
    toplamKar: number;
    sirketKarlari: Array<{
      sirket_adi: string;
      gelir: number;
      kdv: number;
      gider: number;
      tevkifat: number;
      kar: number;
    }>;
    aracKarlari: Array<{
      arac_id: number;
      plaka: string;
      sofor_adi: string;
      gelir: number;
      gider: number;
      kar: number;
      seferSayisi: number;
    }>;
    seferSayisi: number;
  };
  vadesiYaklasanCekler: {
    besGunIcinde: Array<any>;
    vadesiGecen: Array<any>;
  };
  uyarilar: {
    vadesiYaklasanSayisi: number;
    vadesiGecenSayisi: number;
    toplamUyariTutari: number;
  };
}

export default function Home() {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [dashboardOzet, setDashboardOzet] = useState<DashboardOzet | null>(null);
  const [yukleniyor, setYukleniyor] = useState(true);

  // Authentication kontrolü
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // Dashboard verilerini yükle
  const dashboardVerileriniYukle = async () => {
    setYukleniyor(true);
    try {
      // Ciro verilerini al
      const ciroResponse = await fetch('/api/ciro-hesapla');
      const ciroData = ciroResponse.ok ? await ciroResponse.json() : { toplamCiro: 0, seferSayisi: 0 };

      // Çek verilerini al
      const cekResponse = await fetch('/api/cekler');
      const cekData = cekResponse.ok ? await cekResponse.json() : [];

      // Şirket bilanço verilerini al (genel özet)
      const bilancResponse = await fetch('/api/sirket-bilanco');
      const bilancData = bilancResponse.ok ? await bilancResponse.json() : null;

      // Dashboard özet verilerini al (aylık kar ve vadesi yaklaşan çekler)
      const ozetResponse = await fetch('/api/dashboard-ozet');
      const ozetData = ozetResponse.ok ? await ozetResponse.json() : null;

      // Çek istatistiklerini hesapla
      const bekleyenCekler = cekData.filter((c: any) => c.durum === 'beklemede');
      const tahsilEdilenCekler = cekData.filter((c: any) => c.durum === 'tahsil_edildi');
      const iadeEdilenCekler = cekData.filter((c: any) => c.durum === 'iade_edildi');

      // En yüksek ciroyu bul
      let enYuksekCiro = null;
      if (bilancData?.sirketler?.sirketBazindaVeriler) {
        const sirketler = bilancData.sirketler.sirketBazindaVeriler;
        enYuksekCiro = sirketler.reduce((max: any, sirket: any) => 
          sirket.gelir > (max?.ciro || 0) ? { sirket_adi: sirket.sirket_adi, ciro: sirket.gelir } : max, null
        );
      }

      setDashboardData({
        toplamCiro: ciroData.toplamCiro || 0,
        seferSayisi: ciroData.seferSayisi || 0,
        cekler: {
          bekleyen: bekleyenCekler.length,
          tahsilEdilen: tahsilEdilenCekler.length,
          iadeEdilen: iadeEdilenCekler.length,
          bekleyenTutar: bekleyenCekler.reduce((sum: number, c: any) => sum + c.tutar, 0),
          tahsilEdilenTutar: tahsilEdilenCekler.reduce((sum: number, c: any) => sum + c.tutar, 0),
          iadeEdilenTutar: iadeEdilenCekler.reduce((sum: number, c: any) => sum + c.tutar, 0)
        },
        sirketler: {
          toplamSirketSayisi: bilancData?.sirketler?.toplamSirketSayisi || 0,
          enYuksekCiro
        }
      });

      // Dashboard özet verilerini set et
      if (ozetData) {
        setDashboardOzet(ozetData);
      }
    } catch (error) {
      console.error('Dashboard verileri yüklenirken hata:', error);
    } finally {
      setYukleniyor(false);
    }
  };

  useEffect(() => {
    dashboardVerileriniYukle();
  }, []);

  const formatTutar = (tutar: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(tutar);
  };

  const formatSayi = (sayi: number) => {
    return new Intl.NumberFormat('tr-TR').format(sayi);
  };
  
  // Kullanıcı giriş yapmamışsa hiçbir şey gösterme
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        {yukleniyor ? (
          <div className="text-center py-12">
            <div className="text-gray-600">Dashboard verileri yükleniyor...</div>
          </div>
        ) : dashboardData ? (
          <>
            {/* Ana İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Toplam Ciro */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Toplam Ciro</h3>
                <div className="text-3xl font-bold text-blue-900">
                  {formatTutar(dashboardData.toplamCiro)}
                </div>
                <div className="text-sm text-blue-700 mt-2">
                  {formatSayi(dashboardData.seferSayisi)} sefer
                </div>
              </div>

              {/* Bekleyen Çekler */}
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Bekleyen Çekler</h3>
                <div className="text-3xl font-bold text-yellow-900">
                  {dashboardData.cekler.bekleyen}
                </div>
                <div className="text-sm text-yellow-700 mt-2">
                  {formatTutar(dashboardData.cekler.bekleyenTutar)}
                </div>
              </div>
              
              {/* Tahsil Edilen */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Tahsil Edilen</h3>
                <div className="text-3xl font-bold text-green-900">
                  {dashboardData.cekler.tahsilEdilen}
                </div>
                <div className="text-sm text-green-700 mt-2">
                  {formatTutar(dashboardData.cekler.tahsilEdilenTutar)}
                </div>
              </div>
              
              {/* Toplam Şirket */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Aktif Şirketler</h3>
                <div className="text-3xl font-bold text-purple-900">
                  {dashboardData.sirketler.toplamSirketSayisi}
                </div>
                <div className="text-sm text-purple-700 mt-2">
                  Şirket
                </div>
              </div>
            </div>

            {/* Şirket Kar Performansı */}
            {dashboardOzet && dashboardOzet.oncekiAy.sirketKarlari.length > 0 && (
              <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">
                    {dashboardOzet.oncekiAy.ayAdi} {dashboardOzet.oncekiAy.yil} - Şirket Kar Performansı
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dashboardOzet.oncekiAy.sirketKarlari.map((sirket: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{sirket.sirket_adi}</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Gelir (KDV Hariç):</span>
                            <span className="font-medium text-green-600">{formatTutar(sirket.gelir)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">KDV (%20):</span>
                            <span className="font-medium text-blue-600">{formatTutar(sirket.kdv || 0)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Ham Gider:</span>
                            <span className="font-medium text-red-600">{formatTutar(sirket.gider)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Şöför KDV (%20):</span>
                            <span className="font-medium text-pink-600">{formatTutar(sirket.soforKdv || 0)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Tevkifat (%4):</span>
                            <span className="font-medium text-orange-600">{formatTutar(sirket.tevkifat || 0)}</span>
                          </div>
                          <div className="border-t border-gray-300 pt-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-semibold text-gray-700">Net Kar:</span>
                              <span className={`font-bold ${sirket.kar >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                {formatTutar(sirket.kar)}
                              </span>
                            </div>
                          </div>
                          {sirket.gelir > 0 && (
                            <div className="text-xs text-gray-500 text-center">
                              Kar Marjı: %{((sirket.kar / sirket.gelir) * 100).toFixed(1)}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Toplam Özet */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-blue-800">Toplam Kar</h4>
                          <p className="text-sm text-blue-600">{formatSayi(dashboardOzet.oncekiAy.seferSayisi)} sefer</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-900">
                            {formatTutar(dashboardOzet.oncekiAy.toplamKar)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Araç Kar Performansı */}
            {dashboardOzet && dashboardOzet.oncekiAy.aracKarlari.length > 0 && (
              <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                   <h3 className="text-xl font-semibold mb-6 text-gray-900">
                     {dashboardOzet.oncekiAy.ayAdi} {dashboardOzet.oncekiAy.yil} - Araç Kar Performansı
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                     {dashboardOzet.oncekiAy.aracKarlari.map((arac: any, index: number) => (
                       <div key={arac.arac_id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                         <div className="mb-2">
                           <h4 className="font-semibold text-gray-900 text-sm">{arac.sofor_adi}</h4>
                           <p className="text-xs text-gray-600">{arac.plaka}</p>
                         </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Gelir:</span>
                            <span className="font-medium text-green-600">{formatTutar(arac.gelir)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Gider:</span>
                            <span className="font-medium text-red-600">{formatTutar(arac.gider)}</span>
                          </div>
                          <div className="border-t border-gray-300 pt-2">
                <div className="flex justify-between">
                              <span className="text-sm font-semibold text-gray-700">Net Kar:</span>
                              <span className={`font-bold ${arac.kar >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                {formatTutar(arac.kar)}
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 text-center">
                            {formatSayi(arac.seferSayisi)} sefer
                            {arac.gelir > 0 && (
                              <span> • Kar Marjı: %{((arac.kar / arac.gelir) * 100).toFixed(1)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Araç Toplam Özet */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-green-800">Araçların Toplam Karı</h4>
                          <p className="text-sm text-green-600">
                            {formatSayi(dashboardOzet.oncekiAy.aracKarlari.reduce((toplam: number, arac: any) => toplam + arac.seferSayisi, 0))} sefer
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-900">
                            {formatTutar(dashboardOzet.oncekiAy.aracKarlari.reduce((toplam: number, arac: any) => toplam + arac.kar, 0))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Detaylı Bilgiler */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Çek Durumu Özeti */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Çek Durumu Özeti</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-yellow-800">Bekleyen Çekler</div>
                      <div className="text-sm text-yellow-600">{dashboardData.cekler.bekleyen} adet</div>
                    </div>
                    <div className="text-xl font-bold text-yellow-900">
                      {formatTutar(dashboardData.cekler.bekleyenTutar)}
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-green-800">Tahsil Edilen</div>
                      <div className="text-sm text-green-600">{dashboardData.cekler.tahsilEdilen} adet</div>
                    </div>
                    <div className="text-xl font-bold text-green-900">
                      {formatTutar(dashboardData.cekler.tahsilEdilenTutar)}
                    </div>
                  </div>
                  
                  {dashboardData.cekler.iadeEdilen > 0 && (
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-red-800">İade Edilen</div>
                        <div className="text-sm text-red-600">{dashboardData.cekler.iadeEdilen} adet</div>
                      </div>
                      <div className="text-xl font-bold text-red-900">
                        {formatTutar(dashboardData.cekler.iadeEdilenTutar)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Vadesi Yaklaşan Çekler */}
              {dashboardOzet && (dashboardOzet.vadesiYaklasanCekler.besGunIcinde.length > 0 || dashboardOzet.vadesiYaklasanCekler.vadesiGecen.length > 0) && (
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vadesi Yaklaşan Çekler</h3>
                    <div className="text-sm text-gray-600">
                      {dashboardOzet.uyarilar.vadesiGecenSayisi > 0 && (
                        <span className="text-red-600 font-semibold">{dashboardOzet.uyarilar.vadesiGecenSayisi} çekin vadesi geçmiş</span>
                      )}
                      {dashboardOzet.uyarilar.vadesiGecenSayisi > 0 && dashboardOzet.uyarilar.vadesiYaklasanSayisi > 0 && (
                        <span className="text-gray-500">, </span>
                      )}
                      {dashboardOzet.uyarilar.vadesiYaklasanSayisi > 0 && (
                        <span className="text-yellow-600 font-semibold">{dashboardOzet.uyarilar.vadesiYaklasanSayisi} çekin vadesi 5 gün içinde dolacak</span>
                      )}
                      <span className="text-gray-500"> • Toplam: </span>
                      <span className="font-semibold text-gray-900">{formatTutar(dashboardOzet.uyarilar.toplamUyariTutari)}</span>
                    </div>
                  </div>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {/* Vadesi geçen çekler */}
                    {dashboardOzet.vadesiYaklasanCekler.vadesiGecen.map((cek: any) => (
                      <div key={cek.id} className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <div>
                          <div className="font-semibold text-red-800">Çek No: {cek.cek_no}</div>
                          <div className="text-sm text-red-600">
                            {cek.gecenGun} gün önce vadesi geçti
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-red-900">{formatTutar(cek.tutar)}</div>
                          <div className="text-xs text-red-600">
                            {new Date(cek.odenme_tarihi).toLocaleDateString('tr-TR')}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Vadesi yaklaşan çekler */}
                    {dashboardOzet.vadesiYaklasanCekler.besGunIcinde.map((cek: any) => (
                      <div key={cek.id} className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div>
                          <div className="font-semibold text-yellow-800">Çek No: {cek.cek_no}</div>
                          <div className="text-sm text-yellow-600">
                            {cek.kalanGun <= 0 ? 'Bugün vadesi doluyor' : `${cek.kalanGun} gün kaldı`}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-yellow-900">{formatTutar(cek.tutar)}</div>
                          <div className="text-xs text-yellow-600">
                            {new Date(cek.odenme_tarihi).toLocaleDateString('tr-TR')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hızlı Erişim */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Hızlı Erişim</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/veri-yukle" className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-center">
                    <div className="text-blue-800 font-semibold">Veri Yükle</div>
                    <div className="text-sm text-blue-600 mt-1">Excel dosyası yükle</div>
                  </Link>

                  <Link href="/cek-yonetimi" className="p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors text-center">
                    <div className="text-green-800 font-semibold">Çek Yönetimi</div>
                    <div className="text-sm text-green-600 mt-1">Çekleri yönet</div>
                  </Link>

                  <Link href="/sirket-bilanco" className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors text-center">
                    <div className="text-purple-800 font-semibold">Şirket Bilanço</div>
                    <div className="text-sm text-purple-600 mt-1">Finansal rapor</div>
                  </Link>

                  <Link href="/veritabani-yonetimi" className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors text-center">
                    <div className="text-orange-800 font-semibold">Veritabanı</div>
                    <div className="text-sm text-orange-600 mt-1">Veri yönetimi</div>
                  </Link>
                </div>

                {/* En Yüksek Ciro */}
                {dashboardData.sirketler.enYuksekCiro && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">En Yüksek Ciro</div>
                    <div className="font-semibold text-gray-900">
                      {dashboardData.sirketler.enYuksekCiro.sirket_adi}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {formatTutar(dashboardData.sirketler.enYuksekCiro.ciro)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-600">Dashboard verileri yüklenemedi</div>
          </div>
        )}
      </div>
    </Layout>
  );
}
