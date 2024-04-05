/*
  Warnings:

  - You are about to drop the `Soal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Soal";

-- CreateTable
CREATE TABLE "soal" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUser" TEXT NOT NULL,
    "nama" TEXT,
    "nomerabsen" INTEGER,
    "kelas" TEXT,
    "soal1" TEXT,
    "soal2" TEXT,
    "soal3" TEXT,
    "soal4" TEXT,
    "soal5" TEXT,

    CONSTRAINT "soal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "soal_idUser_key" ON "soal"("idUser");
