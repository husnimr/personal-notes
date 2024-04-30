import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiArchiveOut, BiArchiveIn } from "react-icons/bi";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
  return (
    <div className="note-item__action">
      <button
        id={id}
        onClick={() => onDeleteNote(id)}
        aria-label="Delete Button"
      >
        <BsFillTrashFill />
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive Button"
      >
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>
    </div>
  );
}

export default NoteItemAction;
