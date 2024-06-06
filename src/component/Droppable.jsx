import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import SortableItem from "@/component/SortableItem";
import React from "react";
import styles from '@/component/dnd.module.css'

const Droppable = ({ id, items }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div className={styles.droppableStyle}>
                <div className={styles.judul}>{id == 'group1' ? 'Organ Pernapasan Manusia' : 'Urutan Organ Pernapasan Manusia'}</div>
                <div ref={setNodeRef} className={styles.isi}>
                    {items.map((item) => (
                        <SortableItem key={item} id={item} />
                    ))}
                </div>
                {<div className={styles.kotakshadow}>
                    {[...Array(9).keys()].map((i) => {
                        return (
                            <div className={styles.shadowkotak} key={i}>
                                {id == 'group2' && `kotak ke ${i + 1}`}
                            </div>
                        )
                    })}
                </div>}

            </div>
        </SortableContext>
    );
};

export default Droppable;
