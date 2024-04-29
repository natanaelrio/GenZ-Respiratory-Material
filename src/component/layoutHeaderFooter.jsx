'use client'
import Image from "next/image"
import styles from '@/component/layoutHeaderFooter.module.css'
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa";

export default function LayoutHeaderFooter({ children, kondisi }) {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.kiri}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}/logopgsd.png`} width={1000} height={200} alt='hidung'></Image>
                </div>
                <div className={styles.kanan}>
                    {kondisi && <button onClick={() => router.back()}>
                        <FaArrowLeft size={17} />
                    </button>}
                </div>
            </header>
            {children}
            <footer className={styles.bawah}>
                © Copyright 2024
                All Rights Reserved
            </footer>
        </div>
    )
}