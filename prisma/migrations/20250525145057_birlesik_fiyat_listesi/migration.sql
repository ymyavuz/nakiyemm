/*
  Warnings:

  - You are about to drop the `sofor_fiyat_listesi` table. If the table is not empty, all the data it contains will be lost.

*/
-- Önce verileri yedekleyelim
CREATE TEMP TABLE temp_sofor_fiyat_listesi AS SELECT * FROM "sofor_fiyat_listesi";

-- DropForeignKey
ALTER TABLE "sofor_fiyat_listesi" DROP CONSTRAINT "sofor_fiyat_listesi_sirket_id_fkey";

-- AlterTable: varsayılan değer ile sofor_ucreti sütununu ekle
ALTER TABLE "sirket_fiyat_listesi" ADD COLUMN "sofor_ucreti" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- Eşleşen kayıtlar için sofor_ucreti değerlerini güncelle
UPDATE "sirket_fiyat_listesi" AS sfl
SET "sofor_ucreti" = (
    SELECT temp."ucret"
    FROM "temp_sofor_fiyat_listesi" AS temp
    WHERE temp."sirket_id" = sfl."sirket_id"
    AND temp."tahliye_yeri" = sfl."tahliye_yeri"
    AND temp."arac_tipi" = sfl."arac_tipi"
    LIMIT 1
);

-- DropTable
DROP TABLE "sofor_fiyat_listesi";

-- Varsayılan değeri kaldır (isteğe bağlı)
ALTER TABLE "sirket_fiyat_listesi" ALTER COLUMN "sofor_ucreti" DROP DEFAULT;

-- Geçici tabloyu kaldır
DROP TABLE "temp_sofor_fiyat_listesi";
