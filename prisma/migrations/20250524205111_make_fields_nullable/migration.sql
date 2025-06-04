-- DropForeignKey
ALTER TABLE "seferler" DROP CONSTRAINT "seferler_arac_id_fkey";

-- AlterTable
ALTER TABLE "seferler" ALTER COLUMN "kalkis_saati" DROP NOT NULL,
ALTER COLUMN "varis_saati" DROP NOT NULL,
ALTER COLUMN "arac_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "seferler" ADD CONSTRAINT "seferler_arac_id_fkey" FOREIGN KEY ("arac_id") REFERENCES "araclar"("arac_id") ON DELETE SET NULL ON UPDATE CASCADE;
