'use client'
import styles from '@/component/halamanMateri.module.css'
import Image from "next/image"
import { useEffect, useState } from 'react'

export default function MateriEmpat() {

    const [DataArtikel2, setDataArtikel2] = useState([])
    useEffect(() => {
        const Fetchdata = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/dataartikel2.json`)
            const data = await res.json()
            setDataArtikel2(data)
        }
        Fetchdata()
    }, [])
    return (
        <>
            {
                DataArtikel2.map((dataku, i) => {
                    return (
                        <div className={styles.artikelluarluar} key={i} style={{ background: dataku.warna }}>
                            <div className={styles.artikelluar}>
                                <div className={styles.artikel} style={{ gridArea: dataku.gridartikel }}>
                                    <div className={styles.judulartikel}>
                                        {dataku?.judul}
                                    </div>
                                    <div className={styles.isiartikel} dangerouslySetInnerHTML={{ __html: dataku?.detail }} >
                                    </div>
                                </div>
                                <div className={styles.gambarartikel} style={{ gridArea: dataku.gridgambar }} >
                                    <Image src={`${process.env.NEXT_PUBLIC_URL}/${dataku?.urlgambar}`} width={500} height={500} alt={dataku?.judul}></Image>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
