import { getState } from 'react-redux';
import { db } from '../firebase/firebase_config';
import { types } from '../types/types';
import { startLoading } from './ui';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';
export const startNewNote = () => {
  return async (dispatch, getState) => {
    const {
      auth: { uid },
    } = getState();
    console.log(uid);
    const newNote = {
      title: '',
      body: '',
      // date: new Date().getTime(),
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

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const {
      auth: { uid },
    } = getState();
    if (!note.url) {
      delete note.url;
    }
    console.log(note);
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    //   .doc(note.id)
    //   .update(note);
    // dispatch(activeNote(doc.id, note));
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    ...note,
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    // console.log(file);
    // console.log(activeNote);
    const fileUrl = await fileUpload(file);
    console.log(fileUrl);
  };
};
