import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Vercel serverless functions için özel Prisma client konfigürasyonu
export const prisma = 
  global.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// Vercel serverless'da bağlantıları temizlemek için
if (process.env.VERCEL) {
  // Function timeout'tan önce bağlantıları temizle  
  process.on('beforeExit', async () => {
    await prisma.$disconnect();
  });
} 