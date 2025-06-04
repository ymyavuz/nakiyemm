-- DropForeignKey
ALTER TABLE "sirket_cekler" DROP CONSTRAINT "sirket_cekler_sirket_id_fkey";

-- AlterTable
ALTER TABLE "sirket_cekler" ALTER COLUMN "sirket_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "sirket_cekler" ADD CONSTRAINT "sirket_cekler_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE SET NULL ON UPDATE CASCADE;
