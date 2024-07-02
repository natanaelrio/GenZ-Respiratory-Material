import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import MateriDua from '@/component/materiDua';

export const metadata = {
    title: 'Materi ORGAN PERNAFASAN MANUSIA',
    description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function MateriDuaa() {
    return (
        <LayoutHeaderFooter judul={''} kondisi={false}  >
            <MateriDua />
        </LayoutHeaderFooter>
    )
}
