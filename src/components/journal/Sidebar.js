import React from 'react';
import JournalEntries from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { store } from '../../store/store';
import { startNewNote } from '../../actions/notes';

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  const handleLogout = () => {
    dispatch(startLogout());
    // localStorage.clear();
  };
  const userName = useSelector((store) => store.auth.name);

  return (
    <aside className='journal__sidebar'>
      <div className='journal__sidebar-navbar'>
        <h3 className='mt-5'>
          <i className='far fa-moon'></i>
          <span> Welcome {userName}</span>
        </h3>
        <button className='btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div
        className='journal__new-entry mt-5'
        role='button'
        onClick={handleAddNew}
      >
        <i className='far fa-calendar-plus fa-5x'></i>
        <p> New Entry</p>
      </div>
      <JournalEntries></JournalEntries>
    </aside>
  );
};

export default Sidebar;
