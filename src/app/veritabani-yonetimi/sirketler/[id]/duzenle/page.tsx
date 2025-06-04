'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface Sirket {
  sirket_id: number;
  sirket_adi: string;
  vergi_numarasi: string;
}

export default function SirketDuzenle() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [sirket, setSirket] = useState<Sirket | null>(null);
  const [sirketAdi, setSirketAdi] = useState('');
  const [vergiNumarasi, setVergiNumarasi] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchSirket(parseInt(id));
    }
  }, [id]);

  const fetchSirket = async (sirketId: number) => {
    try {
      const response = await fetch(`/api/sirketler/${sirketId}`);
      
      if (!response.ok) {
        throw new Error('Şirket bilgileri alınırken bir hata oluştu');
      }
      
      const data = await response.json();
      setSirket(data);
      setSirketAdi(data.sirket_adi);
      setVergiNumarasi(data.vergi_numarasi);
    } catch (err: any) {
      setError(err.message);
      console.error('Şirket getirme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sirketAdi.trim()) {
      setError('Şirket adı boş olamaz');
      return;
    }

    if (!vergiNumarasi.trim()) {
      setError('Vergi numarası boş olamaz');
      return;
    }

    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/sirketler/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sirket_adi: sirketAdi,
          vergi_numarasi: vergiNumarasi,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Şirket güncellenirken bir hata oluştu');
      }

      setSuccess('Şirket başarıyla güncellendi');
      
      // 1 saniye sonra şirketler listesine dön
      setTimeout(() => {
        router.push('/veritabani-yonetimi/sirketler');
      }, 1000);
      
    } catch (err: any) {
      setError(err.message);
      console.error('Şirket güncelleme hatası:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12">
        <div className="w-full max-w-md">
          <p className="text-center">Şirket bilgileri yükleniyor...</p>
        </div>
      </main>
    );
  }

  if (!sirket && !loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-12">
        <div className="w-full max-w-md">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">Şirket bulunamadı</span>
          </div>
          <div className="text-center mt-4">
            <Link href="/veritabani-yonetimi/sirketler" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Şirketler Listesine Dön
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
          <h1 className="text-2xl font-bold">Şirket Düzenle</h1>
          <Link href="/veritabani-yonetimi/sirketler" className="p-2 border rounded-md hover:bg-gray-100">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sirketAdi">
              Şirket Adı
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sirketAdi"
              type="text"
              placeholder="Şirket Adı"
              value={sirketAdi}
              onChange={(e) => setSirketAdi(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
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