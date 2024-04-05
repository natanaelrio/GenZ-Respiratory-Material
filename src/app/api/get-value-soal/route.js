import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id, pilih) {

    const data = await prisma.soal.findUnique({
        select:
            pilih == 'soal1' && { soal1: true } ||
            pilih == 'soal2' && { soal2: true } ||
            pilih == 'soal3' && { soal3: true } ||
            pilih == 'soal4' && { soal4: true } ||
            pilih == 'soal5' && { soal5: true } ||
            pilih == 'soal6' && { soal6: true } ||
            pilih == 'soal7' && { soal7: true } ||
            pilih == 'soal8' && { soal8: true } ||
            pilih == 'soal9' && { soal9: true } ||
            pilih == 'soal10' && { soal10: true }
        ,
        where: {
            idUser: id
        }
    })
    return data
}

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id')
    const pilih = searchParams.get('pilih')

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id, pilih)
    const res = await ResponseData(data, authorization)
    return res
}