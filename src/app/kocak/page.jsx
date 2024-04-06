import Jawaban from "@/component/jawaban";
export const dynamic = "force-dynamic";

async function GetListProductID() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-jawaban`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_SECREET,
    },
    next: { revalidate: 0 },
  });
  const data = await res.json();
  return data?.data;
}

export default async function KocakGaming() {
  const dataID = await GetListProductID();
  return <Jawaban dataku={dataID} />;
}
