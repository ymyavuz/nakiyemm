-- Şirket fiyat listesine sofor_ucreti sütununu ekle
ALTER TABLE "sirket_fiyat_listesi" ADD COLUMN "sofor_ucreti" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- Şoför fiyat listesindeki verileri şirket fiyat listesine aktar
UPDATE "sirket_fiyat_listesi" AS sfl
SET "sofor_ucreti" = (
    SELECT sof."ucret"
    FROM "sofor_fiyat_listesi" AS sof
    WHERE sof."sirket_id" = sfl."sirket_id"
    AND sof."tahliye_yeri" = sfl."tahliye_yeri"
    AND sof."arac_tipi" = sfl."arac_tipi"
    LIMIT 1
);

-- Sofor fiyat listesi tablosunu kaldır
DROP TABLE "sofor_fiyat_listesi"; 