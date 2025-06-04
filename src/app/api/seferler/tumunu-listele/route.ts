import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // URL'den parametreleri al
    const searchParams = request.nextUrl.searchParams;
    const ay = searchParams.get('ay');
    const donem = searchParams.get('donem');
    const sirketId = searchParams.get('sirketId');

    // Parametrelerin doğruluğunu kontrol et
    if (!ay || !donem) {
      return NextResponse.json(
        { error: 'Ay ve dönem parametreleri gereklidir' },
        { status: 400 }
      );
    }

    // Sayısal değerlere dönüştür
    const ayNum = parseInt(ay);
    const donemNum = parseInt(donem);
    const sirketIdNum = sirketId ? parseInt(sirketId) : null;

    // Veritabanından seferleri sorgula
    const seferler = await prisma.seferler.findMany({
      where: {
        ...(ayNum && { ay: ayNum }),
        ...(donemNum && { donem: donemNum }),
        ...(sirketIdNum && { sirket_id: sirketIdNum })
      } as any,
      include: {
        sirket: true,
        arac: true
      },
      orderBy: [
        {
          sirket_id: 'asc'
        },
        {
          arac_id: 'asc'
        },
        // Sıra numarasını sayısal olarak sıralamak için sorguda sort fonksiyonu kullanamadığımızdan
        // sonuçları JavaScript ile sıralayacağız
        {
          sira_no: 'asc'
        }
      ]
    });

    // Sıra numaralarını sayısal değere çevirerek sıralama
    const sortedSeferler = [...seferler].sort((a, b) => {
      // Önce şirket ID'sine göre sırala
      if (a.sirket_id !== b.sirket_id) {
        return a.sirket_id - b.sirket_id;
      }
      
      // Sonra araç ID'sine göre sırala
      if (a.arac_id !== b.arac_id) {
        return (a.arac_id || 0) - (b.arac_id || 0);
      }
      
      // Son olarak sıra numarasına göre sayısal sıralama yap
      const aNum = parseInt(a.sira_no.toString());
      const bNum = parseInt(b.sira_no.toString());
      return aNum - bNum;
    });

    return NextResponse.json(sortedSeferler);
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