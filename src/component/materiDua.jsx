import styles from '@/component/halamanMateri.module.css'
import Image from 'next/image'

export default function MateriDua() {
    return (
        <div className={styles.alurpernapasan}>
            <div className={styles.gambaralurpernafasan} style={{ width: '90%' }}>
                <Image src={`${process.env.NEXT_PUBLIC_URL}/bawahorgan.gif`} width={2000} height={600} alt='main'></Image>
            </div>
        </div>
    )
}
