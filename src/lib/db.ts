import { PrismaClient } from '@prisma/client';

declare global {
  var __prisma: PrismaClient | undefined;
}

// Prepared statement sorunlarını önlemek için URL modifikasyonu
const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  if (!url) return url;
  
  const urlObj = new URL(url);
  // Prepared statement cache'i tamamen devre dışı bırak
  urlObj.searchParams.set('prepared_statement_cache_queries', '0');
  // Statement cache'i de kapat
  urlObj.searchParams.set('statement_cache_size', '0');
  // Connection timeout ayarla
  urlObj.searchParams.set('connection_timeout', '10');
  return urlObj.toString();
};

// Her API çağrısında yeni connection kullan (prepared statement çakışmalarını önlemek için)
export const createFreshPrismaClient = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
    log: process.env.NODE_ENV === 'development' ? ['error'] : [],
  });
};

// Ana prisma client - prepared statement sorunu için connection'ı optimize et
export const prisma = (() => {
  if (process.env.NODE_ENV === 'production') {
    // Production'da prepared statement sorunlarını önlemek için modifiye edilmiş URL kullan
    return new PrismaClient({
      datasources: {
        db: {
          url: getDatabaseUrl(),
        },
      },
      log: ['error'],
    });
  }
  
  // Development için singleton ama prepared statement'ları disable et
  if (!global.__prisma) {
    global.__prisma = new PrismaClient({
      datasources: {
        db: {
          url: getDatabaseUrl(),
        },
      },
      log: ['error', 'warn'],
    });
  }
  
  return global.__prisma;
})(); 