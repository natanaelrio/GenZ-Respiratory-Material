'use client'
import Image from 'next/image'
import LayoutDetail from './layoutdetail'
import styles from '@/component/halamanMateri.module.css'
import { useState } from 'react'
import { useBearStore } from '@/zustand/store'


export default function MateriPertama() {

    const open = useBearStore((state) => state.open)
    const setOpen = useBearStore((state) => state.setOpen)


    const [dataDetail, setDataDetail] = useState([])
    // console.log(dataDetail)
    const [gridAreaGambar, setGridAreaGambar] = useState('1/1/1/2')
    const HandleDetail = async (e) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data.json`)
        const data = await res.json()
        setDataDetail(data.filter((data) => data.id == e)[0])
        setGridAreaGambar(data.filter((data) => data.id == e)[0].gridgambar)
        setOpen(true)
    }
    return (
        <main className={styles.main} >
            <div className={styles.judul}>
                <h1>
                    ORGAN PERNAPASAN MANUSIA
                </h1>
            </div>
            <div className={styles.subjudul3}>
                Nah, berikut adalah gambar dari organ - organ pernapasan manusia tersebut. Anak - anak dapat mengklik nama - nama organ di bawah ini untuk menampilkan gambar organ dan penjelasannya.
            </div>

            <div className={styles.grid} style={open ? { gridTemplateColumns: '1fr 1fr' } : {}}>
                <div className={styles.gambarluar} >
                    <div className={styles.gambar} >
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/main4.png`} width={1000} height={600} alt='main'></Image>
                        <div className={styles.hidung} onClick={() => HandleDetail(1)}>1. HIDUNG</div>
                        <div className={styles.laring} onClick={() => HandleDetail(2)}>3. LARING atau PANGKAL TENGGOROKAN</div>
                        <div className={styles.paruparu} onClick={() => HandleDetail(3)}>5. PARU-PARU</div>
                        <div className={styles.faring} onClick={() => HandleDetail(4)}>2. FARING atau TENGGOROKAN</div>
                        <div className={styles.trakea} onClick={() => HandleDetail(5)}>4. TRAKEA atau BATANG TENGGOROKAN</div>
                        <div className={styles.bronkus} onClick={() => HandleDetail(6)}>6. BRONKUS atau CABANG BATANG TENGGOROKAN</div>
                        <div className={styles.bronkiolus} onClick={() => HandleDetail(7)}>7. BRONKIOLUS atau POHON BRONKUS</div>
                        <div className={styles.alveolus} onClick={() => HandleDetail(8)}>8. ALVEOLUS atau KANTUNG UDARA</div>
                        <div className={styles.diafragma} onClick={() => HandleDetail(9)}>9. DIAFRAGMA</div>
                    </div>
                </div>
                {open && <LayoutDetail
                    judul={dataDetail.judul}
                    gambar={dataDetail.urlgambar}
                    detail={dataDetail.detail}
                    gridareadetail={dataDetail.gridareadetail}
                    width={1000}
                />}
            </div>


        </main>

    )
}
