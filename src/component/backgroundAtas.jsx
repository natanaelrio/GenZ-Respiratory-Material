import styles from '@/component/backgroundatas.module.css'
import Image from 'next/image'

export default function BackgroundAtas() {
    return (
        <>
            <div className={styles.atas}>
                <Image src={`${process.env.NEXT_PUBLIC_URL}/logoatas.jpeg`} width={1000} height={200} alt='hidung'></Image>
            </div>
        </>
    )
}
