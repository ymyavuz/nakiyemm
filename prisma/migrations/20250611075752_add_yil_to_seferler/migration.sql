/*
  Warnings:

  - Made the column `kalkis_saati` on table `seferler` required. This step will fail if there are existing NULL values in that column.
  - Made the column `varis_saati` on table `seferler` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `tonaj_kg` on the `seferler` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `arac_id` on table `seferler` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "seferler" DROP CONSTRAINT "seferler_arac_id_fkey";

-- AlterTable
ALTER TABLE "seferler" ADD COLUMN     "yil" INTEGER,
ALTER COLUMN "kalkis_saati" SET NOT NULL,
ALTER COLUMN "varis_saati" SET NOT NULL,
DROP COLUMN "tonaj_kg",
ADD COLUMN     "tonaj_kg" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "arac_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "seferler" ADD CONSTRAINT "seferler_arac_id_fkey" FOREIGN KEY ("arac_id") REFERENCES "araclar"("arac_id") ON DELETE RESTRICT ON UPDATE CASCADE;
