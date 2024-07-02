import HalamanMateri from '@/component/halamanMateri'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import MateriPertama from '@/component/materiPertama';

export const metadata = {
    title: 'Materi ORGAN PERNAFASAN MANUSIA',
    description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function MateriSatu() {
    return (
        <LayoutHeaderFooter judul={''} kondisi={false}  >
            <MateriPertama />
        </LayoutHeaderFooter>
    )
}
