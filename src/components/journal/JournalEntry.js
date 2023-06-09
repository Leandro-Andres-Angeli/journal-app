import moment from 'moment';
import React from 'react';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';
export const JournalEntry = ({ id, title, body, url, date }) => {
  const dispatch = useDispatch();
  let noteDate = undefined;
  if (date) {
    noteDate = moment(date);
  }
  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, url }));
  };
  // console.log(props);
  return (
    <div
      className='journal__entry pointer  animate__animated animate__fadeIn'
      onClick={handleEntryClick}
    >
      {url && (
        <div
          className='journal__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>{title && title}</p>
        <p className='journal__entry-content'>{body && body}</p>
        <div className='journal__entry-date-box'>
          {noteDate && (
            <>
              <span>{noteDate.format('dddd')}</span>
              <h4>{noteDate.format('Do')}</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
