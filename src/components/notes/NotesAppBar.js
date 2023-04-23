import React from 'react';
import { store } from '../../store/store';
import { getState, useDispatch } from 'react-redux';
import { startSaveNote } from '../../actions/notes';
const NotesAppBar = () => {
  const storeData = store.getState();
  const dispatch = useDispatch();
  const {
    notes: { active: activeNote },
  } = storeData;
  const handleSave = () => {
    dispatch(startSaveNote({ ...activeNote }));
  };
  return (
    <div className='notes__appbar'>
      <span>28 08 2023</span>
      <div>
        <button className='btn'>picture</button>
        <button className='btn' onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
