import styles from '@/component/halamanHomeBaru3.module.css'
import Image from 'next/image'
import { FaArrowTurnDown } from "react-icons/fa6";

export default function HalamanHomeBaru3() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.kiri}>
          <div className={styles.judul}>ORGAN PENAPASAN MANUSIA</div>
          <div className={styles.subjudul}>Hai anak-anak, Pada website ini kita dapat belajar organ sistem pernapasan manusia. Silahkan klik Masuk untuk melanjutkan.</div>
        </div>
        <div className={styles.kanan}>
          <Image src={`${process.env.NEXT_PUBLIC_URL}/logoutamabaru.png`} width={1000} height={100} alt='main'></Image>
        </div>
      </div>
      <a href='#pilihanuser' className={styles.geserkebawah} >
        Geser Kebawah <FaArrowTurnDown />
      </a>
    </>
  )
}
