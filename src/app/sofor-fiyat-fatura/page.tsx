'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';
import DonemSecimi from '../sirket-fiyat-fatura/components/DonemSecimi';
import SirketSecimi from './components/SirketSecimi';
import SeferlerTablosu from './components/SeferlerTablosu';

export default function SoforFiyatFatura() {
  const { theme } = useTheme();
  const [secilenAy, setSecilenAy] = useState<number | null>(null);
  const [secilenDonem, setSecilenDonem] = useState<number | null>(null);
  const [secilenSirket, setSecilenSirket] = useState<number | null>(null);
  const [yuklemeDurumu, setYuklemeDurumu] = useState<boolean>(false);
  const [seferler, setSeferler] = useState<any[]>([]);

  // Seferleri getir
  const seferleriGetir = async () => {
    if (!secilenAy || !secilenDonem) {
      alert('Lütfen ay ve dönem seçiniz');
      return;
    }
    
    setYuklemeDurumu(true);
    
    try {
      // Şirket seçildiyse URL'de belirtilecek, seçilmediyse tüm şirketler getirilecek
      let apiUrl = `/api/seferler/tumunu-listele?ay=${secilenAy}&donem=${secilenDonem}`;
      if (secilenSirket) {
        apiUrl += `&sirketId=${secilenSirket}`;
      }
      
      const response = await fetch(apiUrl);
      
      if (response.ok) {
        const data = await response.json();
        setSeferler(data);
      } else {
        alert('Seferler yüklenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Seferler yüklenirken hata:', error);
      alert('Seferler yüklenirken bir hata oluştu');
    } finally {
      setYuklemeDurumu(false);
    }
  };

  const fiyatGuncelle = async (seferId: number, yeniFiyat: number) => {
    try {
      const response = await fetch('/api/seferler/sofor-fiyat-guncelle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seferId,
          sofore_odenen_ucret: yeniFiyat
        }),
      });
      
      if (response.ok) {
        // Başarılı güncelleme sonrası seferleri yeniden yükle
        seferleriGetir();
      } else {
        alert('Fiyat güncellenirken bir hata oluştu');
      }
    } catch (error) {
      console.error('Fiyat güncellenirken hata:', error);
      alert('Fiyat güncellenirken bir hata oluştu');
    }
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sol kenar menüsü */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Şoför İçin Fiyat - Fatura</h1>
          
          <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-6 mb-8 border border-[var(--card-border)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <SirketSecimi 
                  secilenSirket={secilenSirket}
                  setSecilenSirket={setSecilenSirket}
                />
              </div>
              <div className="md:col-span-2">
                <DonemSecimi 
                  secilenAy={secilenAy} 
                  setSecilenAy={setSecilenAy}
                  secilenDonem={secilenDonem}
                  setSecilenDonem={setSecilenDonem}
                />
              </div>
              
              <div className="md:col-span-3">
                <button
                  onClick={seferleriGetir}
                  disabled={yuklemeDurumu}
                  className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {yuklemeDurumu ? 'Yükleniyor...' : 'Seferleri Getir'}
                </button>
              </div>
            </div>
          </div>
          
          {seferler.length > 0 ? (
            <SeferlerTablosu seferler={seferler} fiyatGuncelle={fiyatGuncelle} />
          ) : (
            <div className="bg-[var(--card-bg)] rounded-lg shadow-md p-6 border border-[var(--card-border)] text-center">
              <p className="text-gray-500">Seçilen kriterlere uygun sefer bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 