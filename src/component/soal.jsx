import React, { useState } from 'react'
import styles from '@/component/namaSoal.module.css'
import BackgroundAtas from '@/component/backgroundAtas';
import { useBearStore } from '@/zustand/store'
import TerimaKasih from '@/component/terimakasih';
import { IoIosArrowBack } from "react-icons/io";
import BeatLoader from "react-spinners/BeatLoader";

export default function Soal({ data, uidparam, dataUser }) {
    const [pageNumber, setPageNumber] = useState(1)

    const openTerimaKasih = useBearStore((state) => state.openTerimaKasih)
    const setOpenTrimaKasih = useBearStore((state) => state.setOpenTrimaKasih)

    const id = data?.filter((data) => data?.id == pageNumber)[0]?.id
    const IDvalueSoal = data?.filter((data) => data?.id == pageNumber)[0]?.value
    const button = data?.filter((data) => data?.id == pageNumber)[0]?.button
    const soal = data?.filter((data) => data?.id == pageNumber)[0]?.soal

    const [isLoading, setIsLoading] = useState(false)
    const [isGagal, setIsGagal] = useState(false)

    const berhitung = 'soal' + (pageNumber - 1)
    const [isiForm, setIsiForm] = useState('')
    const handleKembali = async () => {
        setIsLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-value-soal?id=${uidparam}&pilih=${berhitung}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_SECREET
            },
            next: { revalidate: 0 }

        })
        const data = await res.json()

        data.status == 200 && setPageNumber(pageNumber - 1) || setIsLoading(false)
        setIsiForm(Object.values(data?.data).toString())
    }

    const [validasi, setValidasi] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()

        // setIsiForm('')
        const sukses = () => {
            setPageNumber(pageNumber + 1)
            setIsLoading(false)
            setIsGagal(false)
            setIsiForm('')
            setValidasi(false)
        }

        const gagal = () => {
            setIsLoading(false)
            setIsGagal(true)
        }

        if (isiForm == '') {
            setValidasi(true)
        }
        if (isiForm != '') {
            setIsLoading(true)
            setValidasi(false)

            const dataku = pageNumber == 1 && { soal1: isiForm } ||
                pageNumber == 2 && { soal2: isiForm } ||
                pageNumber == 3 && { soal3: isiForm } ||
                pageNumber == 4 && { soal4: isiForm } ||
                pageNumber == 5 && { soal5: isiForm } ||
                pageNumber == 6 && { soal6: isiForm } ||
                pageNumber == 7 && { soal7: isiForm } ||
                pageNumber == 8 && { soal8: isiForm } ||
                pageNumber == 9 && { soal9: isiForm } ||
                pageNumber == 10 && { soal10: isiForm, selesai: true }

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/put-identitassoal?id=${uidparam}`, {
                    method: 'PUT',
                    body: JSON.stringify(dataku),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    },
                    next: { revalidate: 0 }

                })
                const data = await res.json()
                data?.status == 200 && sukses() || pageNumber == 10 && setOpenTrimaKasih(true)
            }
            catch (e) {
                gagal()
            }
        }
    }


    return (
        <>
            {openTerimaKasih ? <TerimaKasih /> :
                <form className={styles.main} onSubmit={handleSubmit}>
                    <BackgroundAtas />
                    <div className={styles.dalammain} >
                        <label style={{ fontSize: '30px' }} htmlFor="Soal1">{soal} {validasi ? (
                            <span style={{ color: 'red' }}>*</span>
                        ) : null}</label>
                        <textarea
                            id="Soal1"
                            name="Soal1"
                            type="text"
                            onChange={(e) => setIsiForm(e.target.value)}
                            value={isiForm}
                            placeholder={validasi ? 'isi duluuu, disini 😁' : 'jawab...'}
                            style={validasi ? { border: '3px solid red' } : {}}
                            disabled={isLoading}
                        />

                        <div className={styles.icon}>😁</div>
                        <div className={styles.icon2}>😍</div>
                        <div className={styles.icon3}>😊</div>
                        <div className={styles.icon4}>😘</div>
                        <div className={styles.icon5}>Hallo {dataUser?.data?.nama}</div>
                        <div className={styles.page}>{pageNumber}/10</div>
                        {isGagal && <p style={{ color: 'red' }}>Ulang Kirim*</p>}
                        <div className={styles.bawah}>
                            {pageNumber > 1 && <button style={{ width: '10%', background: 'var(--colordua)' }} disabled={isLoading} onClick={handleKembali}><IoIosArrowBack /></button>}
                            <button disabled={isLoading} type="submit"> {isLoading ? <BeatLoader size={20} color={'var(--colordua)'} /> : button} </button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}
