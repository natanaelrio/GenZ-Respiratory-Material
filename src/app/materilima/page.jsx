import MateriLima from '@/component/MateriLima';
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';

export const metadata = {
    title: 'Materi ORGAN PERNAFASAN MANUSIA',
    description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function MateriLimaa() {
    return (
        <LayoutHeaderFooter judul={''} kondisi={false}  >
            <MateriLima />
        </LayoutHeaderFooter>
    )
}
