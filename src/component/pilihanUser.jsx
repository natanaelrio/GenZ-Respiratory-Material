'use client'
import styles from '@/component/pilihanuser.module.css'
import { useRouter } from 'next/navigation'

export default function PilihanUser() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.isi}>
                <div className={styles.kolom1}>
                    <div className={styles.dalam} onClick={() => router.push('/soal/1')}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😁</div>
                    </div>
                </div>
                <div className={styles.kolom2}>
                    <div className={styles.dalam} onClick={() => router.push('/rumus')}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>👌</div>
                    </div>
                </div>
                <div className={styles.kolom3}>
                    <div className={styles.dalam}>
                        <div className={styles.judul}>Lorem, ipsum.</div>
                        <div className={styles.subjudul}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corporis!</div>
                        <div className={styles.icon}>😍</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
