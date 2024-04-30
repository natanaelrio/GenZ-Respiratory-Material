"use client";
import styles from "@/component/jawaban.module.css";

export default function Jawaban({ dataku }) {
  return (
    <div className={styles.container}>
      <div className={styles.isi}>{JSON.stringify(dataku)}</div>
    </div>
  );
}
