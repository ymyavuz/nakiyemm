-- CreateTable
CREATE TABLE "arac_muhasebe" (
    "id" SERIAL NOT NULL,
    "arac_id" INTEGER NOT NULL,
    "tutar" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "arac_muhasebe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "arac_muhasebe" ADD CONSTRAINT "arac_muhasebe_arac_id_fkey" FOREIGN KEY ("arac_id") REFERENCES "araclar"("arac_id") ON DELETE RESTRICT ON UPDATE CASCADE;
