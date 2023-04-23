import React from 'react';
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

const JournalEntries = () => {
  const { notes: entries } = useSelector((state) => state.notes);
  // console.log(entries);
  return (
    <div className='journal__entries'>
      {entries?.map((entry) => (
        <JournalEntry key={entry.id} {...entry}></JournalEntry>
      ))}
    </div>
  );
};

export default JournalEntries;
