import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(id, databody) {
    const data = await prisma.soal.update({
        where: {
            idUser: id,
        },
        data: databody
    })
    return data
}


export async function PUT(req) {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');
    const { soal1, soal2, soal3, soal4, soal5, soal6, soal7, soal8, soal9, soal10, selesai } = await req.json()

    const databody = {
        soal1, soal2, soal3, soal4, soal5, soal6, soal7, soal8, soal9, soal10, selesai
    }

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(id, databody)
    const res = await ResponseData(data, authorization)
    return res
}