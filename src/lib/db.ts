import { PrismaClient } from '@prisma/client';

declare global {
  var __prisma: PrismaClient | undefined;
}

// Connection URI'yi prepared statement sorunlarını önleyecek şekilde modifiye et
const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url) return url;
  
  // Vercel environment'ında connection pooling parametreleri ekle
  if (process.env.VERCEL) {
    const urlObj = new URL(url);
    // Prepared statement cache'i devre dışı bırak
    urlObj.searchParams.set('prepared_statement_cache_queries', '0');
    // Connection timeout ayarla
    urlObj.searchParams.set('connection_timeout', '10');
    // Statement timeout ayarla  
    urlObj.searchParams.set('query_timeout', '30');
    return urlObj.toString();
  }
  
  return url;
};

// Vercel serverless functions için her istekte yeni client oluştur
// Bu approach prepared statement conflict'lerini tamamen önler
export const createPrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['error'] : [],
  });
};

// Vercel serverless prepared statement sorunları için
// Production'da her istekte yeni client, development'ta singleton
export const prisma = (() => {
  // Production'da (Vercel) her istekte yeni client oluştur
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    return new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      log: ['error'],
    });
  }
  
  // Development'ta singleton pattern
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
      log: ['query', 'error', 'warn'],
    });
  }
  
  return global.__prisma;
})(); 