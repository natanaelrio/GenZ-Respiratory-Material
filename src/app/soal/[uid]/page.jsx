import MainSoal from "@/component/mainSoal";
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';

export const metadata = {
    title: 'SOAL ORGAN PERNAFASAN MANUSIA',
    description: 'SOAL ORGAN PERNAFASAN MANUSIA',
}

export default function Soalnya({ params }) {
    return (
        <LayoutHeaderFooter kondisi={false}>
            <MainSoal
                uidparam={params.uid}
                kondisiAkhir={true}
                kondisi={false} />
        </LayoutHeaderFooter>
    )
}
