'use client'
import styles from '@/component/halamanRumus.module.css'
import Image from 'next/image';
import LayoutDetail from './layoutdetail';
import { useEffect, useState } from 'react';
import { useBearStore } from '@/zustand/store'
import { useRouter } from 'next/navigation';
import LayoutHeaderFooter from './layoutHeaderFooter';

export default function HalamanRumus() {
    const router = useRouter()

    const open = useBearStore((state) => state.open)
    const setOpen = useBearStore((state) => state.setOpen)

    const [dataDetail, setDataDetail] = useState([])
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
            {/* <div className={styles.luar}>
                <div className={styles.atassendiri}>
                    <div className={styles.gambarlogo}>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/logopgsd.png`} width={500} height={100} alt='hidung'></Image>
                    </div>
                    <div className={styles.judul}>
                        <h1>
                            ORGAN PERNAFASAN MANUSIA
                        </h1>
                    </div>
                    <div></div>
                </div>
            </div> */}
            <LayoutHeaderFooter judul={''} kondisi={true} >

                <main className={styles.main} style={{ height: panjang - 100 }}>
                    <div className={styles.judul}>
                        <h1>
                            ORGAN PERNAFASAN MANUSIA
                        </h1>
                    </div>
                    <div className={styles.grid} style={open ? { gridTemplateColumns: '1fr 1fr' } : {}}>
                        <div className={styles.gambarluar} style={gridAreaGambar ? { gridArea: gridAreaGambar } : {}}>
                            <div className={styles.gambar} >
                                <Image src={`${process.env.NEXT_PUBLIC_URL}/main2.png`} width={1000} height={600} alt='main'></Image>
                                <div className={styles.hidung} onClick={() => HandleDetail(1)}>HIDUNG</div>
                                <div className={styles.faring} onClick={() => HandleDetail(2)}>FARING</div>
                                <div className={styles.laring} onClick={() => HandleDetail(3)}>LARING</div>
                                <div className={styles.trakea} onClick={() => HandleDetail(4)}>TRAKEA</div>
                                <div className={styles.bronkus} onClick={() => HandleDetail(5)}>BRONKUS</div>
                                <div className={styles.paruparu} onClick={() => HandleDetail(6)}>PARU-PARU</div>
                                <div className={styles.diafragma} onClick={() => HandleDetail(7)}>DIAFRAGMA</div>
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
                    <div className={styles.soal}>
                        <button onClick={() => router.push(`/soal/1`)}>Soal</button>
                    </div>

                </main>
            </LayoutHeaderFooter>
        </>

    )
}
