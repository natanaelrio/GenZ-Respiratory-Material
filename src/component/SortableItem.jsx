import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { MdOutlineDragIndicator } from "react-icons/md";

const SortableItem = (props) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: '100%',
    background: 'white',
    // height: 30,
    padding: 8,
    display: "flex",
    alignItems: "center",
    paddingLeft: 5,
    border: "1px solid gray",
    borderRadius: 5,
    marginBottom: 5,
    userSelect: "none",
    cursor: "grab",
    boxSizing: "border-box",
    gap: 5,
    justifyContent: 'space-between'
  };


  const tasksReal = [
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

  const judul = tasksReal.filter((data) => data.id == props.id)[0].title
  const urlgambar = tasksReal.filter((data) => data.id == props.id)[0].url
  const idnya = tasksReal.filter((data) => data.id == props.id)[0].id

  return (
    <div style={itemStyle} ref={setNodeRef} {...attributes} {...listeners}>
      <div>
        <Image src={`${process.env.NEXT_PUBLIC_URL}/${urlgambar}`} width={40} height={40} alt='hidung'></Image>
      </div>
      {idnya}.{judul}        <MdOutlineDragIndicator />
    </div>
  );
};

export default SortableItem;
