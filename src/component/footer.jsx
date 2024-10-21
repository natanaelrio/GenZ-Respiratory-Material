import styles from '@/component/layoutHeaderFooter.module.css'
import Link from 'next/link'
import { MdOutlinePhoneCallback } from "react-icons/md";

export default function Footer({ kondisi }) {
    return (
        <footer >
            <div className={styles.bawah} style={kondisi ? { borderTop: '3px solid var(--colorhover)', background: 'white' } : {}}>

                <div className={styles.satu} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div className={styles.judul}>
                        Website Sistem Pernapasan
                    </div>
                    <div className={styles.subjudul}>
                        Website ini merupakan situs belajar online yang menyediakan materi - materi dan soal untuk belajar. Pada website ini materi dan soal dikemas dengan menarik agar peserta didik dapat tertarik untuk belajar secara mandiri melalui website ini.
                    </div>
                </div>
                <div className={styles.dua} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div className={styles.judul}>INFORMASI</div>
                    <div className={styles.subjudul}>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Soal
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Organ-Organ Pernapasan
                            </Link>
                        </div>
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Alur Penapasan
                            </Link>
                        </div>
                        {/* <div className={styles.liiink}>
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
                        </div> */}
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

                        {/* <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                Cara Daftar Membership
                            </Link>
                        </div> */}
                    </div>
                </div>
                <div className={styles.empat} style={kondisi ? { color: 'var(--colordua)' } : {}}>
                    <div style={kondisi ? { color: 'var(--colordua)' } : {}} className={styles.judul}>
                        HUBUNGI KAMI
                    </div>
                    <div style={kondisi ? { color: 'var(--colordua)' } : {}} className={styles.subjudul}>
                        Jalan Diponegoro No. 52 - 60, Kel. Salatiga, Kec. Sidorejo, Kota Salatiga, Prov. Jawa Tengah
                    </div>
                    <div className={styles.informasi} >
                        <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                <MdOutlinePhoneCallback /> 082223921518
                            </Link>
                        </div>
                        {/* <div className={styles.liiink}>
                            <Link style={kondisi ? { color: 'var(--colordua)' } : {}} href={'/'}>
                                <CiMail />  cs@primaindisoft.com
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    Copyright 2024 © Situs Belajar Online Masa Kini
                </p>
                <p>
                    ide: Handoko Wibisono, Pembimbing: Dr. Adi Winanto, M.Pd, Dev: natanaelriowijaya
                </p>
            </div>
        </footer>
    )
}
