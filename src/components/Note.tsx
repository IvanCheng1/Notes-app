import React from "react";

function Note({ note, handleDelete }: { note: string; handleDelete: any }) {
  return (
    <div>
      <button value={note} onClick={handleDelete}>
        X
      </button>
      {note}
    </div>
  );
}

export default Note;
