import { ResponseData } from '@/lib/ResponseData'
import { prisma } from "@/lib/prisma"

export async function AmbilDataUsers() {
    const data = await prisma.soal.findMany({
        where: {
            selesai: true
        },
        orderBy:
            { id: 'desc' },
    })

    return data
}


export async function GET(req) {
    const authorization = req.headers.get('authorization')
    const data = await AmbilDataUsers()
    const res = await ResponseData(data, authorization)
    return res
}