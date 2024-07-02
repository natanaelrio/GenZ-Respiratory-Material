import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import MateriTiga from '@/component/materiTiga';

export const metadata = {
    title: 'Materi ORGAN PERNAFASAN MANUSIA',
    description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function MateriTigaa() {
    return (
        <LayoutHeaderFooter judul={''} kondisi={false}  >
            <MateriTiga />
        </LayoutHeaderFooter>
    )
}
