'use client'
import Image from "next/image"
import styles from '@/component/layoutHeaderFooter.module.css'
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa";
import Footer from "./footer";
import Link from "next/link";
import { useBearStore } from '@/zustand/store'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function LayoutHeaderFooter({ children, kondisi, bg, atas }) {
    const router = useRouter()
    const setOpenSoal = useBearStore((state) => state.setOpenSoal)
    const [open, setOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container} style={bg ? { background: 'white' } : {}}>
            <header className={styles.header} >
                <div className={styles.kiri} onClick={() => router.push('/')}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/logopgsd.png`} width={1000} height={200} alt='hidung'></Image>
                </div>
                <div className={styles.hamburger} onClick={() => setOpen(true)}>
                    <GiHamburgerMenu color="white" size={30} />
                </div>
                {open &&
                    <div className={styles.kanan}>
                        <div className={styles.close} onClick={() => setOpen(false)}>X</div>
                        <div className={styles.list}>
                            <a href={'/'}>Halaman Utama</a>
                        </div>
                        <div className={styles.list} onClick={() => { setOpenSoal(false) }}>
                            <a href={'/materi'}>Sumber Belajar</a>
                        </div>
                        <div className={styles.list} onClick={() => { setOpenSoal(false) }}>
                            <a href={'/soal/1'}>Soal Latihan</a>
                        </div>

                        {kondisi && <button onClick={() => router.back()}>
                            <FaArrowLeft size={17} color="black" />
                        </button>}
                    </div>
                }
                <div className={styles.kanandesktop}>
                    <div className={styles.close} onClick={() => setOpen(false)}>X</div>
                    <div className={styles.list}>
                        <Link href={'/'}>Halaman Utama</Link>
                    </div>
                    <div className={styles.list}
                        // onClick={() => router.push('/')}
                        onMouseEnter={() => setIsHovered(true)}

                    >
                        <a href={'/materi'}>Sumber Belajar</a>
                    </div>
                    <div className={styles.list} onClick={() => { setOpenSoal(false) }}>
                        <a href={'/soal/1'}>Soal Latihan</a>
                    </div>
                    {atas && <button onClick={() => router.back()}>
                        <FaArrowLeft size={17} color="black" />
                    </button>}
                    {isHovered && <div className={styles.kotakdropdown}
                    >
                        {/* <div className={styles.kotaktambahan}></div> */}
                        <Link target="_blank" href={'/materisatu'}>Organ Pernapasan Manusia</Link>
                        <Link target="_blank" href={'/materidua'}>Sistem Pernapasan Manusia</Link>
                        <Link target="_blank" href={'/materitiga'}>Proses Pernapasan Manusia</Link>
                        <Link target="_blank" href={'/materiempat'}>Pernapasan Dada dan Perut</Link>
                        <Link target="_blank" href={'/materilima'}>Cara Memelihara Organ pernapasan Manusia</Link>
                    </div>}

                </div>
                {isHovered && <div className={styles.kotakhitam}
                    onMouseLeave={() => setIsHovered(true)}
                    onClick={() => setIsHovered(false)}
                ></div>}

            </header>
            {children}
            <Footer kondisi={kondisi} />
        </div>
    )
}