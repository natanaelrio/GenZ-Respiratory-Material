'use client'
import styles from '@/component/halamanMateri.module.css'
import Image from "next/image"
import { useEffect, useState } from 'react'

export default function MateriLima() {

    const [DataArtikel, setDataArtikel] = useState([])
    useEffect(() => {
        const Fetchdata = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/dataartikel1.json`)
            const data = await res.json()
            setDataArtikel(data)
        }
        Fetchdata()
    }, [])

    return (
        <>

            <div className={styles.hr}></div>
            <div className={styles.container}>
                <div className={styles.bagianatasartikel}>
                    <div className={styles.judulartikelatas}>
                        Cara Memelihara <br />Organ Pernapasan Manusia
                    </div>
                    <div className={styles.deskripsiartikelatas}>
                        Sebagai manusia yang ingin sehat sepanjang umurnya, tentunya harus tetap menjaga kesehatan organ-organ tubuhnya. Begitu juga pada organ-organ pernapasan. Berikut adalah cara memelihara organ pernapasan.
                    </div>
                </div>
            </div>
            {DataArtikel.map((dataku, i) => {
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
            })}
        </>
    )
}
