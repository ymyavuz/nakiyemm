'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

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

export default function AracDuzenle() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [arac, setArac] = useState<Arac | null>(null);
  const [plaka, setPlaka] = useState('');
  const [soforAdi, setSoforAdi] = useState('');
  const [vergiNumarasi, setVergiNumarasi] = useState('');
  const [sirketId, setSirketId] = useState<number | ''>('');
  const [sirketler, setSirketler] = useState<Sirket[]>([]);
  const [loading, setLoading] = useState(true);
  const [sirketlerLoading, setSirketlerLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchArac(parseInt(id));
      fetchSirketler();
    }
  }, [id]);

  const fetchArac = async (aracId: number) => {
    try {
      const response = await fetch(`/api/araclar/${aracId}`);
      
      if (!response.ok) {
        throw new Error('Araç bilgileri alınırken bir hata oluştu');
      }
      
      const data = await response.json();
      setArac(data);
      setPlaka(data.plaka);
      setSoforAdi(data.sofor_adi);
      setVergiNumarasi(data.vergi_numarasi);
      setSirketId(data.sirket_id);
    } catch (err: any) {
      setError(err.message);
      console.error('Araç getirme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSirketler = async () => {
    try {
      setSirketlerLoading(true);
      const response = await fetch('/api/sirketler');
      
      if (!response.ok) {
        throw new Error('Şirketler yüklenirken bir hata oluştu');
      }
      
      const data = await response.json();
      setSirketler(data);
    } catch (err: any) {
      setError('Şirketler yüklenirken bir hata oluştu: ' + err.message);
      console.error('Şirketleri getirme hatası:', err);
    } finally {
      setSirketlerLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!plaka.trim()) {
      setError('Plaka boş olamaz');
      return;
    }

    if (!soforAdi.trim()) {
      setError('Şoför adı boş olamaz');
      return;
    }

    if (!vergiNumarasi.trim()) {
      setError('Vergi numarası boş olamaz');
      return;
    }

    if (!sirketId) {
      setError('Lütfen bir şirket seçin');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/araclar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plaka,
          sofor_adi: soforAdi,
          vergi_numarasi: vergiNumarasi,
          sirket_id: sirketId
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Araç güncellenirken bir hata oluştu');
      }

      setSuccess('Araç başarıyla güncellendi');
      
      // 1 saniye sonra araçlar listesine dön
      setTimeout(() => {
        router.push('/veritabani-yonetimi/araclar');
      }, 1000);
      
    } catch (err: any) {
      setError(err.message);
      console.error('Araç güncelleme hatası:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12">
        <div className="w-full max-w-md">
          <p className="text-center">Araç bilgileri yükleniyor...</p>
        </div>
      </main>
    );
  }

  if (!arac && !loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12">
        <div className="w-full max-w-md">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">Araç bulunamadı</span>
          </div>
          <div className="text-center mt-4">
            <Link href="/veritabani-yonetimi/araclar" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Araçlar Listesine Dön
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Araç Düzenle</h1>
          <Link href="/veritabani-yonetimi/araclar" className="p-2 border rounded-md hover:bg-gray-100">
            Geri Dön
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="plaka">
              Plaka
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="plaka"
              type="text"
              placeholder="Plaka"
              value={plaka}
              onChange={(e) => setPlaka(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soforAdi">
              Şoför Adı
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="soforAdi"
              type="text"
              placeholder="Şoför Adı"
              value={soforAdi}
              onChange={(e) => setSoforAdi(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vergiNumarasi">
              Vergi Numarası
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vergiNumarasi"
              type="text"
              placeholder="Vergi Numarası"
              value={vergiNumarasi}
              onChange={(e) => setVergiNumarasi(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sirketId">
              Şirket
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sirketId"
              value={sirketId}
              onChange={(e) => setSirketId(e.target.value ? parseInt(e.target.value) : '')}
              required
            >
              <option value="">Şirket Seçin</option>
              {sirketler.map((sirket) => (
                <option key={sirket.sirket_id} value={sirket.sirket_id}>
                  {sirket.sirket_adi}
                </option>
              ))}
            </select>
            {sirketlerLoading && <p className="text-xs italic text-gray-500 mt-1">Şirketler yükleniyor...</p>}
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 