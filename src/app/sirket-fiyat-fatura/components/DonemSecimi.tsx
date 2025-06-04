import React from 'react';

interface DonemSecimiProps {
  secilenAy: number | null;
  setSecilenAy: (ay: number | null) => void;
  secilenDonem: number | null;
  setSecilenDonem: (donem: number | null) => void;
}

const DonemSecimi: React.FC<DonemSecimiProps> = ({
  secilenAy,
  setSecilenAy,
  secilenDonem,
  setSecilenDonem
}) => {
  const aylar = [
    { deger: 1, ad: 'Ocak' },
    { deger: 2, ad: 'Şubat' },
    { deger: 3, ad: 'Mart' },
    { deger: 4, ad: 'Nisan' },
    { deger: 5, ad: 'Mayıs' },
    { deger: 6, ad: 'Haziran' },
    { deger: 7, ad: 'Temmuz' },
    { deger: 8, ad: 'Ağustos' },
    { deger: 9, ad: 'Eylül' },
    { deger: 10, ad: 'Ekim' },
    { deger: 11, ad: 'Kasım' },
    { deger: 12, ad: 'Aralık' }
  ];

  const donemler = [
    { deger: 1, ad: '1. Dönem (1-10)' },
    { deger: 2, ad: '2. Dönem (11-20)' },
    { deger: 3, ad: '3. Dönem (21-31)' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block mb-2 text-sm font-medium">Ay Seçiniz</label>
        <select
          className="w-full p-2 border rounded-md"
          value={secilenAy || ''}
          onChange={(e) => setSecilenAy(Number(e.target.value) || null)}
        >
          <option value="">Ay Seçiniz</option>
          {aylar.map((ay) => (
            <option key={ay.deger} value={ay.deger}>
              {ay.ad}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium">Dönem Seçiniz</label>
        <select
          className="w-full p-2 border rounded-md"
          value={secilenDonem || ''}
          onChange={(e) => setSecilenDonem(Number(e.target.value) || null)}
        >
          <option value="">Dönem Seçiniz</option>
          {donemler.map((donem) => (
            <option key={donem.deger} value={donem.deger}>
              {donem.ad}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DonemSecimi; 