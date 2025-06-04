'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Sirket = {
  sirket_id: number;
  sirket_adi: string;
};

type FiyatListesi = {
  fiyat_listesi_id: number;
  sirket_id: number;
  tahliye_yeri: string;
  km: number | null;
  arac_tipi: string;
  ucret: number;
  sofor_ucreti: number | null;
  sirket: {
    sirket_adi: string;
  };
};

export default function FiyatListesi() {
  const [sirketler, setSirketler] = useState<Sirket[]>([]);
  const [seciliSirket, setSeciliSirket] = useState<number | null>(null);
  const [fiyatListesi, setFiyatListesi] = useState<FiyatListesi[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [duzenlemeModu, setDuzenlemeModu] = useState(false);
  const [degisiklikler, setDegisiklikler] = useState<any[]>([]);
  const [kaydediliyor, setKaydediliyor] = useState(false);

  // Şirketleri getir
  useEffect(() => {
    const fetchSirketler = async () => {
      try {
        const response = await fetch('/api/sirketler');
        if (!response.ok) {
          throw new Error('Şirketler yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setSirketler(data);
      } catch (error) {
        console.error('Şirketler yüklenirken hata:', error);
        setHata('Şirketler yüklenirken bir hata oluştu');
      }
    };

    fetchSirketler();
  }, []);

  // Fiyat listelerini getir
  useEffect(() => {
    const fetchFiyatListesi = async () => {
      setYukleniyor(true);
      setHata(null);

      try {
        // Birleştirilmiş API'ye istek yap
        let url = `/api/fiyat-listesi`;
        if (seciliSirket) {
          url += `?sirket_id=${seciliSirket}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Fiyat listesi yüklenirken bir hata oluştu');
        }

        const data = await response.json();
        setFiyatListesi(data);
      } catch (error) {
        console.error('Fiyat listesi yüklenirken hata:', error);
        setHata('Fiyat listesi yüklenirken bir hata oluştu');
      } finally {
        setYukleniyor(false);
      }
    };

    fetchFiyatListesi();
  }, [seciliSirket]);

  // Fiyat değişikliği işleyicisi
  const handleFiyatDegisikligi = (
    fiyatListeId: number | undefined, 
    alan: string, 
    deger: number | null,
    sirketId?: number,
    tahliyeYeri?: string,
    aracTipi?: string
  ) => {
    // Eğer fiyat_listesi_id yoksa, yeni kayıt için geçici bir ID oluştur
    const kayitId = fiyatListeId || `new|||${sirketId}|||${tahliyeYeri}|||${aracTipi}`;
    
    // Mevcut değişiklik varsa güncelle, yoksa ekle
    const mevcutIndex = degisiklikler.findIndex(
      (d) => d.fiyat_listesi_id === kayitId || d.id === kayitId
    );
    
    if (mevcutIndex >= 0) {
      const yeniDegisiklikler = [...degisiklikler];
      yeniDegisiklikler[mevcutIndex] = {
        ...yeniDegisiklikler[mevcutIndex],
        [alan]: deger
      };
      setDegisiklikler(yeniDegisiklikler);
    } else {
      const yeniDegisiklik: any = {
        [alan]: deger
      };
      
      if (fiyatListeId) {
        yeniDegisiklik.fiyat_listesi_id = fiyatListeId;
      } else {
        // Yeni kayıt için gerekli bilgileri ekle
        yeniDegisiklik.id = kayitId;
        yeniDegisiklik.sirket_id = sirketId;
        yeniDegisiklik.tahliye_yeri = tahliyeYeri;
        yeniDegisiklik.arac_tipi = aracTipi;
        yeniDegisiklik.isNew = true;
      }
      
      setDegisiklikler([...degisiklikler, yeniDegisiklik]);
    }
  };

  // Değişiklikleri kaydet
  const degisiklikleriKaydet = async () => {
    setKaydediliyor(true);
    setHata(null);
    
    console.log('Kaydedilecek değişiklikler:', degisiklikler);
    
    try {
      // Her bir değişiklik için API çağrısı yap
      const sonuclar = await Promise.all(
        degisiklikler.map(async (degisiklik) => {
          if (degisiklik.isNew) {
            // Yeni kayıt için validation
            if (!degisiklik.sirket_id || !degisiklik.tahliye_yeri || !degisiklik.arac_tipi) {
              console.error('Eksik veri:', {
                sirket_id: degisiklik.sirket_id,
                tahliye_yeri: degisiklik.tahliye_yeri,
                arac_tipi: degisiklik.arac_tipi
              });
              throw new Error('Yeni kayıt için gerekli veriler eksik');
            }
            
            // Yeni kayıt oluştur
            const postData = {
              sirket_id: degisiklik.sirket_id,
              tahliye_yeri: degisiklik.tahliye_yeri,
              arac_tipi: degisiklik.arac_tipi,
              ucret: degisiklik.ucret || 0,
              sofor_ucreti: degisiklik.sofor_ucreti || null,
              km: null
            };
            console.log('POST verisi gönderiliyor:', postData);
            
            const response = await fetch('/api/fiyat-listesi', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(postData),
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              console.error('POST API Hatası:', errorData);
              throw new Error(`Yeni kayıt oluşturulurken hata oluştu: ${errorData.error || response.statusText}`);
            }
            
            return await response.json();
          } else {
            // Mevcut kaydı güncelle
            const response = await fetch(`/api/fiyat-listesi/${degisiklik.fiyat_listesi_id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(degisiklik),
            });
            
            if (!response.ok) {
              throw new Error(`ID:${degisiklik.fiyat_listesi_id} güncellenirken hata oluştu`);
            }
            
            return await response.json();
          }
        })
      );
      
      // Değişiklik yapılınca listeyi yenile
      const yeniUrl = `/api/fiyat-listesi${seciliSirket ? `?sirket_id=${seciliSirket}` : ''}`;
      const response = await fetch(yeniUrl);
      if (!response.ok) {
        throw new Error('Güncel fiyat listesi yüklenirken bir hata oluştu');
      }
      const güncelListe = await response.json();
      setFiyatListesi(güncelListe);
      
      // Düzenleme modunu kapat ve değişiklikleri temizle
      setDuzenlemeModu(false);
      setDegisiklikler([]);
      
    } catch (error) {
      console.error('Değişiklikler kaydedilirken hata:', error);
      setHata('Değişiklikler kaydedilirken bir hata oluştu');
    } finally {
      setKaydediliyor(false);
    }
  };

  // Düzenleme modunu iptal et
  const duzenlemeyiIptalEt = () => {
    setDuzenlemeModu(false);
    setDegisiklikler([]);
  };

  // Fiyatları gruplandırarak görüntüle - şimdi hem şirket hem şoför fiyatlarını içeriyor
  const gruplandirFiyatlar = (fiyatlar: FiyatListesi[]) => {
    const gruplar: Record<
      string, 
      {
        sirket_tir: number | null;
        sirket_kirkayak: number | null;
        sofor_tir: number | null;
        sofor_kirkayak: number | null;
        km: number | null;
        fiyat_ids: {
          tir_id?: number;
          kirkayak_id?: number;
        };
      }
    > = {};

    fiyatlar.forEach((fiyat) => {
      const key = `${fiyat.sirket_id}|||${fiyat.tahliye_yeri}`; // ||| ayırıcı kullan
      
      if (!gruplar[key]) {
        gruplar[key] = {
          sirket_tir: null,
          sirket_kirkayak: null,
          sofor_tir: null,
          sofor_kirkayak: null,
          km: fiyat.km,
          fiyat_ids: {}
        };
      }

      if (fiyat.arac_tipi === 'Tır') {
        gruplar[key].sirket_tir = fiyat.ucret;
        gruplar[key].sofor_tir = fiyat.sofor_ucreti;
        gruplar[key].fiyat_ids.tir_id = fiyat.fiyat_listesi_id;
      } else if (fiyat.arac_tipi === 'Kırkayak') {
        gruplar[key].sirket_kirkayak = fiyat.ucret;
        gruplar[key].sofor_kirkayak = fiyat.sofor_ucreti;
        gruplar[key].fiyat_ids.kirkayak_id = fiyat.fiyat_listesi_id;
      }
    });

    return Object.entries(gruplar).map(([key, degerler]) => {
      const [sirketId, tahliyeYeri] = key.split('|||'); // ||| ayırıcı ile böl
      const sirket = sirketler.find((s) => s.sirket_id === parseInt(sirketId));

      return {
        sirket_id: parseInt(sirketId),
        sirket_adi: sirket?.sirket_adi || 'Bilinmeyen Şirket',
        tahliye_yeri: tahliyeYeri,
        km: degerler.km,
        sirket_tir_ucret: degerler.sirket_tir,
        sirket_kirkayak_ucret: degerler.sirket_kirkayak,
        sofor_tir_ucret: degerler.sofor_tir,
        sofor_kirkayak_ucret: degerler.sofor_kirkayak,
        fiyat_ids: degerler.fiyat_ids
      };
    });
  };

  // Değişikliklerdeki değeri al veya orijinal değeri döndür
  const getDeger = (fiyatId: number | undefined, alan: string, varsayilanDeger: number | null, sirketId?: number, tahliyeYeri?: string, aracTipi?: string) => {
    const kayitId = fiyatId || `new|||${sirketId}|||${tahliyeYeri}|||${aracTipi}`;
    
    const degisiklik = degisiklikler.find(d => d.fiyat_listesi_id === kayitId || d.id === kayitId);
    if (!degisiklik || degisiklik[alan] === undefined) return varsayilanDeger;
    
    return degisiklik[alan];
  };

  // Fiyat listesini gruplandır
  const grupluFiyatlar = gruplandirFiyatlar(fiyatListesi);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fiyat Listeleri</h1>

      {/* Filtreler */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div>
            <label className="block mb-2 font-medium">Şirket Filtresi</label>
            <select
              value={seciliSirket || ''}
              onChange={(e) => setSeciliSirket(e.target.value ? parseInt(e.target.value) : null)}
            className="max-w-md p-2 border rounded-md"
            disabled={duzenlemeModu}
            >
              <option value="">Tüm Şirketler</option>
              {sirketler.map((sirket) => (
                <option key={sirket.sirket_id} value={sirket.sirket_id}>
                  {sirket.sirket_adi}
                </option>
              ))}
            </select>
        </div>
      </div>

      {/* Hata Mesajı */}
      {hata && (
        <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">{hata}</div>
      )}

      {/* Yükleniyor Göstergesi */}
      {yukleniyor && (
        <div className="text-center py-8">
          <p className="text-gray-500">Fiyat listeleri yükleniyor...</p>
        </div>
      )}

      {/* Birleştirilmiş Fiyat Tablosu */}
      {!yukleniyor && grupluFiyatlar.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Fiyat Listesi</h2>
            <div>
              {!duzenlemeModu ? (
                <button
                  onClick={() => setDuzenlemeModu(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Düzenle
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={degisiklikleriKaydet}
                    disabled={kaydediliyor}
                    className={`px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 ${
                      kaydediliyor ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {kaydediliyor ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                  <button
                    onClick={duzenlemeyiIptalEt}
                    disabled={kaydediliyor}
                    className={`px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ${
                      kaydediliyor ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    İptal
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border text-left">Şirket</th>
                  <th className="py-2 px-4 border text-left">Varış Noktası</th>
                  <th className="py-2 px-4 border text-left">Km</th>
                  <th className="py-2 px-4 border text-left" colSpan={2}>
                    Şirket Fiyatları (₺)
                  </th>
                  <th className="py-2 px-4 border text-left" colSpan={2}>
                    Şoför Fiyatları (₺)
                  </th>
                </tr>
                <tr>
                  <th className="py-2 px-4 border text-left"></th>
                  <th className="py-2 px-4 border text-left"></th>
                  <th className="py-2 px-4 border text-left"></th>
                  <th className="py-2 px-4 border text-left">Tır</th>
                  <th className="py-2 px-4 border text-left">Kırkayak</th>
                  <th className="py-2 px-4 border text-left">Tır</th>
                  <th className="py-2 px-4 border text-left">Kırkayak</th>
                </tr>
              </thead>
              <tbody>
                {grupluFiyatlar.map((fiyat, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-2 px-4 border">{fiyat.sirket_adi}</td>
                    <td className="py-2 px-4 border">{fiyat.tahliye_yeri}</td>
                    <td className="py-2 px-4 border">{fiyat.km || '-'}</td>
                    
                    {/* Şirket Tır Ücreti */}
                    <td className="py-2 px-4 border">
                      {duzenlemeModu ? (
                        <input
                          type="number"
                          value={getDeger(fiyat.fiyat_ids.tir_id, 'ucret', fiyat.sirket_tir_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır') || ''}
                          onChange={(e) => 
                            handleFiyatDegisikligi(
                              fiyat.fiyat_ids.tir_id,
                              'ucret',
                              e.target.value ? Number(e.target.value) : null,
                              fiyat.sirket_id,
                              fiyat.tahliye_yeri,
                              'Tır'
                            )
                          }
                          className="w-24 p-1 border rounded"
                          placeholder="Tır fiyatı"
                        />
                      ) : (
                        fiyat.sirket_tir_ucret !== null ? `${fiyat.sirket_tir_ucret} ₺` : '-'
                      )}
                    </td>
                    
                    {/* Şirket Kırkayak Ücreti */}
                    <td className="py-2 px-4 border">
                      {duzenlemeModu ? (
                        <input
                          type="number"
                          value={getDeger(fiyat.fiyat_ids.kirkayak_id, 'ucret', fiyat.sirket_kirkayak_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak') || ''}
                          onChange={(e) => 
                            handleFiyatDegisikligi(
                              fiyat.fiyat_ids.kirkayak_id,
                              'ucret',
                              e.target.value ? Number(e.target.value) : null,
                              fiyat.sirket_id,
                              fiyat.tahliye_yeri,
                              'Kırkayak'
                            )
                          }
                          className="w-24 p-1 border rounded"
                          placeholder="Kırkayak fiyatı"
                        />
                      ) : (
                        fiyat.sirket_kirkayak_ucret !== null ? `${fiyat.sirket_kirkayak_ucret} ₺` : '-'
                      )}
                    </td>
                    
                    {/* Şoför Tır Ücreti */}
                    <td className="py-2 px-4 border">
                      {duzenlemeModu ? (
                        <input
                          type="number"
                          value={getDeger(fiyat.fiyat_ids.tir_id, 'sofor_ucreti', fiyat.sofor_tir_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Tır') || ''}
                          onChange={(e) => 
                            handleFiyatDegisikligi(
                              fiyat.fiyat_ids.tir_id,
                              'sofor_ucreti',
                              e.target.value ? Number(e.target.value) : null,
                              fiyat.sirket_id,
                              fiyat.tahliye_yeri,
                              'Tır'
                            )
                          }
                          className="w-24 p-1 border rounded"
                          placeholder="Şoför tır"
                        />
                      ) : (
                        fiyat.sofor_tir_ucret !== null ? `${fiyat.sofor_tir_ucret} ₺` : '-'
                      )}
                    </td>
                    
                    {/* Şoför Kırkayak Ücreti */}
                    <td className="py-2 px-4 border">
                      {duzenlemeModu ? (
                        <input
                          type="number"
                          value={getDeger(fiyat.fiyat_ids.kirkayak_id, 'sofor_ucreti', fiyat.sofor_kirkayak_ucret, fiyat.sirket_id, fiyat.tahliye_yeri, 'Kırkayak') || ''}
                          onChange={(e) => 
                            handleFiyatDegisikligi(
                              fiyat.fiyat_ids.kirkayak_id,
                              'sofor_ucreti',
                              e.target.value ? Number(e.target.value) : null,
                              fiyat.sirket_id,
                              fiyat.tahliye_yeri,
                              'Kırkayak'
                            )
                          }
                          className="w-24 p-1 border rounded"
                          placeholder="Şoför kırkayak"
                        />
                      ) : (
                        fiyat.sofor_kirkayak_ucret !== null ? `${fiyat.sofor_kirkayak_ucret} ₺` : '-'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {!yukleniyor && grupluFiyatlar.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-md mb-8">
          Seçilen kriterlere uygun fiyat listesi bulunamadı.
        </div>
      )}

      {/* Butonlar */}
      <div className="flex space-x-4">
        <Link
          href="/veritabani-yonetimi/fiyat-listesi/ekle"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Yeni Fiyat Listesi Ekle
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