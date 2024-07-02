'use client'
import styles from '@/component/pilihanuser.module.css'
import { useBearStore } from '@/zustand/store'
import { FaBookOpen } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";

export default function PilihanUser() {
    const setOpenSoal = useBearStore((state) => state.setOpenSoal)

    return (
        <div className={styles.container} >
            <div className={styles.atas}>
                <div className={styles.subjudulatas}>Nah, pada bagian ini kalian dapat memasuki halaman sumber belajar dan halaman latihan soal, Let&apos;s Go!!!</div>
            </div>
            <div className={styles.isi}>
                <a href='/materi' className={styles.kolom1}>
                    <div className={styles.dalam} onClick={() => { setOpenSoal(false) }}>
                        <div className={styles.judul}>Sumber Belajar</div>
                        <div className={styles.subjudul}>Terdapat berbagai materi seperti pengertian setiap organ-organ pernapasan manusia dan alur pernapasan manusia.</div>
                        <div className={styles.icon}><FaBookOpen /></div>
                    </div>
                </a>
                <a href='/soal/1' className={styles.kolom2}>
                    <div className={styles.dalam2} onClick={() => { setOpenSoal(false) }}>
                        <div className={styles.judul}>Soal Latihan</div>
                        <div className={styles.subjudul}>Dalam fitur ini terdapat soal-soal tentang Organ Sistem Pernapasan Manusia yang dapat digunakan untuk berlatih.</div>
                        <div className={styles.icon}><FcIdea /></div>
                    </div>
                </a>
            </div>
        </div>
    )
}
