import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { MdOutlineDragIndicator } from "react-icons/md";
import styles from '@/component/soalDND.module.css'

export const Task = ({ id, title, url }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={styles.task}
        >
            {/* <input type="checkbox" className="checkbox" /> */}
            <div className='atas'>
                <span>
                    {id}
                </span>
                <MdOutlineDragIndicator className={style.icon} />
            </div>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/${url}`} alt={title} width={100} height={100} />
        </div>

    );
};
