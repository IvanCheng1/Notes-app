const NOTES_STORAGE_KEY = "NOTES_STORAGE_KEY";

// const notes = ["Get a hair cut", "Buy some apples"];

export const getNotes = async (): Promise<string[] | []> => {
  // localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(["Welcome note"]))

  // const data = localStorage.getItem(NOTES_STORAGE_KEY);

  return getLocalStorage();
};

export const addNote = async (note: string) => {
  // const prevNotes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
  const notes = [...getLocalStorage(), note];
  
  // localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  setLocalStorage(notes)
};

export const deleteNote = async (note: string) => {
  // const prevNotes = JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
  const notes = getLocalStorage().filter((n: string) => n !== note);

  // localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  setLocalStorage(notes)
};

const getLocalStorage = (): string[] => {
  return JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || "[]");
}

const setLocalStorage = (notes: string[]): void => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

export {}; // to avoid TS error
