'use client'
import React, { useEffect, useState } from 'react'
import { useBearStore } from '@/zustand/store'
import Nama from '@/component/nama'
import SoalABCD from './soalABCD'

export default function MainSoal({ uidparam, color, kondisiAwal, kondisiAkhir, kondisi, questions }) {
    const openSoal = useBearStore((state) => state.openSoal)
    const [dataSoal, setDataSoal] = useState([])
    const [dataUser, setDataUser] = useState([])
    useEffect(() => {
        const FetchMain = async (e) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/datasoal.json`)
            const data = await res.json()
            setDataSoal(data)

            const resUser = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data?id=${uidparam}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.NEXT_PUBLIC_SECREET
                },
                next: { revalidate: 0 }
            })
            const data2 = await resUser.json()
            setDataUser(data2)
        }
        FetchMain()
    }, [uidparam])

    return (
        <>
            {openSoal ? <SoalABCD questions={questions} /> : <Nama
                color={color}
                kondisiAwal={kondisiAwal}
                kondisiAkhir={kondisiAkhir}
            />}
        </>
    )
}
