import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


// Çekleri listele
export async function GET() {
  try {
    const cekler = await prisma.cekler.findMany({
      orderBy: {
        olusturma_tarihi: 'desc'
      }
    });

    return NextResponse.json(cekler);
  } catch (error) {
    console.error('Çekler alınırken hata:', error);
    return NextResponse.json(
      { error: 'Çekler alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// Yeni çek ekle
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cek_no, vade_tarihi, tutar, aciklama, odenme_tarihi } = body;

    if (!cek_no || !vade_tarihi || !tutar) {
      return NextResponse.json(
        { error: 'Çek no, vade tarihi ve tutar zorunludur' },
        { status: 400 }
      );
    }

    const yeniCek = await prisma.cekler.create({
      data: {
        cek_no,
        vade_tarihi: new Date(vade_tarihi),
        tutar: parseFloat(tutar),
        aciklama: aciklama || null,
        odenme_tarihi: odenme_tarihi ? new Date(odenme_tarihi) : null
      }
    });

    return NextResponse.json(yeniCek, { status: 201 });
  } catch (error: any) {
    console.error('Çek ekleme hatası:', error);
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Bu çek numarası zaten mevcut' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Çek eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 