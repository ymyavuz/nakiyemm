-- CreateTable
CREATE TABLE "sirketler" (
    "sirket_id" SERIAL NOT NULL,
    "sirket_adi" TEXT NOT NULL,
    "vergi_numarasi" TEXT NOT NULL,

    CONSTRAINT "sirketler_pkey" PRIMARY KEY ("sirket_id")
);

-- CreateTable
CREATE TABLE "araclar" (
    "arac_id" SERIAL NOT NULL,
    "plaka" TEXT NOT NULL,
    "sofor_adi" TEXT NOT NULL,
    "vergi_numarasi" TEXT NOT NULL,
    "sirket_id" INTEGER NOT NULL,

    CONSTRAINT "araclar_pkey" PRIMARY KEY ("arac_id")
);

-- CreateTable
CREATE TABLE "seferler" (
    "sefer_id" SERIAL NOT NULL,
    "sira_no" INTEGER NOT NULL,
    "irsaliye_numarasi" TEXT,
    "irsaliye_tarihi" TIMESTAMP(3),
    "kalkis_saati" TIMESTAMP(3) NOT NULL,
    "varis_saati" TIMESTAMP(3) NOT NULL,
    "cikis_yeri" TEXT NOT NULL,
    "tahliye_edilen_firma" TEXT NOT NULL,
    "tahliye_yeri" TEXT NOT NULL,
    "tonaj_kg" DOUBLE PRECISION NOT NULL,
    "arac_tipi" TEXT NOT NULL,
    "mt" DOUBLE PRECISION,
    "aciklama" TEXT,
    "sirketten_alinan_ucret" DOUBLE PRECISION NOT NULL,
    "sofore_odenen_ucret" DOUBLE PRECISION NOT NULL,
    "sirket_id" INTEGER NOT NULL,
    "arac_id" INTEGER NOT NULL,

    CONSTRAINT "seferler_pkey" PRIMARY KEY ("sefer_id")
);

-- CreateTable
CREATE TABLE "sirket_fiyat_listesi" (
    "fiyat_listesi_id" SERIAL NOT NULL,
    "sirket_id" INTEGER NOT NULL,
    "tahliye_yeri" TEXT NOT NULL,
    "arac_tipi" TEXT NOT NULL,
    "ucret" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "sirket_fiyat_listesi_pkey" PRIMARY KEY ("fiyat_listesi_id")
);

-- CreateTable
CREATE TABLE "sirket_cekler" (
    "cek_id" SERIAL NOT NULL,
    "sirket_id" INTEGER NOT NULL,
    "cek_tutari" DOUBLE PRECISION NOT NULL,
    "cek_alinma_tarihi" TIMESTAMP(3) NOT NULL,
    "cek_odeme_tarihi" TIMESTAMP(3) NOT NULL,
    "durum" TEXT NOT NULL,
    "aciklama" TEXT,
    "kayit_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sirket_cekler_pkey" PRIMARY KEY ("cek_id")
);

-- CreateTable
CREATE TABLE "arac_odeme_kayitlari" (
    "odeme_id" SERIAL NOT NULL,
    "arac_id" INTEGER NOT NULL,
    "odeme_tutari" DOUBLE PRECISION NOT NULL,
    "odeme_tarihi" TIMESTAMP(3) NOT NULL,
    "aciklama" TEXT,
    "kayit_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "arac_odeme_kayitlari_pkey" PRIMARY KEY ("odeme_id")
);

-- CreateTable
CREATE TABLE "yuklenen_excel_dosyalar" (
    "dosya_id" SERIAL NOT NULL,
    "dosya_adi" TEXT NOT NULL,
    "dosya_yolu" TEXT NOT NULL,
    "yukleme_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aciklama" TEXT,

    CONSTRAINT "yuklenen_excel_dosyalar_pkey" PRIMARY KEY ("dosya_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sirketler_vergi_numarasi_key" ON "sirketler"("vergi_numarasi");

-- CreateIndex
CREATE UNIQUE INDEX "araclar_plaka_key" ON "araclar"("plaka");

-- AddForeignKey
ALTER TABLE "araclar" ADD CONSTRAINT "araclar_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seferler" ADD CONSTRAINT "seferler_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seferler" ADD CONSTRAINT "seferler_arac_id_fkey" FOREIGN KEY ("arac_id") REFERENCES "araclar"("arac_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sirket_fiyat_listesi" ADD CONSTRAINT "sirket_fiyat_listesi_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sirket_cekler" ADD CONSTRAINT "sirket_cekler_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "arac_odeme_kayitlari" ADD CONSTRAINT "arac_odeme_kayitlari_arac_id_fkey" FOREIGN KEY ("arac_id") REFERENCES "araclar"("arac_id") ON DELETE RESTRICT ON UPDATE CASCADE;
