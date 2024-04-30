import React, { useState } from 'react'
import { useFormik } from 'formik';
import styles from '@/component/namaSoal.module.css'
import * as Yup from 'yup';
import { useBearStore } from '@/zustand/store'
import BackgroundAtas from './backgroundAtas';
import { useRouter, useSearchParams } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';
import BeatLoader from "react-spinners/BeatLoader";

export default function Nama({ color, kondisiAwal, kondisiAkhir }) {
    const router = useRouter()
    const uidUser = uuidv4()
    const setOpenSoal = useBearStore((state) => state.setOpenSoal)

    const [isLoading, setIsLoading] = useState(false)
    const [isGagal, setIsGagal] = useState(false)

    const formik = useFormik({
        initialValues: {
            nama: '',
            Kelas: '',
            Nomor: ''
        },
        validationSchema: Yup.object({
            nama: Yup.string()
                .required('Required'),
            Nomor: Yup.string()
                .required('Required'),
            Kelas: Yup.string()
                .required('Required'),
        }),
        onSubmit: async (values) => {
            setIsLoading(true)
            const gabungData = {
                nama: values.nama,
                nomerabsen: values.Nomor,
                kelas: values.Kelas,
                idUser: uidUser,
                soal1: 'belum disi',
                soal2: 'belum disi',
                soal3: 'belum disi',
                soal4: 'belum disi',
                soal5: 'belum disi',
                soal6: 'belum disi',
                soal7: 'belum disi',
                soal8: 'belum disi',
                soal9: 'belum disi',
                soal10: 'belum disi',
            }

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post-identitas`, {
                    method: 'POST',
                    body: JSON.stringify(gabungData),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': process.env.NEXT_PUBLIC_SECREET
                    },
                    next: { revalidate: 0 }

                })
                const data = await res.json()

                const sukses = () => {
                    setIsLoading(false)
                    setOpenSoal(true)
                    setIsGagal(false)
                    kondisiAwal && router.push(`/soalpertama/${uidUser}`)
                    kondisiAkhir && router.push(`/soal/${uidUser}`)
                }

                const gagal = () => {
                    setIsLoading(false)
                    setIsGagal(true)
                }

                data.status == 200 ? sukses() : gagal()
            }
            catch (e) {
                setIsLoading(false)
                setIsGagal(true)
            }
        },
    });
    return (
        <form className={styles.main}
            style={{ backgroundColor: color }}
            onSubmit={formik.handleSubmit}
        >
            {kondisiAkhir && <BackgroundAtas color={color} />}
            <div className={styles.dalammain}>
                <label htmlFor="nama">Nama {formik.touched.nama && formik.errors.nama ? (
                    <span style={{ color: 'red' }}>*</span>
                ) : null}</label>
                <input
                    id="nama"
                    name="nama"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.nama}
                    placeholder='Nama...'
                    style={formik.touched.nama && formik.errors.nama ? { border: '3px solid red' } : {}}
                    disabled={isLoading}
                />

                <label htmlFor="Nomor">Nomor {formik.touched.Nomor && formik.errors.Nomor ? (
                    <span style={{ color: 'red' }}>*</span>
                ) : null}</label>
                <input
                    id="Nomor"
                    name="Nomor"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.Nomor}
                    placeholder='Nomor Absen...'
                    style={formik.touched.nama && formik.errors.nama ? { border: '3px solid red' } : {}}
                    disabled={isLoading}
                />
                <label htmlFor="Kelas">Kelas {formik.touched.Kelas && formik.errors.Kelas ? (
                    <span style={{ color: 'red' }}>*</span>
                ) : null}</label>
                <input
                    id="Kelas"
                    name="Kelas"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Kelas}
                    placeholder='Kelas...'
                    style={formik.touched.Kelas && formik.errors.Kelas ? { border: '3px solid red' } : {}}
                    disabled={isLoading}
                />
                {isGagal && <p style={{ color: 'red' }}>Ulang Kirim*</p>}
                <button disabled={isLoading} type="submit">{isLoading ? <BeatLoader size={20} color={'var(--colordua)'} /> : 'Lanjutkan 😁'}</button>
                <div className={styles.icon}>😁</div>
                <div className={styles.icon2}>😍</div>
                <div className={styles.icon3}>😊</div>
                <div className={styles.icon4}>😘</div>
            </div>
        </form>
    );
}
