import styles from '@/component/halamanUtama.module.css'
import Image from 'next/image';
import { useBearStore } from '@/zustand/store'
import { motion } from "framer-motion"

export default function LayoutDetail({ judul, gambar, detail, gridareadetail, width }) {
    const setOpen = useBearStore((state) => state.setOpen)
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{
                y: -10,
                transition: { duration: 1 },
            }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.detail}
            style={{ gridArea: gridareadetail }}>
            <div className={styles.atas}>
                <div className={styles.juduldetail}>{judul}</div>
                <div className={styles.close} onClick={() => setOpen(false)}>X</div>
            </div>
            <div className={styles.gambardetail}>
                <Image src={`${process.env.NEXT_PUBLIC_URL}${gambar}`} width={width} height={300} alt='hidung'></Image>
            </div>
            <div className={styles.deskripsi}>{detail}
            </div>
        </motion.div>
    )
}
