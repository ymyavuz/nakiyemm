import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function GET() {
  try {
    // Veritabanı migrasyonunu başlat
    const { stdout, stderr } = await execPromise('npx prisma migrate dev --name initial-migration');
    
    if (stderr && !stderr.includes('Everything is now in sync')) {
      console.error('Migrasyon hatası:', stderr);
      return NextResponse.json({ 
        basarili: false, 
        mesaj: 'Veritabanı migrasyonu sırasında bir hata oluştu', 
        hata: stderr 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      basarili: true, 
      mesaj: 'Veritabanı migrasyonu başarıyla tamamlandı', 
      detaylar: stdout 
    });
  } catch (error) {
    console.error('Migrasyon işlemi hatası:', error);
    return NextResponse.json({ 
      basarili: false, 
      mesaj: 'Veritabanı migrasyonu sırasında bir hata oluştu', 
      hata: JSON.stringify(error) 
    }, { status: 500 });
  }
} 