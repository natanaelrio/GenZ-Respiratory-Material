import styles from '@/component/halamanHomeBaru2.module.css'
import Link from 'next/link';

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

import { FaLungs } from "react-icons/fa6";
import { FaDiagnoses } from "react-icons/fa";
import { FaVirus } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { MdEmojiPeople } from "react-icons/md";
import { FaLungsVirus } from "react-icons/fa";

import { FaArrowRight } from "react-icons/fa6";
export default function HalamanHomeBaru2() {
    return (
        <>
            <div className={styles.isiluar}>
                <div className={styles.kiri}>
                    <div className={styles.dalamkiri}>
                        <div className={styles.icon1}>
                            <FaLungs size={100} />
                        </div>
                        <div className={styles.icon2}>
                            <FaDiagnoses size={100} />
                        </div>
                        <div className={styles.icon3}>
                            <FaVirus size={100} />
                        </div>
                        <div className={styles.icon4}>
                            <LuBone size={100} />
                        </div>
                        <div className={styles.icon5}>
                            <MdEmojiPeople size={100} />
                        </div>
                        <div className={styles.icon6}>
                            <FaLungsVirus size={100} />
                        </div>
                    </div>
                </div>

                <div className={styles.isi}>
                    <div className={styles.tengah}>
                        <div className={styles.judul}>Hai anak-anak, selamat datang</div>
                        <div className={styles.subjudul}> Pada website ini kita dapat belajar organ sistem pernapasan manusia. Silahkan klik Masuk untuk melanjutkan.</div>
                        <div className={styles.masuk}>
                            <Link href='/pilihan' target='_blank'>
                                <button>MASUK &nbsp; <FaArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.kanan}>
                    <div className={styles.dalamkanan}>
                        <div className={styles.icon1}>
                            <FaLungs size={100} />
                        </div>
                        <div className={styles.icon2}>
                            <FaDiagnoses size={100} />
                        </div>
                        <div className={styles.icon3}>
                            <FaVirus size={100} />
                        </div>
                        <div className={styles.icon4}>
                            <LuBone size={100} />
                        </div>
                        <div className={styles.icon5}>
                            <MdEmojiPeople size={100} />
                        </div>
                        <div className={styles.icon6}>
                            <FaLungsVirus size={100} />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
