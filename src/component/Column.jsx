
import {
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Task } from "@/component/task";
import styles from '@/component/soalDND.module.css'

export const Column = ({ tasks }) => {
    return (
        <div className={styles.column}>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id} title={task.title} url={task.url} />
                ))}
            </SortableContext>
        </div>
    );
};
