'use client';

import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

export default function VeritabaniYonetimi() {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Veritabanı Yönetimi</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl mx-auto">
            {/* Şirket Yönetimi Bölümü */}
            <div className="border border-[var(--nav-border)] rounded-lg p-6 shadow-md bg-[var(--nav-bg)]">
              <h2 className="text-2xl font-semibold mb-4">Şirket Yönetimi</h2>
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/veritabani-yonetimi/sirketler" 
                  className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                >
                  Şirketleri Listele
                </Link>
                <Link 
                  href="/veritabani-yonetimi/sirketler/ekle" 
                  className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                >
                  Yeni Şirket Ekle
                </Link>
              </div>
            </div>

            {/* Araç Yönetimi Bölümü */}
            <div className="border border-[var(--nav-border)] rounded-lg p-6 shadow-md bg-[var(--nav-bg)]">
              <h2 className="text-2xl font-semibold mb-4">Araç Yönetimi</h2>
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/veritabani-yonetimi/araclar" 
                  className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                >
                  Araçları Listele
                </Link>
                <Link 
                  href="/veritabani-yonetimi/araclar/ekle" 
                  className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                >
                  Yeni Araç Ekle
                </Link>
              </div>
            </div>
            
            {/* Fiyat Listesi Yönetimi Bölümü */}
            <div className="border border-[var(--nav-border)] rounded-lg p-6 shadow-md bg-[var(--nav-bg)]">
              <h2 className="text-2xl font-semibold mb-4">Fiyat Listesi Yönetimi</h2>
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/veritabani-yonetimi/fiyat-listesi" 
                  className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
                >
                  Fiyat Listelerini Listele
                </Link>
                <Link 
                  href="/veritabani-yonetimi/fiyat-listesi/ekle" 
                  className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 text-center"
                >
                  Yeni Fiyat Listesi Ekle
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
} 