import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET isteği - Tüm şirket fiyat listelerini getir
export async function GET(request: NextRequest) {
  try {
    const sirketId = request.nextUrl.searchParams.get('sirket_id');

    let fiyatListesi;
    if (sirketId) {
      fiyatListesi = await prisma.sirketFiyatListesi.findMany({
        where: {
          sirket_id: parseInt(sirketId),
        },
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
    } else {
      fiyatListesi = await prisma.sirketFiyatListesi.findMany({
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
    }

    return NextResponse.json(fiyatListesi);
  } catch (error) {
    console.error('Fiyat listesi getirme hatası:', error);
    return NextResponse.json(
      { error: 'Fiyat listesi alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST isteği - Yeni fiyat listesi ekle (hem şirket hem şoför fiyatlarını içerebilir)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sirket_id, fiyatlar } = body;

    if (!sirket_id || !fiyatlar || !Array.isArray(fiyatlar) || fiyatlar.length === 0) {
      return NextResponse.json(
        { error: 'Geçersiz veri formatı. Şirket ID ve fiyat listesi gereklidir.' },
        { status: 400 }
      );
    }

    console.log("Fiyat listesi ekleme isteği:", JSON.stringify(fiyatlar, null, 2));

    // Her bir fiyat için kayıt oluştur veya güncelle
    const createdItems = [];
    for (const fiyat of fiyatlar) {
      // İlgili fiyat kaydını ara (aynı şirket, tahliye yeri ve araç tipi için)
      const existingFiyat = await prisma.sirketFiyatListesi.findFirst({
        where: {
            sirket_id: sirket_id,
            tahliye_yeri: fiyat.tahliye_yeri,
          arac_tipi: fiyat.arac_tipi,
        }
      });

      let result;
      // Varsa güncelle, yoksa yeni kayıt oluştur
      if (existingFiyat) {
        result = await prisma.sirketFiyatListesi.update({
          where: {
            fiyat_listesi_id: existingFiyat.fiyat_listesi_id
          },
          data: {
            ucret: fiyat.ucret,
            sofor_ucreti: fiyat.sofor_ucreti,
            km: fiyat.km || null
          }
        });
      } else {
        result = await prisma.sirketFiyatListesi.create({
          data: {
            sirket_id: sirket_id,
            tahliye_yeri: fiyat.tahliye_yeri,
            arac_tipi: fiyat.arac_tipi,
            ucret: fiyat.ucret,
            sofor_ucreti: fiyat.sofor_ucreti,
            km: fiyat.km || null
          }
        });
      }
      
      createdItems.push(result);
    }

    return NextResponse.json({
      message: 'Fiyat listesi başarıyla kaydedildi',
      items: createdItems,
    });
  } catch (error) {
    console.error('Fiyat listesi ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Fiyat listesi eklenirken bir hata oluştu: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
} 