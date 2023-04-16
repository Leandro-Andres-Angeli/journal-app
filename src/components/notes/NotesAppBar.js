import React from 'react';
import { store } from '../../store/store';
import { getState } from 'react-redux';
const NotesAppBar = () => {
  const storeData = store.getState();

  return (
    <div className='notes__appbar'>
      <span>28 08 2023</span>
      <div>
        <button className='btn'>picture</button>
        <button className='btn'>save</button>
      </div>
    </div>
  );
};

export default NotesAppBar;
