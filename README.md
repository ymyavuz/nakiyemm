# 🚛 Nakliye Yönetim Sistemi (Transport Management System)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.7.0-green)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-blue)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.6-38B2AC)](https://tailwindcss.com/)

> **Kurumsal seviyede nakliye ve lojistik yönetim platformu** - Araç filosu yönetimi, şoför takibi, sefer planlaması, muhasebe işlemleri ve finansal raporlama özelliklerini içeren end-to-end çözüm.

## 🌟 Öne Çıkan Özellikler

### 🚗 **Araç & Şoför Yönetimi**
- Plaka ve şoför bilgileri takibi
- Vergi numarası yönetimi
- Araç-şirket ilişkilendirmesi
- Şoför ödeme takibi

### 📊 **Sefer Takibi & Planlama**
- İrsaliye numarası ve tarih yönetimi
- Kalkış-varış saati takibi
- Rota planlaması (çıkış-tahliye yeri)
- Tonaj ve araç tipi yönetimi
- MT (metrik ton) hesaplamaları

### 💰 **Fiyat & Muhasebe Sistemi**
- **Dinamik fiyat listeleri** (şirket ve şoför bazlı)
- **KDV hesaplamaları** (%20 otomatik)
- **Tevkifat hesaplamaları** (%4)
- Gelir-gider takibi ve kar analizi
- Şirket ve araç bazında karlılık raporları

### 🏦 **Finansal Yönetim**
- **Çek takip sistemi** (vade, tahsilat durumu)
- Şoför ödemeleri yönetimi
- Aylık/yıllık finansal raporlar
- Bilanço ve muhasebe entegrasyonu

### 📈 **Gelişmiş Raporlama**
- **Dashboard özeti** (gerçek zamanlı)
- Şirket bazında kar analizleri
- Araç performans raporları
- Vadesi yaklaşan çek uyarıları
- Excel import/export özellikleri

### 🔧 **Teknik Özellikler**
- **Modern React 19** ve Next.js 15
- **TypeScript** ile type-safe geliştirme
- **Prisma ORM** ile veritabanı yönetimi
- **PostgreSQL** ilişkisel veritabanı
- **Tailwind CSS** ile responsive tasarım
- **Dark/Light tema** desteği
- **RESTful API** tasarımı

## 🏗️ Sistem Mimarisi

```
src/
├── app/
│   ├── api/                    # RESTful API endpoints
│   │   ├── araclar/           # Araç yönetimi
│   │   ├── seferler/          # Sefer işlemleri
│   │   ├── sirketler/         # Şirket yönetimi
│   │   ├── fiyat-listesi/     # Fiyat yönetimi
│   │   ├── cekler/            # Çek takibi
│   │   ├── dashboard-ozet/    # Dashboard API
│   │   └── excel-yukle/       # Excel entegrasyonu
│   ├── components/            # React bileşenleri
│   ├── context/              # React Context API
│   └── [pages]/              # Sayfa bileşenleri
├── lib/
│   └── db.ts                 # Prisma veritabanı bağlantısı
└── prisma/
    └── schema.prisma         # Veritabanı şeması
```

## 📊 Veritabanı Şeması

### Ana Tablolar
- **Sirketler**: Şirket bilgileri ve vergi numaraları
- **Araclar**: Plaka, şoför ve araç bilgileri
- **Seferler**: Sefer detayları ve finansal bilgiler
- **SirketFiyatListesi**: Dinamik fiyat yönetimi
- **Cekler**: Çek takip sistemi
- **SoforOdemeler**: Şoför ödeme kayıtları

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- PostgreSQL 13+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/yourusername/nakliye-yonetim-sistemi.git
cd nakliye-yonetim-sistemi
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Veritabanını yapılandırın**
```bash
# .env dosyasını oluşturun
cp .env.example .env

# PostgreSQL bağlantı bilgilerini güncelleyin
DATABASE_URL="postgresql://username:password@localhost:5432/nakliye_db"
```

4. **Veritabanını migrate edin**
```bash
npm run db:migrate
```

5. **Prisma client'ı generate edin**
```bash
npm run build
```

6. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 📱 Kullanım

### Ana Özellikler

1. **Dashboard**: Genel özet, ciro analizi, çek durumu
2. **Araç Yönetimi**: Araç ekleme, düzenleme, listeleme
3. **Sefer Takibi**: Sefer kayıtları, Excel import
4. **Fiyat Yönetimi**: Şirket ve şoför fiyat listeleri
5. **Muhasebe**: Kar hesaplamaları, bilanço raporları
6. **Çek Yönetimi**: Vade takibi, tahsilat durumu

### Excel Entegrasyonu
- Toplu sefer verisi yükleme
- Otomatik veri doğrulama
- Şirket bazında veri ayrıştırma
- Hata kontrolü ve raporlama

## 🔧 API Endpoints

### Ana Endpoints
- `GET /api/ciro-hesapla` - Toplam ciro hesaplama
- `GET /api/dashboard-ozet` - Dashboard özet verileri
- `POST /api/seferler/kaydet` - Toplu sefer kaydetme
- `GET /api/sirket-bilanco` - Şirket bilanço raporu
- `GET /api/sofor-bilanco` - Şoför bilanço raporu

### CRUD İşlemleri
- `GET/POST/PUT/DELETE /api/araclar` - Araç yönetimi
- `GET/POST/PUT/DELETE /api/sirketler` - Şirket yönetimi
- `GET/POST/PUT/DELETE /api/cekler` - Çek yönetimi

## 🎯 Teknik Başarılar

### Modern Web Teknolojileri
- **Next.js 15** App Router kullanımı
- **React 19** Server Components
- **TypeScript** ile type safety
- **Tailwind CSS** ile modern UI

### Veritabanı Optimizasyonu
- **Prisma ORM** ile type-safe queries
- **PostgreSQL** ile ilişkisel veri yönetimi
- **Migration** sistemi ile schema yönetimi

### Performans Optimizasyonları
- **Server-side rendering** ile hızlı yükleme
- **API route caching** ile optimize edilmiş veri akışı
- **Database indexing** ile hızlı sorgular

### Güvenlik Özellikleri
- **Input validation** ve sanitization
- **SQL injection** koruması (Prisma ORM)
- **Authentication** sistemi

## 📈 Proje İstatistikleri

- **~50+ API endpoint** - Kapsamlı backend
- **~20+ React component** - Modüler frontend
- **~15+ database table** - İlişkisel veri modeli
- **~1000+ satır kod** - Production-ready kod
- **TypeScript coverage** - %100 type safety

## 🛠️ Geliştirme

### Scripts
```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run start        # Production sunucusu
npm run lint         # ESLint kontrolü
npm run db:migrate   # Veritabanı migration
```

### Kod Standartları
- **ESLint** ile kod kalitesi
- **Prettier** ile format standardı
- **TypeScript** strict mode
- **Conventional commits** standardı

