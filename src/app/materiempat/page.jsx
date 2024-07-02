import MateriEmpat from '@/component/MateriEmpat';
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';

export const metadata = {
    title: 'Materi ORGAN PERNAFASAN MANUSIA',
    description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function MateriEmpatt() {
    return (
        <LayoutHeaderFooter judul={''} kondisi={false}  >
            <MateriEmpat />
        </LayoutHeaderFooter>
    )
}
