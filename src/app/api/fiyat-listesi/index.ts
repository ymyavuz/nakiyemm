import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const tip = req.query.tip as string || 'hepsi';
        const sirketId = req.query.sirket_id ? parseInt(req.query.sirket_id as string) : undefined;
        
        let sirketFiyatListesi = [];
        let soforFiyatListesi = [];
        
        // Fiyat tipine göre verileri getir
        if (tip === 'hepsi' || tip === 'sirket') {
          if (sirketId) {
            sirketFiyatListesi = await prisma.sirketFiyatListesi.findMany({
              where: {
                sirket_id: sirketId,
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
            sirketFiyatListesi = await prisma.sirketFiyatListesi.findMany({
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
        }
        
        if (tip === 'hepsi' || tip === 'sofor') {
          if (sirketId) {
            soforFiyatListesi = await prisma.soforFiyatListesi.findMany({
              where: {
                sirket_id: sirketId,
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
            soforFiyatListesi = await prisma.soforFiyatListesi.findMany({
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
        }
        
        return res.status(200).json({
          sirket_fiyatlar: sirketFiyatListesi,
          sofor_fiyatlar: soforFiyatListesi,
        });
      } catch (error) {
        console.error('Fiyat listesi getirme hatası:', error);
        return res.status(500).json({ error: 'Fiyat listesi alınırken bir hata oluştu' });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 