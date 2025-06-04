import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // URL'den parametreleri al
    const searchParams = request.nextUrl.searchParams;
    const sirketId = searchParams.get('sirketId');
    const ay = searchParams.get('ay');
    const donem = searchParams.get('donem');

    // Parametrelerin doğruluğunu kontrol et
    if (!sirketId || !ay || !donem) {
      return NextResponse.json(
        { error: 'Şirket ID, ay ve dönem parametreleri gereklidir' },
        { status: 400 }
      );
    }

    // Sayısal değerlere dönüştür
    const sirketIdNum = parseInt(sirketId);
    const ayNum = parseInt(ay);
    const donemNum = parseInt(donem);

    // Veritabanından seferleri sorgula
    const seferler = await prisma.seferler.findMany({
      where: {
        sirket_id: sirketIdNum,
        ...(ayNum && { ay: ayNum }),
        ...(donemNum && { donem: donemNum })
      } as any,
      orderBy: {
        sira_no: 'asc'
      }
    });

    return NextResponse.json(seferler);
  } catch (error) {
    console.error('Seferler listelenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Seferler listelenirken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 