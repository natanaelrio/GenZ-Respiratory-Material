'use client'
import React, { useEffect, useState } from 'react'
import { useBearStore } from '@/zustand/store'
import Soal from '@/component/soal'
import Nama from '@/component/nama'

export default function MainSoal({ uidparam }) {
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
                }
            })
            const data2 = await resUser.json()
            setDataUser(data2)
        }
        FetchMain()
    }, [uidparam])


    return (
        <>
            {openSoal ? <Soal dataUser={dataUser} data={dataSoal} uidparam={uidparam} /> : <Nama />}
        </>
    )
}
