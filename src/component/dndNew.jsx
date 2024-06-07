'use client'

import React, { useState } from "react";
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Droppable from "@/component/Droppable";
import { useBearStore } from '@/zustand/store'
import { arrayMove, insertAtIndex, removeAtIndex } from "@/utils/array";
import { BiSolidDislike } from "react-icons/bi";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import styles from '@/component/dnd.module.css'

function DNDnew() {
    const setCurrentQuestion = useBearStore((state) => state.setCurrentQuestion)
    const currentQuestion = useBearStore((state) => state.currentQuestion)
    const handleKembali = () => {
        setCurrentQuestion(currentQuestion - 1)
    }
    const [kondisi, setKondisi] = useState(false)


    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomObjects = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const acakObject = shuffleArray(randomObjects)

    const [items, setItems] = useState({
        group1: acakObject,
        group2: []
    });

    const tasksReal = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const array1 = tasksReal.toString().replace(/,/g, '')
    const array2 = items.group2.toString().replace(/,/g, '')

    const handleDND = () => {
        array1 === array2 ? setCurrentQuestion(6) : setKondisi(true)
        // array1 === array2 ? console.log(true) : console.log(false)
    }


    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragOver = ({ over, active }) => {
        const overId = over?.id;

        if (!overId) {
            return;
        }

        const activeContainer = active.data.current.sortable.containerId;
        const overContainer = over.data.current?.sortable.containerId;

        if (!overContainer) {
            return;
        }

        if (activeContainer !== overContainer) {
            setItems((items) => {
                const activeIndex = active.data.current.sortable.index;
                const overIndex = over.data.current?.sortable.index || 0;

                return moveBetweenContainers(
                    items,
                    activeContainer,
                    activeIndex,
                    overContainer,
                    overIndex,
                    active.id
                );
            });
        }
    };

    const handleDragEnd = ({ active, over }) => {
        if (!over) {
            return;
        }

        if (active.id !== over.id) {
            const activeContainer = active.data.current.sortable.containerId;
            const overContainer = over.data.current?.sortable.containerId || over.id;
            const activeIndex = active.data.current.sortable.index;
            const overIndex = over.data.current?.sortable.index || 0;

            setItems((items) => {
                let newItems;
                if (activeContainer === overContainer) {
                    newItems = {
                        ...items,
                        [overContainer]: arrayMove(
                            items[overContainer],
                            activeIndex,
                            overIndex
                        )
                    };
                } else {
                    newItems = moveBetweenContainers(
                        items,
                        activeContainer,
                        activeIndex,
                        overContainer,
                        overIndex,
                        active.id
                    );
                }

                return newItems;
            });
        }
    };

    const moveBetweenContainers = (
        items,
        activeContainer,
        activeIndex,
        overContainer,
        overIndex,
        item
    ) => {
        return {
            ...items,
            [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
            [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
        };
    };

    return (
        <>
            <div className={styles.judulatas}>6. Urutkan Gambar Berikut 😁</div>
            <div className={styles.subjudul}>
                Urutkan gambar-gambar organ pernapasan dibawah ini, pindahkan gambar dari kolom kiri ke kolom yang kanan secara berurutan.
            </div>
            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
            >
                <div className={styles.containerStyle}>
                    {Object.keys(items).map((group) => (
                        <Droppable id={group} items={items[group]} key={group} />
                    ))}
                </div>
            </DndContext>
            {kondisi && <div className={styles.salahhh}>Belum Tepat yaaa...&nbsp; <BiSolidDislike /></div>}
            <div className={styles.luarbutton}>
                <FaArrowAltCircleLeft className={styles.iconbawah} onClick={handleKembali} />
                <button onClick={handleDND}>Lanjutkan</button>
            </div>
        </>
    );
}

export default DNDnew;
