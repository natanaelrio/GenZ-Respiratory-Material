'use client'
import styles from '@/component/halamanMateri.module.css'
import LayoutHalamanAtas from './layoutHalamanAtas';
import MateriPertama from './materiPertama';
import MateriDua from './materiDua';
import MateriTiga from './materiTiga';
import MateriEmpat from './MateriEmpat';
import MateriLima from './MateriLima';

export default function HalamanMateri({ dataArtikel }) {
    // const router = useRouter()


    // const [panjang, setPanjang] = useState('')
    // useEffect(() => {
    //     const p = window.innerHeight
    //     setPanjang(p)
    // }, [])



    return (
        <>
            <LayoutHalamanAtas
                gambar={'gambarmateri.gif'}
                bg={'#031620'}
                katabawah={`Let` + `'` + `s go!!`}>
                <div className={styles.judul2}>Sumber Belajar</div>
                <div className={styles.subjudul2}>
                    &quot;Hai anak - anak, pada halaman ini kalian akan belajar tentang organ dan alur pernapasan manusia. Apa sih pernapasan itu?        Pernapasan atau bisa disebut juga dengan respirasi yang dapat didefinisikan sebagai sebuah proses pengambilan oksigen dan pelepasan karbondioksida dan penggunaan energi yang ada di dalam tubuh.
                    Ketika manusia bernapas, berarti sedang terjadi proses masuknya oksigen ke dalam tubuh dan pelepasan karbondioksida keluar tubuh. Pertukaran antara oksigen dan karbondioksida tersebut terjadi di dalam darah manusia.
                    Pernapasan adalah sebuah proses yang terjadi secara otomatis di dalam tubuh manusia. Bahkan ketika kita tertidur sekalipun.  <br /> <br />Manusia dalam bernapas menghirup oksigen dan membuang karbondioksida.
                    Nah.. sekarang ada pertanyaan lagi, Apa saja organ - organ pernapasan pada manusia? Ya, ada Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, Paru - paru, Alveolus, dan Diafragma. Nah anak - anak itu tadi organ - organ pernapasan manusia yuk - yuk kita mulai belajar.&quot;
                </div>
            </LayoutHalamanAtas>

            <MateriPertama />
            <MateriDua />
            <MateriTiga />
            <MateriEmpat />
            <MateriLima />
        </>
    )
}
