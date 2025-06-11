import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { plaka, sofor_adi, vergi_numarasi, sirket_id } = body;

    console.log('Araç ekleme isteği alındı:', { plaka, sofor_adi, vergi_numarasi, sirket_id });

    // Gerekli alanları kontrol et
    if (!plaka || !sofor_adi || !vergi_numarasi || !sirket_id) {
      console.log('Eksik bilgi:', { plaka, sofor_adi, vergi_numarasi, sirket_id });
      return NextResponse.json(
        { error: 'Plaka, şoför adı, vergi numarası ve şirket ID alanları zorunludur' },
        { status: 400 }
      );
    }

    // Şirketin var olup olmadığını kontrol et
    const sirket = await prisma.sirketler.findUnique({
      where: { sirket_id: parseInt(sirket_id.toString()) }
    });

    if (!sirket) {
      return NextResponse.json(
        { error: 'Belirtilen şirket bulunamadı' },
        { status: 400 }
      );
    }

    // Veritabanına aracı ekle
    const yeniArac = await prisma.araclar.create({
      data: {
        plaka,
        sofor_adi,
        vergi_numarasi,
        sirket_id: parseInt(sirket_id.toString())
      }
    });

    console.log('Araç başarıyla eklendi:', yeniArac);

    return NextResponse.json({ 
      basarili: true, 
      mesaj: 'Araç başarıyla eklendi',
      arac: yeniArac 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Araç ekleme hatası:', error);
    
    return NextResponse.json(
      { error: 'Araç eklenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const araclar = await prisma.araclar.findMany({
      include: {
        sirket: true
      },
      orderBy: [
        { sirket: { sirket_adi: 'asc' } },
        { sofor_adi: 'asc' },
        { plaka: 'asc' }
      ]
    });

    return NextResponse.json(araclar);

  } catch (error) {
    console.error('Araçlar getirme hatası:', error);
    return NextResponse.json(
      { error: 'Araçlar getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 