import styles from '@/component/halamanHomeBaru3.module.css'
import Image from 'next/image'
import { FaArrowTurnDown } from "react-icons/fa6";
import LayoutHalamanAtas from './layoutHalamanAtas';

export default function HalamanHomeBaru3() {
  return (
    <>
      <LayoutHalamanAtas gambar={'logoutamabaru.png'}>
        <div className={styles.judul}>SISTEM PENAPASAN MANUSIA</div>
        <div className={styles.subjudul}>
          Hai anak-anak, Pada website ini kita akan belajar tentang organ sistem pernapasan dan alur pernapasan pada manusia.
        </div>
      </LayoutHalamanAtas>
    </>
  )
}
