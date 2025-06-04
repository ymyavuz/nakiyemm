-- CreateTable
CREATE TABLE "sofor_odemeler" (
    "id" SERIAL NOT NULL,
    "sofor_adi" VARCHAR(255) NOT NULL,
    "tutar" DOUBLE PRECISION NOT NULL,
    "tarih" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aciklama" VARCHAR(500),

    CONSTRAINT "sofor_odemeler_pkey" PRIMARY KEY ("id")
);
