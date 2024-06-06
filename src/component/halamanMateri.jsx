'use client'
import styles from '@/component/halamanMateri.module.css'
import Image from 'next/image';
import LayoutDetail from './layoutdetail';
import { useEffect, useState } from 'react';
import { useBearStore } from '@/zustand/store'
import { useRouter } from 'next/navigation';
import { FaArrowDown } from "react-icons/fa";
import LayoutHalamanAtas from './layoutHalamanAtas';

export default function HalamanMateri({ dataArtikel }) {
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


    const [DataArtikel, setDataArtikel] = useState([])
    useEffect(() => {
        const Fetchdata = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/dataartikel.json`)
            const data = await res.json()
            setDataArtikel(data)
        }
        Fetchdata()
    }, [])


    return (
        <>
            <LayoutHalamanAtas
                gambar={'gambarmateri.gif'}
                bg={'#031620'}
                katabawah={`Let` + `'` + `s goo!!`}>
                <div className={styles.judul2}>Sumber Belajar</div>
                <div className={styles.subjudul2}>
                    &quot;Hai anak - anak, pada halaman ini kalian akan belajar tentang organ dan alur pernapasan manusia. Apa sih pernapasan itu?        Pernapasan atau bisa disebut juga dengan respirasi yang dapat didefinisikan sebagai sebuah proses pengambilan oksigen dan pelepasan karbohidrat dan penggunaan energi yang ada di dalam tubuh.
                    Ketika manusia bernapas, berarti sedang terjadi proses masuknya oksigen ke dalam tubuh dan pelepasan karbondioksida keluar tubuh. Pertukaran antara oksigen dan karbondioksida tersebut terjadi di dalam darah manusia.
                    Pernapasan adalah sebuah proses yang terjadi secara otomatis di dalam tubuh manusia. Bahkan ketika kita tertidur sekalipun.  <br /> <br />Manusia dalam bernapas menghirup oksigen dan membuang karbondioksida.
                    Nah.. sekarang ada pertanyaan lagi, Apa saja organ - organ pernapasan pada manusia? Ya, ada Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, Paru - paru, Alveolus, dan Diafragma. Nah anak - anak itu tadi organ - organ pernapasan manusia yuk - yuk kita mulai belajar.&quot;
                </div>
            </LayoutHalamanAtas>

            <main className={styles.main} id='pilihanuser' >
                <div className={styles.judul}>
                    <h1>
                        ORGAN PERNAPASAN MANUSIA
                    </h1>
                </div>
                <div className={styles.subjudul3}>
                    Nah, berikut adalah gambar dari organ - organ pernapasan manusia tersebut. Anak - anak dapat mengklik nama - nama organ di bawah ini untuk menampilkan gambar organ dan penjelasannya.
                </div>

                <div className={styles.grid} style={open ? { gridTemplateColumns: '1fr 1fr' } : {}}>
                    <div className={styles.gambarluar} style={{ gridArea: gridAreaGambar }}>
                        <div className={styles.gambar} >
                            <Image src={`${process.env.NEXT_PUBLIC_URL}/main4.png`} width={1000} height={600} alt='main'></Image>
                            <div className={styles.hidung} onClick={() => HandleDetail(1)}>1. HIDUNG</div>
                            <div className={styles.laring} onClick={() => HandleDetail(2)}>3. LARING atau PANGKAL TENGGOROKAN</div>
                            <div className={styles.paruparu} onClick={() => HandleDetail(3)}>7. PARU-PARU</div>
                            <div className={styles.faring} onClick={() => HandleDetail(4)}>2. FARING atau TENGGOROKAN</div>
                            <div className={styles.trakea} onClick={() => HandleDetail(5)}>4. TRAKEA atau BATANG TENGGOROKAN</div>
                            <div className={styles.bronkus} onClick={() => HandleDetail(6)}>5. BRONKUS atau CABANG BATANG TENGGOROKAN</div>
                            <div className={styles.bronkiolus} onClick={() => HandleDetail(7)}>6. BRONKIOLUS atau POHON BRONKUS</div>
                            <div className={styles.alveolus} onClick={() => HandleDetail(8)}>8. ALVEOLUS atau KANTUNG UDARA</div>
                            <div className={styles.diafragma} onClick={() => HandleDetail(9)}>9. DIAFRAGMA</div>
                        </div>
                    </div>
                    {/* <div className={styles.texttambahan}>
                        &quot;Hai anak - anak, pada halaman ini kalian akan belajar tentang organ dan alur pernapasan manusia. Apa sih bernapas itu? Bernapas adalah proses mulai dari pengambilan oksigen sampai pengeluaran karbondioksida. <br />Manusia dalam bernapas menghirup oksigen dan membuang karbondioksida.
                        Nah.. sekarang ada pertanyaan lagi, Apa saja organ - organ pernapasan pada manusia? Ya, ada Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, Paru - paru, Alveolus, dan Diafragma. Nah anak - anak itu tadi organ - organ pernapasan manusia yuk - yuk kita mulai belajar.&quot;
                    </div> */}
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
                                <Image src={`${process.env.NEXT_PUBLIC_URL}/${dataku?.urlgambar}`} width={300} height={300} alt={dataku?.judul}></Image>
                            </div>
                        </div>
                    </div>

                )
            })}




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
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/alurpenafasan.png`} width={2000} height={600} alt='main'></Image>
                </div>
            </div>
        </>

    )
}
