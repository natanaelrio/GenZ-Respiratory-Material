import HalamanHomeBaru from '@/component/halamanHomeBaru'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter'

export const metadata = {
  title: 'ORGAN PERNAFASAN MANUSIA',
  description: 'ORGAN PERNAFASAN MANUSIA',
}

export default function Home() {
  return (
    <LayoutHeaderFooter kondisi={false} bg={true}>
      <HalamanHomeBaru />
    </LayoutHeaderFooter>
  )
}
