import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const soforler = await prisma.araclar.findMany({
      where: {
        sofor_adi: {
          not: ""
        }
      },
      distinct: ['sofor_adi'],
      select: {
        sofor_adi: true,
        plaka: true
      },
      orderBy: {
        sofor_adi: 'asc'
      }
    });

    return NextResponse.json(soforler);
  } catch (error) {
    console.error('Şöförler alınırken hata:', error);
    return NextResponse.json(
      { error: 'Şöförler alınırken bir hata oluştu' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 