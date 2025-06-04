import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET isteği - Tüm şoför fiyat listelerini getir
export async function GET(request: NextRequest) {
  try {
    const sirketId = request.nextUrl.searchParams.get('sirket_id');

    let fiyatListesi;
    if (sirketId) {
      fiyatListesi = await prisma.sirketFiyatListesi.findMany({
        where: {
          sirket_id: parseInt(sirketId),
          sofor_ucreti: { not: null } // Sadece şoför ücreti olan kayıtlar
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
        where: {
          sofor_ucreti: { not: null } // Sadece şoför ücreti olan kayıtlar
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
    }

    // Şoför fiyat formatına dönüştür
    const soforFiyatListesi = fiyatListesi.map(item => ({
      ...item,
      ucret: item.sofor_ucreti
    }));

    return NextResponse.json(soforFiyatListesi);
  } catch (error) {
    console.error('Fiyat listesi getirme hatası:', error);
    return NextResponse.json(
      { error: 'Fiyat listesi alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
}

// POST isteği - Yeni şoför fiyat listesi ekle
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

    // Her bir fiyat için kayıt oluşturalım
    const createdItems = [];
    for (const fiyat of fiyatlar) {
      // Tır fiyatı için kayıt
      if (fiyat.tir_fiyati !== undefined && fiyat.tir_fiyati !== null) {
        // Önce ilgili kaydı ara
        const existingTir = await prisma.sirketFiyatListesi.findFirst({
          where: {
            sirket_id: sirket_id,
            tahliye_yeri: fiyat.tahliye_yeri,
            arac_tipi: 'Tır',
          }
        });

        // Eğer kayıt varsa güncelle, yoksa oluştur
        let tirFiyat;
        if (existingTir) {
          tirFiyat = await prisma.sirketFiyatListesi.update({
            where: {
              fiyat_listesi_id: existingTir.fiyat_listesi_id
            },
            data: {
              sofor_ucreti: fiyat.tir_fiyati,
            }
          });
        } else {
          tirFiyat = await prisma.sirketFiyatListesi.create({
            data: {
              sirket_id: sirket_id,
              tahliye_yeri: fiyat.tahliye_yeri,
              km: fiyat.km,
              arac_tipi: 'Tır',
              ucret: 0, // Şirket ücreti yoksa 0 olarak ekle
              sofor_ucreti: fiyat.tir_fiyati,
          },
        });
        }
        createdItems.push(tirFiyat);
      }

      // Kırkayak fiyatı için kayıt
      if (fiyat.kirkayak_fiyati !== undefined && fiyat.kirkayak_fiyati !== null) {
        // Önce ilgili kaydı ara
        const existingKirkayak = await prisma.sirketFiyatListesi.findFirst({
          where: {
            sirket_id: sirket_id,
            tahliye_yeri: fiyat.tahliye_yeri,
            arac_tipi: 'Kırkayak',
          }
        });

        // Eğer kayıt varsa güncelle, yoksa oluştur
        let kirkayakFiyat;
        if (existingKirkayak) {
          kirkayakFiyat = await prisma.sirketFiyatListesi.update({
            where: {
              fiyat_listesi_id: existingKirkayak.fiyat_listesi_id
            },
            data: {
              sofor_ucreti: fiyat.kirkayak_fiyati,
            }
          });
        } else {
          kirkayakFiyat = await prisma.sirketFiyatListesi.create({
            data: {
              sirket_id: sirket_id,
              tahliye_yeri: fiyat.tahliye_yeri,
              km: fiyat.km,
              arac_tipi: 'Kırkayak',
              ucret: 0, // Şirket ücreti yoksa 0 olarak ekle
              sofor_ucreti: fiyat.kirkayak_fiyati,
          },
        });
        }
        createdItems.push(kirkayakFiyat);
      }
    }

    return NextResponse.json({
      message: 'Fiyat listesi başarıyla kaydedildi',
      items: createdItems,
    });
  } catch (error) {
    console.error('Fiyat listesi ekleme hatası:', error);
    return NextResponse.json(
      { error: 'Fiyat listesi eklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 