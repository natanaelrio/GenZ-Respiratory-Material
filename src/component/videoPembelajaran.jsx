import styles from '@/component/videopembelajaran.module.css'

export default function VideoPembelajaran() {

    const VideoYoutube = ({ id }) => {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0&playsinline=1&loop=1&controls=1&disablekb=1`}
                // frameborder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
        )
    }
    return (
        <div className={styles.video}>
            <div className={styles.judul}>Video Pembelajaran</div>
            <div className={styles.content}>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'zeapAktaeyg'} />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'AKW3Zen8DD4'} />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'r_ELNHrfyPE'} />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'VK7_QpcIGTQ'} />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'3HRDOa8jomA'} />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.videobg}>
                        <VideoYoutube id={'kdpDjHV87zc'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
