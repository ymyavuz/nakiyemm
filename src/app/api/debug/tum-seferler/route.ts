import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const soforAdi = searchParams.get('sofor') || 'Tahsin'; // Varsayılan olarak Tahsin
    const arac_id = searchParams.get('arac_id') ? parseInt(searchParams.get('arac_id') || '0') : 0;
    
    // Şoförü ve/veya araç ID'yi bul
    let aramaKosulu: any = {};
    
    // Eğer araç ID belirtilmişse onu kullan
    if (arac_id > 0) {
      aramaKosulu.arac_id = arac_id;
    } 
    // Değilse şoför adına göre arama yap
    else {
      const arac = await prisma.araclar.findFirst({
        where: {
          sofor_adi: {
            contains: soforAdi
          }
        }
      });
      
      if (!arac) {
        return NextResponse.json({ error: `${soforAdi} isimli şoför bulunamadı` }, { status: 404 });
      }
      
      aramaKosulu.arac_id = arac.arac_id;
    }

    // Tarih filtresi olmadan tüm seferleri getir
    const seferler = await prisma.seferler.findMany({
      where: aramaKosulu,
      include: {
        sirket: true
      },
      orderBy: {
        irsaliye_tarihi: 'asc'
      }
    });

    // Seferlerin detayları
    const seferDetaylari = seferler.map(sefer => ({
      sefer_id: sefer.sefer_id,
      arac_id: sefer.arac_id,
      irsaliye_numarasi: sefer.irsaliye_numarasi,
      irsaliye_tarihi: sefer.irsaliye_tarihi,
      tahliye_yeri: sefer.tahliye_yeri,
      mt: sefer.mt,
      sirket_id: sefer.sirket_id,
      sirket_adi: sefer.sirket?.sirket_adi || 'Bilinmeyen',
      sirketten_alinan_ucret: sefer.sirketten_alinan_ucret,
      sofore_odenen_ucret: sefer.sofore_odenen_ucret,
      ay: sefer.ay,
      donem: sefer.donem
    }));

    return NextResponse.json({
      sofor: soforAdi,
      arac_id: aramaKosulu.arac_id,
      seferSayisi: seferler.length,
      seferler: seferDetaylari
    });

  } catch (error: any) {
    console.error('Debug endpoint hatası:', error);
    return NextResponse.json(
      { error: 'Seferler alınırken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 