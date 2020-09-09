import React from "react";

function Note({ note, handleDelete }: { note: string; handleDelete: any }) {
  return (
    <div>
      Note: {note}
      <button value={note} onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Note;
