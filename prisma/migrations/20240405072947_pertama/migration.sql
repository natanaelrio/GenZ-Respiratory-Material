/*
  Warnings:

  - The `nomerabsen` column on the `Soal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Soal" ADD COLUMN     "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "nomerabsen",
ADD COLUMN     "nomerabsen" INTEGER;
