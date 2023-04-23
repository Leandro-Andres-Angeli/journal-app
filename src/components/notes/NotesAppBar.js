import React from 'react';
import { store } from '../../store/store';
import { getState, useDispatch } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
const NotesAppBar = () => {
  const storeData = store.getState();
  const dispatch = useDispatch();
  const {
    notes: { active: activeNote },
  } = storeData;
  const handleSave = () => {
    dispatch(startSaveNote({ ...activeNote }));
  };
  const handlePictureClick = () => {
    console.log('picture link');
    document.querySelector('#fileSelector').click();
  };
  const handleFileChange = (e) => {
    // console.log('file change');
    // console.log(e);
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };
  return (
    <div className='notes__appbar'>
      <span>28 08 2023</span>
      <input
        id='fileSelector'
        type='file'
        onChange={handleFileChange}
        style={{ display: 'none' }}
        name='file'
      />

      <div>
        <button className='btn' onClick={handlePictureClick}>
          picture
        </button>
        <button className='btn' onClick={handleSave}>
          save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
