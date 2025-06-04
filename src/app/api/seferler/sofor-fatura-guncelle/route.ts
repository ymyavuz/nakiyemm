import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Fatura güncelleme isteği alındı:', body);
    
    const { seferId, sofor_fatura_ucreti } = body;

    // Parametrelerin doğruluğunu kontrol et
    if (!seferId || sofor_fatura_ucreti === undefined) {
      console.error('Eksik parametreler:', { seferId, sofor_fatura_ucreti });
      return NextResponse.json(
        { error: 'Sefer ID ve fatura ücreti bilgisi gereklidir' },
        { status: 400 }
      );
    }

    // Sayısal değere dönüştür
    const sefer_id = parseInt(seferId.toString());
    const ucret = parseFloat(sofor_fatura_ucreti.toString());
    
    console.log('Dönüştürülen değerler:', { sefer_id, ucret });
    
    if (isNaN(sefer_id) || isNaN(ucret)) {
      console.error('Geçersiz sayısal değerler:', { sefer_id, ucret });
      return NextResponse.json(
        { error: 'Geçersiz Sefer ID veya fatura ücreti bilgisi' },
        { status: 400 }
      );
    }

    // Veritabanında fatura ücreti güncelleme
    console.log(`Sefer ${sefer_id} için fatura ücreti güncelleniyor: ${ucret}`);
    
    const guncellenenSefer = await prisma.seferler.update({
      where: {
        sefer_id: sefer_id
      },
      data: {
        sofor_fatura_ucreti: ucret
      }
    });

    console.log('Güncelleme başarılı:', guncellenenSefer);
    return NextResponse.json(guncellenenSefer);
  } catch (error: any) {
    console.error('Fatura ücreti güncellenirken hata oluştu:', error);
    return NextResponse.json(
      { error: `Fatura ücreti güncellenirken bir hata oluştu: ${error.message}` },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 