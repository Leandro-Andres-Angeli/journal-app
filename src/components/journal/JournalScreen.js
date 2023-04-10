import React from 'react';
import Sidebar from './Sidebar';
// import NothingSelected from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';

const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      <Sidebar></Sidebar>
      <main>
        {/* <NothingSelected></NothingSelected> */}
        <NoteScreen></NoteScreen>
      </main>
    </div>
  );
};

export default JournalScreen;
