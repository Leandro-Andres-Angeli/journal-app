import { getState } from 'react-redux';
import { db } from '../firebase/firebase_config';
import { types } from '../types/types';
import { startLoading } from './ui';
import { loadNotes } from '../helpers/loadNotes';
export const startNewNote = () => {
  return async (dispatch, getState) => {
    const {
      auth: { uid },
    } = getState();
    console.log(uid);
    const newNote = {
      title: '',
      body: '',
      createdAt: new Date().getTime(),
      userId: uid,
      isPrivate: false,
    };
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    console.log(doc);
  };
};
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};
