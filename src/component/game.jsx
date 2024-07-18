'use client'
import styles from '@/component/game.module.css'
import { useEffect, useState } from 'react';
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

export default function Game() {
    useEffect(() => {
        // Memuat script dari Liveworksheets
        const script = document.createElement('script');
        script.src = 'https://www.liveworksheets.com/embed/embed.js?v=1';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Memanggil fungsi dari script yang telah dimuat
            if (window.loadliveworksheet) {
                window.loadliveworksheet(7773882, 's2xt', 924, 'www', 'new');
            }
        };

        return () => {
            // Membersihkan script saat komponen dilepas
            document.body.removeChild(script);
        };
    }, []);

    const GameSatu = () => {
        const script = document.createElement('script');
        script.src = 'https://www.liveworksheets.com/embed/embed.js?v=1';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Memanggil fungsi dari script yang telah dimuat
            if (window.loadliveworksheet) {
                window.loadliveworksheet(7773882, 's2xt', 924, 'www', 'new');
            }
        };

        return () => {
            // Membersihkan script saat komponen dilepas
            document.body.removeChild(script);
        };
    }

    const [game, setGame] = useState('kosong')

    return (
        <div className={styles.game}>
            <div className={styles.dalamjudul}>
                <div className={styles.judul}>
                    {game == 'kosong' && "Nah, pada bagian ini kalian dapat menyelesaikan tantangan 1 dan 2. Let's Go!!!" || game == '1' && "Nah, pada tantangan 1 ini anak - anak diminta untuk memindahkan nama - nama organ yang ada di atas untuk dipindahkan ke bawah pada kolom bergambar sesuai dengan nama organ tersebut!" || game == '2' && "Nah, pada tantangan 2 ini anak - anak diminta untuk memaikan game dengan mengarahkan pesawat untuk menabrak awan yang berisi jawaban dengan tepat!"}
                </div>
            </div>
            <div className={styles.ikon1} style={game == 'kosong' && { zIndex: "1" } || game == '1' && { zIndex: "-1000" } || game == '2' && { zIndex: "-1000" }} >
                <IoGameControllerOutline color='yellow' size={300} />
            </div>
            <div className={styles.ikon2} style={game == 'kosong' && { zIndex: "1" } || game == '1' && { zIndex: "-1000" } || game == '2' && { zIndex: "-1000" }} >
                <IoGameControllerOutline color='yellow' size={300} />
            </div>
            {game == 'kosong' &&
                <div className={styles.tombolgame}>
                    <div className={styles.tombolsatu} onClick={() => { setGame("1"), GameSatu() }}>
                        Tantangan 1 &nbsp;
                        <IoGameControllerOutline />
                    </div>
                    <div className={styles.tomboldua} onClick={() => setGame("2")}>
                        Tantangan 2&nbsp;
                        <IoGameControllerOutline />
                    </div>
                </div>
            }
            {
                game == "1" &&
                <div className={styles.satu}>
                    <iframe className={styles.gamedalam} style={{ maxWidth: '100%' }} src="https://wordwall.net/id/embed/ccc09565b53e424b8f9f09e9f4c7aa9c?themeId=52&templateId=3&fontStackId=0" frameborder="0" allowfullscreen></iframe>
                    <div className={styles.kembali} onClick={() => setGame("kosong")}><IoIosArrowBack /> &nbsp;Kembali</div>
                </div>
            }
            {
                game == "2" &&
                <>
                    <div className={styles.dua}>
                        <iframe className={styles.gamedalam} style={{ maxWidth: '100%' }} src="https://wordwall.net/embed/9cfa1544a21349499997f4ab373afb1d?themeId=46&templateId=48&fontStackId=0" frameborder="0" allowfullscreen></iframe>


                    </div>
                    <div className={styles.kembali} onClick={() => setGame("kosong")}><IoIosArrowBack /> &nbsp;Kembali</div>
                </>
            }
        </div >
    )
}
