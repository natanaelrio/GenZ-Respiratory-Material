'use client'
import { useState } from "react";
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    closestCorners,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Column } from "@/component/Column";
import styles from '@/component/soalDND.module.css'
import { useBearStore } from '@/zustand/store'
import { BiSolidDislike } from "react-icons/bi";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function SoalDND() {
    const setCurrentQuestion = useBearStore((state) => state.setCurrentQuestion)
    const currentQuestion = useBearStore((state) => state.currentQuestion)

    const handleKembali = () => {
        setCurrentQuestion(currentQuestion - 1)
    }

    const [terimakasih, setTerimaKasih] = useState(null)
    const [kondisi, setKondisi] = useState(false)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomObjects = [
        { id: 1, title: "hidung", url: 'hidung.jpg' },
        { id: 2, title: "faring", url: 'faring.jpg' },
        { id: 3, title: "laring", url: 'laring.jpg' },
        { id: 4, title: "trakea", url: 'trakea.jpg' },
        { id: 5, title: "bronkus", url: 'bronkus.jpg' },
        { id: 6, title: "bronkiolus", url: 'bronkiolus.jpg' },
        { id: 7, title: "paruparu", url: 'paruparu.jpeg' },
        { id: 8, title: "alveolus", url: 'alveolus.jpg' },
        { id: 9, title: "diafragma", url: 'diafragma.jpg' },
    ]

    const [tasksReal, setTasksReal] = useState([
        { id: 1, title: "hidung", url: 'hidung.jpg' },
        { id: 2, title: "faring", url: 'faring.jpg' },
        { id: 3, title: "laring", url: 'laring.jpg' },
        { id: 4, title: "trakea", url: 'trakea.jpg' },
        { id: 5, title: "bronkus", url: 'bronkus.jpg' },
        { id: 6, title: "bronkiolus", url: 'bronkiolus.jpg' },
        { id: 7, title: "paruparu", url: 'paruparu.jpeg' },
        { id: 8, title: "alveolus", url: 'alveolus.jpg' },
        { id: 9, title: "diafragma", url: 'diafragma.jpg' },
    ]);

    const acakObject = shuffleArray(randomObjects)

    const [tasks, setTasks] = useState(acakObject)

    const array1 = tasksReal.map((data) => data.id).toString().replace(/,/g, '')
    const array2 = tasks.map((data) => data.id).toString().replace(/,/g, '')

    const handleDND = () => {
        array1 === array2 ? setCurrentQuestion(6) : setKondisi(true)
    }

    console.log(array1);
    console.log(array2);
    console.log(tasks)

    const addTask = (title) => {
        setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setTasks((tasks) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks, originalPos, newPos);
        });
    };

    return (
        <>
            <div className={styles.dnd}>
                <h1>6. Urutkan Gambar Berikut 😁</h1>
                {/* <Input onSubmit={addTask} /> */}
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragEnd={handleDragEnd}
                >
                    <Column id="toDo" tasks={tasks} />
                </DndContext>
            </div>
            {kondisi && <div className={styles.salahhh}>Belum Tepat yaaa...&nbsp; <BiSolidDislike /></div>}
            <div className={styles.luarbutton}>
                <FaArrowAltCircleLeft className={styles.iconbawah} onClick={handleKembali} />
                <button onClick={handleDND}>Lanjutkan</button>
            </div>
        </>
    );
}
