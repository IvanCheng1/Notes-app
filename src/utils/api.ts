const NOTES_STORAGE_KEY = "NOTES_STORAGE_KEY";

// const notes = ["Get a hair cut", "Buy some apples"];

export const getNotes = async (): Promise<string[] | []> => {
  // localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(["Welcome note"]))

  const data = localStorage.getItem(NOTES_STORAGE_KEY);

  // if (typeof data === "string") {
  //   return JSON.parse(data)
  // }

  return JSON.parse(data || "[]");
};

export const addNote = async (note: string) => {
  const prevNotes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
  const notes = [...prevNotes, note];

  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};

export const deleteNote = async (note: string) => {
  const prevNotes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
  const notes = prevNotes.filter((n: string) => n !== note);
  
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};

export {}; // to avoid TS error
