import styles from '@/component/halamanHomeBaru2.module.css'
import Link from 'next/link';
import { MdOutlineImageSearch } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";
import { SiZincsearch } from "react-icons/si";
import { TbDog } from "react-icons/tb";
import { FaCat } from "react-icons/fa"
import { TbCat } from "react-icons/tb";
import { GiKidSlide } from "react-icons/gi";

import { GiLighthouse } from "react-icons/gi";
import { TbBuildingLighthouse } from "react-icons/tb";
import { HiExclamationTriangle } from "react-icons/hi2";
import { HiFaceSmile } from "react-icons/hi2";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { SlPlane } from "react-icons/sl";

import { FaArrowRight } from "react-icons/fa6";
export default function HalamanHomeBaru2() {
    return (
        <>
            <div className={styles.isiluar}>
                <div className={styles.kiri}>
                    <div className={styles.dalamkiri}>
                        <div className={styles.icon1}>
                            <GiLighthouse size={100} />
                        </div>
                        <div className={styles.icon2}>
                            <TbBuildingLighthouse size={100} />
                        </div>
                        <div className={styles.icon3}>
                            <HiExclamationTriangle size={100} />
                        </div>
                        <div className={styles.icon4}>
                            <HiGlobeAsiaAustralia size={100} />
                        </div>
                        <div className={styles.icon5}>
                            <SlPlane size={100} />
                        </div>
                        <div className={styles.icon6}>
                            <HiFaceSmile size={100} />
                        </div>
                    </div>
                </div>

                <div className={styles.isi}>
                    <div className={styles.tengah}>
                        <div className={styles.judul}>Hai anak-anak, selamat datang</div>
                        <div className={styles.subjudul}> Pada website ini kita dapat belajar organ sistem pernapasan manusia. Silahkan klik Masuk untuk melanjutkan.</div>
                        <div className={styles.masuk}>
                            <Link href='/pilihan'>
                                <button>MASUK &nbsp; <FaArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.kanan}>
                    <div className={styles.dalamkanan}>
                        <div className={styles.icon1}>
                            <GiKidSlide size={100} />
                        </div>
                        <div className={styles.icon2}>
                            <LuPackageSearch size={100} />
                        </div>
                        <div className={styles.icon3}>
                            <SiZincsearch size={100} />
                        </div>
                        <div className={styles.icon4}>
                            <TbDog size={100} />
                        </div>
                        <div className={styles.icon5}>
                            <FaCat size={100} />
                        </div>
                        <div className={styles.icon6}>
                            <TbCat size={100} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
