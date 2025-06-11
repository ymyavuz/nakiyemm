import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
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

// Vercel serverless functions için optimize edilmiş Prisma client
export const prisma = 
  global.prisma ||
  new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
    // Connection pool ayarları - prepared statement sorununu çözmek için
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

// Vercel serverless ortamında graceful shutdown
if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
  // Process sonlandırılırken bağlantıları temizle
  const cleanup = async () => {
    try {
      await prisma.$disconnect();
    } catch (error) {
      console.error('Prisma disconnect error:', error);
    }
  };

  process.on('beforeExit', cleanup);
  process.on('SIGTERM', cleanup);
  process.on('SIGINT', cleanup);
} 