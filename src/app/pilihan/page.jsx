import LayoutHeaderFooter from '@/component/layoutHeaderFooter';
import PilihanUser from '@/component/pilihanUser';
export default function Pilihan() {
    return (

        <>
            <LayoutHeaderFooter kondisi={true}>
                <PilihanUser />
            </LayoutHeaderFooter>
        </>
    )
}
