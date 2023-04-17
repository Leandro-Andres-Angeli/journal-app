import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import NotesAppBar from './NotesAppBar';
import { store } from '../../store/store';
import { useForm } from '../../hooks/useForm';

const NoteScreen = () => {
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

  const { body, title } = formValues;
  return (
    <div className='notes__main-content'>
      {JSON.stringify(note)}
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
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__textarea'
          // defaultValue={body || ''}
          // defaultValue={body}
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.url && (
          <div className='notes__image'>
            <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
