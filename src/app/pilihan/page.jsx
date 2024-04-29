import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import PilihanUser from '@/component/pilihanUser';
export const metadata = {
    title: 'ORGAN PERNAFASAN MANUSIA',
    description: 'ORGAN PERNAFASAN MANUSIA',
}

export default function Pilihan() {
    return (
        <>
            <LayoutHeaderFooter kondisi={true}>
                <PilihanUser />
            </LayoutHeaderFooter>
        </>
    )
}
