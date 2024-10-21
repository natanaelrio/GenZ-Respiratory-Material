import styles from '@/component/halamanHomeBaru3.module.css'
import LayoutHalamanAtas from './layoutHalamanAtas';

export default function HalamanHomeBaru3() {
  return (
    <>
      <LayoutHalamanAtas gambar={'logoutamabaru.png'} katabawah={'Geser Kebawah'}>
        <div className={styles.judul}>SISTEM PERNAPASAN MANUSIA</div>
        <div className={styles.subjudul}>
          Hai, anak-anak! Ada yang tahu organ-organ apa saja yang membantu kita bernapas? Kalau belum, tenang saja! Di sini kita akan belajar tentang organ pernapasan manusia, bagaimana sistem pernapasan bekerja, dan cara merawat organ-organ pernapasan tersebut. Yuk anak-anak, kita belajar bersama!
        </div>
      </LayoutHalamanAtas>
    </>
  )
}
