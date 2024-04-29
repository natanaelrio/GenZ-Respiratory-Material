import styles from '@/component/halamanHomeBaru.module.css'
import Image from 'next/image'
import { FaBookOpen } from "react-icons/fa";
import Link from 'next/link';

export default function HalamanHomeBaru() {
    return (
        <>
            <div className={styles.isiluar}>
                <div className={styles.isi}>
                    <div className={styles.kiri}>
                        <div className={styles.judul}>Hai anak-anak, selamat datang.</div>
                        <div className={styles.subjudul}> Pada website ini kita dapat belajar organ sistem pernapasan manusia. Silahkan klik Masuk untuk melanjutkan.</div>
                        <div className={styles.masuk}>
                            <Link href='/pilihan'>
                                <button>MASUK</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.kanan}>
                        <Image src={`${process.env.NEXT_PUBLIC_URL}/logoutama.svg`} width={100} height={500} alt='hidung'></Image>
                    </div>
                </div>
            </div>
            <div className={styles.iconbawah}>
                <div className={styles.kotak1}>
                    <FaBookOpen size={60} />
                </div>
                {/* <div className={styles.kotak2}>
                        <FaBookOpen size={60} color={'blue'} />
                    </div> */}
                {/* <div className={styles.kotak3}>
                        <FaBookOpen size={60} color={'yellow'} />
                        </div>
                        <div className={styles.kotak4}>
                        <FaBookOpen size={60} color={'red'} />
                        </div>
                        <div className={styles.kotak5}>
                        <FaBookOpen size={60} color={'green'} />
                    </div> */}
            </div>
        </>
    )
}
