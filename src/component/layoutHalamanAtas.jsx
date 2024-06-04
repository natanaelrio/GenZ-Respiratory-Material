import styles from '@/component/halamanHomeBaru3.module.css'
import Image from 'next/image'
import { FaArrowTurnDown } from "react-icons/fa6";

export default function LayoutHalamanAtas({ children, gambar, bg }) {
    return (
        <>
            <div className={styles.home} style={{ background: bg }}>
                <div className={styles.kiri}>
                    {children}
                    {/* <div className={styles.subjudul}>
                        &quot;Hai anak - anak, pada halaman ini kalian akan belajar tentang organ dan alur pernapasan manusia. Apa sih bernapas itu? Bernapas adalah proses mulai dari pengambilan oksigen sampai pengeluaran karbondioksida. <br /><br />Manusia dalam bernapas menghirup oksigen dan membuang karbondioksida.
                        Nah.. sekarang ada pertanyaan lagi, Apa saja organ - organ pernapasan pada manusia? Ya, ada Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, Paru - paru, Alveolus, dan Diafragma. Nah anak - anak itu tadi organ - organ pernapasan manusia yuk - yuk kita mulai belajar.&quot;
                    </div> */}
                    {/* <div className={styles.judul}>SISTEM PENAPASAN MANUSIA</div>
          <div className={styles.subjudul}>
            Hai anak-anak, Pada website ini kita akan belajar tentang organ sistem pernapasan dan alur pernapasan pada manusia.
          </div> */}
                </div>
                <div className={styles.kanan}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/${gambar}`} width={1000} height={100} alt='main'></Image>
                </div>
            </div>
            <a href='#pilihanuser' className={styles.geserkebawah} >
                Geser Kebawah <FaArrowTurnDown />
            </a>
        </>
    )
}
