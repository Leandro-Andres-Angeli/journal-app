import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NotesAppBar from './NotesAppBar';
import { store } from '../../store/store';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((store) => store.notes);
  // console.log(active);
  // let { id, title, body } = active;
  const [formValues, handleInputChange, reset] = useForm(note);
  const resetFormCallback = useCallback(() => {
    reset(note);
  }, [reset, note]);
  const activeId = useRef(note.id);
  useEffect(() => {
    if (activeId.current !== note.id) {
      resetFormCallback();
      console.log('render');
      activeId.current = note.id;
    }
  }, [note.id, resetFormCallback]);
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
    // console.log(formValues);
  }, [formValues, dispatch]);
  const handleDelete = () => {
    console.log(note.id);
    dispatch(startDeleting(note.id));
  };
  const { body, title } = formValues;
  return (
    <div className='notes__main-content'>
      {/* {JSON.stringify(note)} */}
      <NotesAppBar></NotesAppBar>
      <div className='notes__content'>
        <input
          type='text'
          // defaultValue={title || ''}
          // defaultValue={active.title}
          placeholder='some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          name='title'
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          // defaultValue={body || ''}
          // defaultValue={body}
          value={body}
          name='body'
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className='notes__image'>
            <img src={note.url} alt='' />
          </div>
        )}
      </div>
      <button className='btn btn-danger' onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};

export default NoteScreen;
