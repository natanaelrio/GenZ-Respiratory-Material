'use client'
import styles from '@/component/pilihanuser.module.css'
import { useRouter } from 'next/navigation'
import { useBearStore } from '@/zustand/store'
import { FaArrowDown } from "react-icons/fa";

export default function PilihanUser() {
    const router = useRouter()
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
                <div className={styles.kolom1}>
                    <div className={styles.dalam} onClick={() => { router.push('/materi'), setOpenSoal(false) }}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>👌</div>
                    </div>
                </div>
                <div className={styles.kolom2}>
                    <div className={styles.dalam2} onClick={() => { router.push('/soal/1'), setOpenSoal(false) }}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😍</div>
                    </div>
                </div>
                {/* <div className={styles.kolom3}>
                    <div className={styles.dalam} onClick={() => { router.push('/soalpertama/1'), setOpenSoal(false) }}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😁</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
