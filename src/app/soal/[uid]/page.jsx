import MainSoal from "@/component/mainSoal";
export const dynamic = "force-dynamic";

export const metadata = {
    title: 'SOAL ORGAN PERNAFASAN MANUSIA',
    description: 'SOAL ORGAN PERNAFASAN MANUSIA',
}

async function getSoalABCD() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/dataabcd.json`, {
        method: "GET",
        next: { revalidate: 0 },
    });
    const data = await res.json();
    return data;
}


export default async function Soalnya({ params }) {
    const questions = await getSoalABCD();
    return (
        <MainSoal
            uidparam={params.uid}
            kondisiAkhir={true}
            kondisi={false}
            questions={questions} />
    )
}
