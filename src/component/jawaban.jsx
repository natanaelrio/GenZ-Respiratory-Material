"use client";
import styles from "@/component/jawaban.module.css";

export default function Jawaban({ dataku }) {

  console.log(dataku);

  return (
    <div className={styles.container}>
      <div className={styles.isi}>{JSON.stringify(dataku)}</div>
    </div>
  );
}
