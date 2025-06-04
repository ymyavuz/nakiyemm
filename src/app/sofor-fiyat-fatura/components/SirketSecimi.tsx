import React, { useState, useEffect } from 'react';

interface Sirket {
  sirket_id: number;
  sirket_adi: string;
}

interface SirketSecimiProps {
  secilenSirket: number | null;
  setSecilenSirket: (sirket: number | null) => void;
}

const SirketSecimi: React.FC<SirketSecimiProps> = ({
  secilenSirket,
  setSecilenSirket
}) => {
  const [sirketler, setSirketler] = useState<Sirket[]>([]);
  const [yukleniyor, setYukleniyor] = useState(true);

  useEffect(() => {
    const sirketleriGetir = async () => {
      try {
        setYukleniyor(true);
        const response = await fetch('/api/sirketler');
        
        if (response.ok) {
          const data = await response.json();
          setSirketler(data);
        } else {
          console.error('Şirketler yüklenirken hata oluştu');
        }
      } catch (error) {
        console.error('Şirketler yüklenirken hata:', error);
      } finally {
        setYukleniyor(false);
      }
    };

    sirketleriGetir();
  }, []);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium">Şirket Seçiniz</label>
      <select
        className="w-full p-2 border rounded-md"
        value={secilenSirket || ''}
        onChange={(e) => setSecilenSirket(Number(e.target.value) || null)}
        disabled={yukleniyor}
      >
        <option value="">Tüm Şirketler</option>
        {sirketler.map((sirket) => (
          <option key={sirket.sirket_id} value={sirket.sirket_id}>
            {sirket.sirket_adi}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SirketSecimi; 