
import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers(databody) {
    const data = await prisma.soal.create({ data: databody })
    return data
}

export async function POST(req) {
    const { idUser, nama, nomerabsen, kelas } = await req.json()

    const databody = {
        idUser, nama, nomerabsen, kelas
    }

    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers(databody)

    const res = await ResponseData(data, authorization)
    return res
}