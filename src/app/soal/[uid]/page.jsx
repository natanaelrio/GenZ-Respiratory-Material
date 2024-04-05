import MainSoal from "@/component/mainSoal";
export const metadata = {
    title: 'SOAL ORGAN PERNAFASAN MANUSIA',
    description: 'SOAL ORGAN PERNAFASAN MANUSIA',
}

export default function Soalnya({ params }) {
    return (
        <MainSoal uidparam={params.uid} />
    )
}
