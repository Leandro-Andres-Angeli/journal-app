import React from 'react';

export const JournalEntry = ({ entry }) => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)',
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>lorem ipsum</p>
        <p className='journal__entry-content'>
          {entry} Irure tempor est sit eiusmod duis reprehenderit incididunt
          nulla id quis fugiat fugiat non et.
        </p>
        <div className='journal__entry-date-box'>
          <span>Monday</span>
          <h4>28</h4>
        </div>
      </div>
    </div>
  );
};
