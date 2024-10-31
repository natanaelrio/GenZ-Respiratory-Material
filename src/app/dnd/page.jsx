import MainSoal from "@/component/mainSoal";
export const dynamic = "force-dynamic";
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import DNDnew from '@/component/dndNew'
import styles from '@/component/soalABCD.module.css'


export const metadata = {
    title: 'SOAL ORGAN PERNAFASAN MANUSIA',
    description: 'SOAL ORGAN PERNAFASAN MANUSIA',
}

export default async function Soalnya({ params }) {
    return (
        <LayoutHeaderFooter kondisi={true} atas={false}>
            <div className={styles.containerdnd}>
                <DNDnew />
            </div>
        </LayoutHeaderFooter>
    )
}
