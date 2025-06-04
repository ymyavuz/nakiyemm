-- AlterTable
ALTER TABLE "sirket_fiyat_listesi" ADD COLUMN     "km" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "sofor_fiyat_listesi" (
    "fiyat_listesi_id" SERIAL NOT NULL,
    "sirket_id" INTEGER NOT NULL,
    "tahliye_yeri" VARCHAR(255) NOT NULL,
    "km" DOUBLE PRECISION,
    "arac_tipi" VARCHAR(50) NOT NULL,
    "ucret" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "sofor_fiyat_listesi_pkey" PRIMARY KEY ("fiyat_listesi_id")
);

-- AddForeignKey
ALTER TABLE "sofor_fiyat_listesi" ADD CONSTRAINT "sofor_fiyat_listesi_sirket_id_fkey" FOREIGN KEY ("sirket_id") REFERENCES "sirketler"("sirket_id") ON DELETE RESTRICT ON UPDATE CASCADE;
