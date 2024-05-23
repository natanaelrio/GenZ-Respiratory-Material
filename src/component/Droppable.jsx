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
                <div className={styles.judul}>{id == 'group1' ? 'Acak' : 'Uruttan'}</div>
                <div ref={setNodeRef} className={styles.isi}>
                    {items.map((item) => (
                        <SortableItem key={item} id={item} />
                    ))}
                </div>

            </div>
        </SortableContext>
    );
};

export default Droppable;
