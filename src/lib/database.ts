import { prisma } from './db';

// Şirket İşlemleri
export const sirketler = {
  getAll: async () => {
    return await prisma.sirketler.findMany();
  },
  
  getById: async (id: number) => {
    return await prisma.sirketler.findUnique({
      where: { sirket_id: id }
    });
  },
  
  create: async (data: { sirket_adi: string; vergi_numarasi: string }) => {
    return await prisma.sirketler.create({ data });
  },
  
  update: async (id: number, data: { sirket_adi?: string; vergi_numarasi?: string }) => {
    return await prisma.sirketler.update({
      where: { sirket_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.sirketler.delete({
      where: { sirket_id: id }
    });
  }
};

// Araç İşlemleri
export const araclar = {
  getAll: async () => {
    return await prisma.araclar.findMany({
      include: { sirket: true }
    });
  },
  
  getById: async (id: number) => {
    return await prisma.araclar.findUnique({
      where: { arac_id: id },
      include: { sirket: true }
    });
  },
  
  create: async (data: { 
    plaka: string; 
    sofor_adi: string; 
    vergi_numarasi: string;
    sirket_id: number;
  }) => {
    return await prisma.araclar.create({ data });
  },
  
  update: async (id: number, data: { 
    plaka?: string; 
    sofor_adi?: string; 
    vergi_numarasi?: string;
    sirket_id?: number;
  }) => {
    return await prisma.araclar.update({
      where: { arac_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.araclar.delete({
      where: { arac_id: id }
    });
  }
};

// Sefer İşlemleri
export const seferler = {
  getAll: async () => {
    return await prisma.seferler.findMany({
      include: { 
        sirket: true,
        arac: true
      }
    });
  },
  
  getById: async (id: number) => {
    return await prisma.seferler.findUnique({
      where: { sefer_id: id },
      include: { 
        sirket: true,
        arac: true
      }
    });
  },
  
  create: async (data: any) => {
    return await prisma.seferler.create({ data });
  },
  
  update: async (id: number, data: any) => {
    return await prisma.seferler.update({
      where: { sefer_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.seferler.delete({
      where: { sefer_id: id }
    });
  }
};

// Şirket Fiyat Listesi İşlemleri 
export const sirketFiyatListesi = {
  getAll: async () => {
    return await prisma.sirketFiyatListesi.findMany({
      include: { sirket: true }
    });
  },
  
  getById: async (id: number) => {
    return await prisma.sirketFiyatListesi.findUnique({
      where: { fiyat_listesi_id: id },
      include: { sirket: true }
    });
  },
  
  getBySirketId: async (sirketId: number) => {
    return await prisma.sirketFiyatListesi.findMany({
      where: { sirket_id: sirketId },
      include: { sirket: true }
    });
  },
  
  create: async (data: { 
    sirket_id: number;
    tahliye_yeri: string;
    arac_tipi: string;
    ucret: number;
  }) => {
    return await prisma.sirketFiyatListesi.create({ data });
  },
  
  update: async (id: number, data: { 
    sirket_id?: number;
    tahliye_yeri?: string;
    arac_tipi?: string;
    ucret?: number;
  }) => {
    return await prisma.sirketFiyatListesi.update({
      where: { fiyat_listesi_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.sirketFiyatListesi.delete({
      where: { fiyat_listesi_id: id }
    });
  }
};

// Şirket Çekler İşlemleri
export const sirketCekler = {
  getAll: async () => {
    return await prisma.sirketCekler.findMany({
      include: { sirket: true }
    });
  },
  
  getById: async (id: number) => {
    return await prisma.sirketCekler.findUnique({
      where: { cek_id: id },
      include: { sirket: true }
    });
  },
  
  getBySirketId: async (sirketId: number) => {
    return await prisma.sirketCekler.findMany({
      where: { sirket_id: sirketId },
      include: { sirket: true }
    });
  },
  
  create: async (data: { 
    sirket_id: number;
    cek_tutari: number;
    cek_alinma_tarihi: Date;
    cek_odeme_tarihi: Date;
    durum: string;
    aciklama?: string;
  }) => {
    return await prisma.sirketCekler.create({ 
      data: {
        ...data,
        kayit_tarihi: new Date()
      } 
    });
  },
  
  update: async (id: number, data: { 
    sirket_id?: number;
    cek_tutari?: number;
    cek_alinma_tarihi?: Date;
    cek_odeme_tarihi?: Date;
    durum?: string;
    aciklama?: string;
  }) => {
    return await prisma.sirketCekler.update({
      where: { cek_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.sirketCekler.delete({
      where: { cek_id: id }
    });
  }
};

// Araç Ödeme Kayıtları İşlemleri
export const aracOdemeKayitlari = {
  getAll: async () => {
    return await prisma.aracOdemeKayitlari.findMany({
      include: { arac: true }
    });
  },
  
  getById: async (id: number) => {
    return await prisma.aracOdemeKayitlari.findUnique({
      where: { odeme_id: id },
      include: { arac: true }
    });
  },
  
  getByAracId: async (aracId: number) => {
    return await prisma.aracOdemeKayitlari.findMany({
      where: { arac_id: aracId },
      include: { arac: true }
    });
  },
  
  create: async (data: { 
    arac_id: number;
    odeme_tutari: number;
    odeme_tarihi: Date;
    aciklama?: string;
  }) => {
    return await prisma.aracOdemeKayitlari.create({ 
      data: {
        ...data,
        kayit_tarihi: new Date()
      } 
    });
  },
  
  update: async (id: number, data: { 
    arac_id?: number;
    odeme_tutari?: number;
    odeme_tarihi?: Date;
    aciklama?: string;
  }) => {
    return await prisma.aracOdemeKayitlari.update({
      where: { odeme_id: id },
      data
    });
  },
  
  delete: async (id: number) => {
    return await prisma.aracOdemeKayitlari.delete({
      where: { odeme_id: id }
    });
  }
};

// Yüklenen Excel Dosyalar İşlemleri
export const yuklenenExcelDosyalar = {
  getAll: async () => {
    return await prisma.yuklenenExcelDosyalar.findMany();
  },
  
  getById: async (id: number) => {
    return await prisma.yuklenenExcelDosyalar.findUnique({
      where: { dosya_id: id }
    });
  },
  
  create: async (data: { 
    dosya_adi: string;
    dosya_yolu: string;
    aciklama?: string;
  }) => {
    return await prisma.yuklenenExcelDosyalar.create({ 
      data: {
        ...data,
        yukleme_tarihi: new Date()
      } 
    });
  },
  
  delete: async (id: number) => {
    return await prisma.yuklenenExcelDosyalar.delete({
      where: { dosya_id: id }
    });
  }
}; 