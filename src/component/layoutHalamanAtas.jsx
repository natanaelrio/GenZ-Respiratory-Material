import styles from '@/component/halamanHomeBaru3.module.css'
import Image from 'next/image'
import { FaArrowTurnDown } from "react-icons/fa6";

export default function LayoutHalamanAtas({ children, gambar, bg, katabawah }) {
    return (
        <>
            <div className={styles.home} style={{ background: bg }}>
                <div className={styles.kiri}>
                    {children}
                </div>
                <div className={styles.kanan}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/${gambar}`} width={1000} height={100} alt='main'></Image>
                </div>
            </div>
            <a href='#pilihanuser' className={styles.geserkebawah} >
                {katabawah} <FaArrowTurnDown />
            </a>
        </>
    )
}
