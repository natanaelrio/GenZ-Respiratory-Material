import HalamanMateri from '@/component/halamanMateri'
// import VideoPembelajaran from '@/component/videoPembelajaran'
import LayoutHeaderFooter from '@/component/layoutHeaderFooter';

export const metadata = {
  title: 'Materi ORGAN PERNAFASAN MANUSIA',
  description: 'Materi ORGAN PERNAFASAN MANUSIA',
}


export default async function Materi() {
  return (
    <LayoutHeaderFooter judul={''} kondisi={false}  >
      <HalamanMateri  />
      {/* <VideoPembelajaran /> */}
    </LayoutHeaderFooter>
  )
}
