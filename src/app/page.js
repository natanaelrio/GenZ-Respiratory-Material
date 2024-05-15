import HalamanHomeBaru2 from '@/component/halamanHomeBaru2'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'
import SoalDND from '@/component/soalDND'

export const metadata = {
  title: 'ORGAN PERNAFASAN MANUSIA',
  description: 'ORGAN PERNAFASAN MANUSIA',
}

export default function Home() {
  return (
    <LayoutHeaderFooter kondisi={false} bg={true}>
      <HalamanHomeBaru2 />
      <SoalDND />
    </LayoutHeaderFooter>
  )
}
