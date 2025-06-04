'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Sirket {
  sirket_id: number;
  sirket_adi: string;
}

interface Arac {
  arac_id: number;
  plaka: string;
  sofor_adi: string;
  vergi_numarasi: string;
  sirket_id: number;
  sirket?: Sirket;
}

export default function AraclarListesi() {
  const router = useRouter();
  const [araclar, setAraclar] = useState<Arac[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [siliniyor, setSiliniyor] = useState<number | null>(null);

  useEffect(() => {
    fetchAraclar();
  }, []);

  const fetchAraclar = async () => {
    try {
      const response = await fetch('/api/araclar');
      
      if (!response.ok) {
        throw new Error('Araçlar yüklenirken bir hata oluştu');
      }
      
      const data = await response.json();
      setAraclar(data);
    } catch (err: any) {
      setError(err.message);
      console.error('Araçları getirme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSil = async (aracId: number) => {
    if (!confirm('Bu aracı silmek istediğinize emin misiniz?')) {
      return;
    }

    setSiliniyor(aracId);

    try {
      const response = await fetch(`/api/araclar/${aracId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Araç silinirken bir hata oluştu');
      }

      setAraclar(araclar.filter(arac => arac.arac_id !== aracId));
    } catch (err: any) {
      alert(`Hata: ${err.message}`);
      console.error('Araç silme hatası:', err);
    } finally {
      setSiliniyor(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Araçlar</h1>
          <div className="flex space-x-2">
            <Link href="/veritabani-yonetimi" className="p-2 border rounded-md hover:bg-gray-100">
              Geri Dön
            </Link>
            <Link href="/veritabani-yonetimi/araclar/ekle" className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Yeni Araç Ekle
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Araçlar yükleniyor...</p>
          </div>
        ) : araclar.length === 0 ? (
          <div className="text-center py-10 border rounded-lg">
            <p className="text-gray-500">Kayıtlı araç bulunamadı.</p>
            <Link href="/veritabani-yonetimi/araclar/ekle" className="mt-4 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Yeni Araç Ekle
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plaka
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Şoför Adı
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vergi Numarası
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Şirket
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {araclar.map((arac) => (
                  <tr key={arac.arac_id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {arac.arac_id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {arac.plaka}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {arac.sofor_adi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {arac.vergi_numarasi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {arac.sirket?.sirket_adi || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Link 
                          href={`/veritabani-yonetimi/araclar/${arac.arac_id}/duzenle`} 
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Düzenle
                        </Link>
                        <button 
                          onClick={() => handleSil(arac.arac_id)}
                          className="text-red-600 hover:text-red-900"
                          disabled={siliniyor === arac.arac_id}
                        >
                          {siliniyor === arac.arac_id ? 'Siliniyor...' : 'Sil'}
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
    </main>
  );
} 