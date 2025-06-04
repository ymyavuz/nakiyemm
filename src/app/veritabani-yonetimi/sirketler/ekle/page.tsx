'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function YeniSirketEkle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    sirket_adi: '',
    vergi_numarasi: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log('Form gönderiliyor:', formData);
      
      const response = await fetch('/api/sirketler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API cevabı:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Şirket eklenirken bir hata oluştu');
      }

      setSuccess(true);
      setFormData({
        sirket_adi: '',
        vergi_numarasi: ''
      });
      
      // 2 saniye sonra şirketler listesine yönlendir
      setTimeout(() => {
        router.push('/veritabani-yonetimi/sirketler');
      }, 2000);
      
    } catch (err: any) {
      console.error('Şirket ekleme hatası:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Yeni Şirket Ekle</h1>
          <Link href="/veritabani-yonetimi" className="p-2 border rounded-md hover:bg-gray-100">
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
            <span className="block sm:inline">Şirket başarıyla eklendi! Yönlendiriliyorsunuz...</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sirket_adi">
              Şirket Adı
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sirket_adi"
              name="sirket_adi"
              type="text"
              placeholder="Şirket adını giriniz"
              value={formData.sirket_adi}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vergi_numarasi">
              Vergi Numarası
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vergi_numarasi"
              name="vergi_numarasi"
              type="text"
              placeholder="Vergi numarasını giriniz"
              value={formData.vergi_numarasi}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 