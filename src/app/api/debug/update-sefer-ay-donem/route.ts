import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Önce tüm seferleri al
    const seferler = await prisma.seferler.findMany({
      where: {
        irsaliye_tarihi: {
          not: null
        }
      }
    });

    const guncellenenSeferler = [];

    // Her sefer için ay ve donem değerlerini güncelle
    for (const sefer of seferler) {
      if (!sefer.irsaliye_tarihi) continue;

      const tarih = new Date(sefer.irsaliye_tarihi);
      const ay = tarih.getMonth() + 1; // 0-indexed olduğu için +1
      
      // Günden dolayı dönem hesaplama (1-10: dönem 1, 11-20: dönem 2, 21-31: dönem 3)
      const gun = tarih.getDate();
      let donem = 1;
      if (gun > 10 && gun <= 20) {
        donem = 2;
      } else if (gun > 20) {
        donem = 3;
      }

      // Sefer kaydını güncelle
      const guncellenen = await prisma.seferler.update({
        where: { sefer_id: sefer.sefer_id },
        data: {
          ay: ay,
          donem: donem
        }
      });

      guncellenenSeferler.push({
        sefer_id: guncellenen.sefer_id,
        irsaliye_tarihi: guncellenen.irsaliye_tarihi,
        ay: guncellenen.ay,
        donem: guncellenen.donem
      });
    }

    return NextResponse.json({
      basarili: true,
      mesaj: `${guncellenenSeferler.length} sefer güncellendi.`,
      guncellenenSeferler: guncellenenSeferler
    });

  } catch (error: any) {
    console.error('Güncelleme hatası:', error);
    return NextResponse.json(
      { error: 'Seferler güncellenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 