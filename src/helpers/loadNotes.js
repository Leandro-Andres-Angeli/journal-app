import { db } from '../firebase/firebase_config';

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  // const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  //   console.log(notesSnap);
  let notes = [];
  notesSnap.forEach((snapChild) => {
    notes.push({ id: snapChild.id, ...snapChild.data() });
  });
  // db.collection(`${uid}/journal/notes`).onSnapshot((snap) => {
  //   snap.forEach((snapChild) => {
  //     console.log(snapChild.data());
  //     notes.push({ id: snapChild.id, ...snapChild.data() });
  //   });
  //   // notes.push({ id: snapChild.id, ...snapChild.data });
  // });
  // console.log(notes);
  return notes;
};
