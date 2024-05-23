'use client'
import styles from '@/component/pilihanuser.module.css'
import { useBearStore } from '@/zustand/store'
import { FaArrowDown } from "react-icons/fa";

export default function PilihanUser() {
    const setOpenSoal = useBearStore((state) => state.setOpenSoal)

    return (
        <div className={styles.container}>
            <div className={styles.atas}>
                <div className={styles.judulatas}>Tantangan Buat Anda!! 😁</div>
                <div className={styles.subjudulatas}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at!</div>
                <div className={styles.iconatas}>
                    <FaArrowDown size={50} />
                </div>
            </div>
            <div className={styles.isi}>
                <a href='/materi' className={styles.kolom1}>
                    <div className={styles.dalam} onClick={() => { setOpenSoal(false) }}>
                        <div className={styles.judul}>Sumber Belajar</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>👌</div>
                    </div>
                </a>
                <a href='/soal/1' className={styles.kolom2}>
                    <div className={styles.dalam2} onClick={() => { setOpenSoal(false) }}>
                        <div className={styles.judul}>Soal Latihan</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😍</div>
                    </div>
                </a>
                {/* <div className={styles.kolom3}>
                    <div className={styles.dalam3} onClick={() => { router.push('/soalpertama/1'), setOpenSoal(false) }}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😁</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
