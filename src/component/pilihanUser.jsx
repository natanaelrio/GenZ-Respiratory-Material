'use client'
import styles from '@/component/pilihanuser.module.css'
import { useBearStore } from '@/zustand/store'
import { FaBookOpen } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";

export default function PilihanUser() {
    const setOpenSoal = useBearStore((state) => state.setOpenSoal)

    return (
        <div className={styles.container} id='pilihanuser'>
            <div className={styles.atas}>
                <div className={styles.judulatas}>Hai, Mari Mulai Belajar 😁</div>
                {/* <div className={styles.subjudulatas}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, at!</div>
                <div className={styles.iconatas}>
                    <FaArrowDown size={50} />
                </div> */}
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
