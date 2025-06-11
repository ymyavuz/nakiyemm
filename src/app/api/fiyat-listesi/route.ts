import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


// GET isteği - Tüm fiyat listelerini getir
export async function GET(request: NextRequest) {
  try {
    const tip = request.nextUrl.searchParams.get('tip') || 'hepsi';
    const sirketId = request.nextUrl.searchParams.get('sirket_id');
    const aracTipi = request.nextUrl.searchParams.get('arac_tipi');
    
    // Yeni birleşik sorgumuz, şimdi sofor_ucreti alanını içeren güncellenmiş yapıyı kullanıyor
    let where: any = {};
    if (sirketId) {
      where.sirket_id = parseInt(sirketId);
    }
    
    // Araç tipine göre filtreleme
    if (aracTipi) {
      where.arac_tipi = aracTipi;
    }
    
    // Fiyat tipine göre filtreleme - sadece null olmayan değerleri getir
    if (tip === 'sirket') {
      where.ucret = { gt: 0 }; // 0'dan büyük değerler
    } else if (tip === 'sofor') {
      where.sofor_ucreti = { gt: 0 }; // 0'dan büyük değerler
    }
    
    console.log('Fiyat listesi sorgusu:', { sirketId, aracTipi, tip, where });
    
    // Fiyat listesini getir
    const fiyatListesi = await prisma.sirketFiyatListesi.findMany({
      where,
      include: {
        sirket: {
          select: {
            sirket_adi: true,
          },
        },
      },
      orderBy: {
        tahliye_yeri: 'asc',
      },
    });
    
    return NextResponse.json(fiyatListesi);
  } catch (error) {
    console.error('Fiyat listesi getirme hatası:', error);
    return NextResponse.json(
      { error: 'Fiyat listesi alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST isteği - Yeni fiyat listesi ekle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sirket_id, tahliye_yeri, arac_tipi, ucret, sofor_ucreti, km } = body;

    // Zorunlu alanları kontrol et
    if (!sirket_id || !tahliye_yeri || !arac_tipi) {
      return NextResponse.json(
        { error: 'Şirket ID, tahliye yeri ve araç tipi zorunludur' },
        { status: 400 }
      );
    }

    // Yeni fiyat listesi kaydı oluştur
    const yeniFiyatListesi = await prisma.sirketFiyatListesi.create({
      data: {
        sirket_id: parseInt(sirket_id),
        tahliye_yeri,
        arac_tipi,
        ucret: ucret ? parseFloat(ucret) : 0,
        sofor_ucreti: sofor_ucreti ? parseFloat(sofor_ucreti) : null,
        km: km ? parseFloat(km) : null
      },
      include: {
        sirket: {
          select: {
            sirket_adi: true,
          },
        },
      },
    });

    return NextResponse.json(yeniFiyatListesi, { status: 201 });
  } catch (error: any) {
    console.error('Fiyat listesi ekleme hatası:', error);
    
    // Unique constraint hatası
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Bu şirket ve tahliye yeri için zaten bir kayıt mevcut' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Fiyat listesi eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 