'use client'
import styles from '@/component/halamanMateri.module.css'
import Image from 'next/image';
import LayoutDetail from './layoutdetail';
import { useEffect, useState } from 'react';
import { useBearStore } from '@/zustand/store'
import { useRouter } from 'next/navigation';
import LayoutHeaderFooter from './layoutHeaderFooter';
import { FaArrowDown } from "react-icons/fa";

export default function HalamanMateri() {
    const router = useRouter()

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

    const [panjang, setPanjang] = useState('')
    useEffect(() => {
        const p = window.innerHeight
        setPanjang(p)
    }, [])

    return (
        <>
            <LayoutHeaderFooter judul={''} kondisi={true} >
                <main className={styles.main} >
                    <div className={styles.judul}>
                        <h1>
                            ORGAN PERNAPASAN MANUSIA
                        </h1>
                    </div>
                    <div className={styles.subjudul}>
                        &quot;Hai anak - anak, pada halaman ini kalian akan belajar tentang organ dan alur pernapasan manusia. Apa sih bernapas itu? Bernapas adalah proses mulai dari pengambilan oksigen sampai pengeluaran karbondioksida. <br />Manusia dalam bernapas menghirup oksigen dan membuang karbondioksida.
                        Nah.. sekarang ada pertanyaan lagi, Apa saja organ - organ pernapasan pada manusia? Ya, ada Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, Paru - paru, Alveolus, dan Diafragma. Nah anak - anak itu tadi organ - organ pernapasan manusia yuk - yuk kita mulai belajar.&quot;
                    </div>
                    <div className={styles.grid} style={open ? { gridTemplateColumns: '1fr 1fr' } : {}}>
                        <div className={styles.gambarluar} style={{ gridArea: gridAreaGambar }}>
                            <div className={styles.gambar} >
                                <Image src={`${process.env.NEXT_PUBLIC_URL}/main4.png`} width={1000} height={600} alt='main'></Image>
                                <div className={styles.hidung} onClick={() => HandleDetail(1)}>1. HIDUNG</div>
                                <div className={styles.laring} onClick={() => HandleDetail(2)}>3. LARING</div>
                                <div className={styles.paruparu} onClick={() => HandleDetail(3)}>7. PARU-PARU</div>
                                <div className={styles.faring} onClick={() => HandleDetail(4)}>2. FARING</div>
                                <div className={styles.trakea} onClick={() => HandleDetail(5)}>4. TRAKEA</div>
                                <div className={styles.bronkus} onClick={() => HandleDetail(6)}>5. BRONKUS</div>
                                <div className={styles.bronkiolus} onClick={() => HandleDetail(7)}>6. BRONKIOLUS</div>
                                <div className={styles.alveolus} onClick={() => HandleDetail(8)}>8. ALVEOLUS</div>
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
                    {/* <div className={styles.soal}>
                        <button onClick={() => router.push(`/soal/1`)}>Soal</button>
                    </div> */}
                </main>
                <div className={styles.alurpernapasan}>
                    <div className={styles.tandapanah}>
                        <div className={styles.iconatas}>
                            <FaArrowDown size={30} />
                        </div>
                        <div className={styles.judul}>
                            Geser kebawah, untuk belajar alur pernapasan manusia
                        </div>
                        <div className={styles.iconatas}>
                            <FaArrowDown size={30} />
                        </div>
                    </div>
                    <div className={styles.gambaralurpernafasan}>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/alurpenafasan.png`} width={1000} height={600} alt='main'></Image>
                    </div>
                </div>
            </LayoutHeaderFooter>
        </>

    )
}
