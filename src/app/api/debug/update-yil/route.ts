import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Tüm seferleri al
    const seferler = await prisma.seferler.findMany({
      where: {
        yil: null // yil alanı null olan seferleri al
      }
    });

    const guncellenenSeferler = [];

    // Her sefer için yıl değerini güncelle
    for (const sefer of seferler) {
      let yil = new Date().getFullYear(); // Varsayılan olarak mevcut yıl
      
      // Eğer irsaliye tarihi varsa, o tarihten yılı al
      if (sefer.irsaliye_tarihi) {
        yil = new Date(sefer.irsaliye_tarihi).getFullYear();
      }

      // Sefer kaydını güncelle
      const guncellenen = await prisma.seferler.update({
        where: { sefer_id: sefer.sefer_id },
        data: {
          yil: yil
        }
      });

      guncellenenSeferler.push({
        sefer_id: guncellenen.sefer_id,
        irsaliye_tarihi: guncellenen.irsaliye_tarihi,
        yil: guncellenen.yil
      });
    }

    return NextResponse.json({
      basarili: true,
      mesaj: `${guncellenenSeferler.length} sefer güncellendi.`,
      guncellenenSeferler: guncellenenSeferler
    });

  } catch (error: any) {
    console.error('Yıl güncelleme hatası:', error);
    return NextResponse.json(
      { error: 'Seferler güncellenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 