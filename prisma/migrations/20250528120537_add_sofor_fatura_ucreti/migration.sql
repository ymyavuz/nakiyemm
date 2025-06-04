/*
  Warnings:

  - You are about to drop the `sirket_cekler` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sirket_cekler" DROP CONSTRAINT "sirket_cekler_sirket_id_fkey";

-- AlterTable
ALTER TABLE "arac_odeme_kayitlari" ADD COLUMN     "masraf_tipi_id" INTEGER;

-- AlterTable
ALTER TABLE "seferler" ADD COLUMN     "sofor_fatura_ucreti" DOUBLE PRECISION;

-- DropTable
DROP TABLE "sirket_cekler";

-- CreateTable
CREATE TABLE "arac_masraf_tipleri" (
    "masraf_tipi_id" SERIAL NOT NULL,
    "tip_adi" VARCHAR(100) NOT NULL,

    CONSTRAINT "arac_masraf_tipleri_pkey" PRIMARY KEY ("masraf_tipi_id")
);

-- CreateTable
CREATE TABLE "cekler" (
    "id" SERIAL NOT NULL,
    "cek_no" VARCHAR(50) NOT NULL,
    "vade_tarihi" DATE NOT NULL,
    "tutar" DOUBLE PRECISION NOT NULL,
    "durum" VARCHAR(20) NOT NULL DEFAULT 'beklemede',
    "aciklama" VARCHAR(500),
    "odenme_tarihi" DATE,
    "olusturma_tarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cekler_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cekler_cek_no_key" ON "cekler"("cek_no");
