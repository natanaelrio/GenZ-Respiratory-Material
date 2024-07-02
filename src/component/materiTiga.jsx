import Image from "next/image"
import styles from '@/component/halamanMateri.module.css'

export default function MateriTiga() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.bagianatasartikel}>
                    <div className={styles.judulartikelatas}>
                        Proses Pernapasan Manusia
                    </div>
                    <div className={styles.deskripsiartikelatas}>
                        Manusia memiliki dua mekanisme pernapasan. Ada pernapasan dada dan juga pernapasan perut. Lalu bagaimana perbedaan keduanya? Berikut adalah penjelasan mekanisme pernapasan manusia.
                    </div>
                </div>
            </div>
            <div className={styles.alurpernapasan}>
                <div className={styles.gambaralurpernafasan}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/alurpenafasan.png`} width={2000} height={600} alt='main'></Image>
                </div>
            </div>
        </>
    )
}
