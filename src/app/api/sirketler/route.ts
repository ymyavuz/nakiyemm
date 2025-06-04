import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sirket_adi, vergi_numarasi } = body;

    console.log('Şirket ekleme isteği alındı:', { sirket_adi, vergi_numarasi });

    // Gerekli alanları kontrol et
    if (!sirket_adi || !vergi_numarasi) {
      console.log('Eksik bilgi:', { sirket_adi, vergi_numarasi });
      return NextResponse.json(
        { error: 'Şirket adı ve vergi numarası alanları zorunludur' },
        { status: 400 }
      );
    }

    // Veritabanına şirketi ekle
    const yeniSirket = await prisma.sirketler.create({
      data: {
        sirket_adi,
        vergi_numarasi
      }
    });

    console.log('Şirket başarıyla eklendi:', yeniSirket);

    return NextResponse.json({ 
      basarili: true, 
      mesaj: 'Şirket başarıyla eklendi',
      sirket: yeniSirket 
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Şirket ekleme hatası:', error);
    
    // Vergi numarası benzersizlik hatası artık kontrol edilmiyor
    
    return NextResponse.json(
      { error: 'Şirket eklenirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('Şirketler listesi isteği alındı');
    
    // Tüm şirketleri getir
    const tumSirketler = await prisma.sirketler.findMany();
    
    console.log(`${tumSirketler.length} şirket bulundu:`, JSON.stringify(tumSirketler));
    
    return NextResponse.json(tumSirketler);
  } catch (error: any) {
    console.error('Şirketleri getirme hatası:', error);
    return NextResponse.json(
      { error: 'Şirketler getirilirken bir hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
} 