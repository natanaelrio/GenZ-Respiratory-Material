import HalamanHomeBaru3 from '@/component/halamanHomeBaru3'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'
import PilihanUser from '@/component/pilihanUser'
// import VideoPembelajaran from '@/component/videoPembelajaran'

export const metadata = {
  title: 'ORGAN PERNAFASAN MANUSIA',
  description: 'ORGAN PERNAFASAN MANUSIA',
}

export default function Home() {
  return (
    <LayoutHeaderFooter kondisi={false} bg={true}>
      <HalamanHomeBaru3 />
      <PilihanUser />
      {/* <VideoPembelajaran /> */}
    </LayoutHeaderFooter>
  )
}
