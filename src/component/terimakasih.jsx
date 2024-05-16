import styles from '@/component/terimakasih.module.css'
import { FaHome } from "react-icons/fa";

export default function TerimaKasih() {
    return (
        <div className={styles.container}>
            <div className={styles.text}>Terima Kasihh,</div>
            <div className={styles.text}>
                <a href={'/'}><FaHome /> Kembali Utama</a>
            </div>
            <div className={styles.icon}>😁</div>
            <div className={styles.icon2}>😍</div>
            <div className={styles.icon3}>😊</div>
            <div className={styles.icon4}>😘</div>
            <div className={styles.icon5}>❤️</div>
        </div>
    )
}
