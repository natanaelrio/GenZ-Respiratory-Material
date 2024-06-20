import styles from '@/component/halamanHomeBaru3.module.css'
import LayoutHalamanAtas from './layoutHalamanAtas';

export default function HalamanHomeBaru3() {
  return (
    <>
      <LayoutHalamanAtas gambar={'logoutamabaru.png'} katabawah={'Geser Kebawah'}>
        <div className={styles.judul}>SISTEM PERNAPASAN MANUSIA</div>
        <div className={styles.subjudul}>
          Hai anak-anak, Pada website ini kita akan belajar tentang organ sistem pernapasan dan alur pernapasan pada manusia.
        </div>
      </LayoutHalamanAtas>
    </>
  )
}
