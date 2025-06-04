/*
  Warnings:

  - You are about to alter the column `tonaj_kg` on the `seferler` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "seferler" ALTER COLUMN "tonaj_kg" SET DATA TYPE VARCHAR(255);
