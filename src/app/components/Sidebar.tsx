'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const menuItems = [
    {
      href: '/',
      label: 'Dashboard',
      isActive: pathname === '/'
    },
    {
      href: '/veri-yukle',
      label: 'Veri Yükle',
      isActive: pathname === '/veri-yukle'
    },
    {
      href: '/sirket-fiyat-fatura',
      label: 'Şirket İçin Fiyat - Fatura',
      isActive: pathname === '/sirket-fiyat-fatura'
    },
    {
      href: '/sofor-fiyat-fatura',
      label: 'Şöför İçin Fiyat - Fatura',
      isActive: pathname === '/sofor-fiyat-fatura'
    },
    {
      href: '/sirket-bilanco',
      label: 'Şirket Bilanço',
      isActive: pathname === '/sirket-bilanco'
    },
    {
      href: '/sofor-bilanco',
      label: 'Şöför Bilanço',
      isActive: pathname === '/sofor-bilanco'
    },
    {
      href: '/cek-yonetimi',
      label: 'Çek Yönetimi',
      isActive: pathname === '/cek-yonetimi'
    },
    {
      href: '/veritabani-yonetimi',
      label: 'Veritabanı Yönetimi',
      isActive: pathname === '/veritabani-yonetimi'
    },
    {
      href: '/eski-veri-yukle',
      label: 'Eski Veri Yükle',
      isActive: pathname === '/eski-veri-yukle'
    },
    {
      href: '/fatura-excel',
      label: 'Fatura Excel',
      isActive: pathname === '/fatura-excel'
    }
  ];

  return (
    <div className="w-64 min-w-64 flex-shrink-0 bg-white shadow-lg">
      <div className="p-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block w-full p-3 text-center rounded-lg font-medium transition-colors ${
                item.isActive
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              } ${
                // Grup ayırıcıları için boşluk ekle
                (index === 1 || index === 4 || index === 7) ? 'mt-6' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="block w-full p-3 mt-8 text-center rounded-lg font-medium transition-colors border border-red-200 text-red-600 hover:bg-red-50 flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 