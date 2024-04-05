-- CreateTable
CREATE TABLE "Soal" (
    "id" SERIAL NOT NULL,
    "idUser" TEXT NOT NULL,
    "nama" TEXT,
    "nomerabsen" TEXT,
    "kelas" TEXT,
    "soal1" TEXT,
    "soal2" TEXT,
    "soal3" TEXT,
    "soal4" TEXT,
    "soal5" TEXT,

    CONSTRAINT "Soal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Soal_idUser_key" ON "Soal"("idUser");
