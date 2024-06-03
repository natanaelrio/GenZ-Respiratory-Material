import styles from '@/component/layoutHeaderFooter.module.css'
import Link from 'next/link'
import { MdOutlinePhoneCallback } from "react-icons/md";
import { CiMail } from "react-icons/ci";

export default function Footer({ kondisi }) {
    return (
        <footer >
            <div className={styles.bawah} style={kondisi ? { borderTop: '3px solid var(--colorhover)', background: 'white' } : {}}>

                <div className={styles.satu} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div className={styles.judul}>
                        PRIMAINDISOFT
                    </div>
                    <div className={styles.subjudul}>
                        Primaindisoft merupakan situs belajar online yang menyediakan materi-materi belajar pendukung kurikulum. Setiap konten primaindisoft dirancang secara unik dan khusus untuk membantu pembelajaran mandiri siswa.
                    </div>
                </div>
                <div className={styles.dua} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div className={styles.judul}>INFORMASI</div>
                    <div className={styles.subjudul}>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Produk Primaindisoft
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Paket Membership
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Afiliasi / Keagenan
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Ketentuan Penggunaan
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Konfirmasi Pembayaran
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Kebijakan Privasi
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                T&C Pembelian Paket
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.tiga}>
                    <div className={styles.judul} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                        BANTUAN
                    </div>
                    <div className={styles.subjudul}>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                FAQ
                            </Link>
                        </div>

                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Cara Daftar Membership
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.empat} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div style={kondisi ? { color: 'var(--colordua)' } : {}} className={styles.judul}>
                        HUBUNGI KAMI
                    </div>
                    <div style={kondisi ? { color: 'var(--colordua)' } : {}} className={styles.subjudul}>
                        Kedoya Elok Plaza Blok DC-50 Jl. Panjang, Jakarta Barat 11520
                    </div>
                    <div className={styles.informasi} >
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                <MdOutlinePhoneCallback />   +021-5806203
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                <CiMail />  cs@primaindisoft.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright 2024 © Situs Belajar Online Masa Kini | wwwkwkwk
            </div>
        </footer>
    )
}
