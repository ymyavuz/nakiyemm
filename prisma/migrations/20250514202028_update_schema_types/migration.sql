/*
  Warnings:

  - You are about to alter the column `plaka` on the `araclar` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `sofor_adi` on the `araclar` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `vergi_numarasi` on the `araclar` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `irsaliye_numarasi` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `cikis_yeri` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `tahliye_edilen_firma` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `tahliye_yeri` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `arac_tipi` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `durum` on the `sirket_cekler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `tahliye_yeri` on the `sirket_fiyat_listesi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `arac_tipi` on the `sirket_fiyat_listesi` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `sirket_adi` on the `sirketler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `vergi_numarasi` on the `sirketler` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `dosya_adi` on the `yuklenen_excel_dosyalar` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `dosya_yolu` on the `yuklenen_excel_dosyalar` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "arac_odeme_kayitlari" ALTER COLUMN "odeme_tarihi" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "araclar" ALTER COLUMN "plaka" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "sofor_adi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "vergi_numarasi" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "seferler" ALTER COLUMN "irsaliye_numarasi" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "irsaliye_tarihi" SET DATA TYPE DATE,
ALTER COLUMN "kalkis_saati" SET DATA TYPE TIME,
ALTER COLUMN "varis_saati" SET DATA TYPE TIME,
ALTER COLUMN "cikis_yeri" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "tahliye_edilen_firma" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "tahliye_yeri" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "arac_tipi" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "sirket_cekler" ALTER COLUMN "cek_alinma_tarihi" SET DATA TYPE DATE,
ALTER COLUMN "cek_odeme_tarihi" SET DATA TYPE DATE,
ALTER COLUMN "durum" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "sirket_fiyat_listesi" ALTER COLUMN "tahliye_yeri" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "arac_tipi" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "sirketler" ALTER COLUMN "sirket_adi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "vergi_numarasi" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "yuklenen_excel_dosyalar" ALTER COLUMN "dosya_adi" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "dosya_yolu" SET DATA TYPE VARCHAR(255);
