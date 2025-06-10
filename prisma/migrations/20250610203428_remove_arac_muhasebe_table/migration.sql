/*
  Warnings:

  - You are about to drop the `arac_muhasebe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "arac_muhasebe" DROP CONSTRAINT "arac_muhasebe_arac_id_fkey";

-- DropTable
DROP TABLE "arac_muhasebe";
