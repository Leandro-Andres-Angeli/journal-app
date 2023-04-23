// {
//     notes:[],
// active : null || {
//     id:'afislnfsdn243424',
//     title:'',
//     body:'',
//     imagerUrl:'',
// date:123435}

import { types } from '../../types/types';

// }
const initialState = {
  notes: [],
  active: null,
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.notesUpdated:
      return {
        ...state,
        notes:
          state.notes.filter(({ id }) => id === action.payload.id).length === 0
            ? [...state.notes, action.payload]
            : state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
              ),
      };
    case types.deleteNote:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.notesLogoutCleaning:
      return initialState;
    // return { ...state, notes: { notes: [], active: null } };

    default:
      return state;
  }
};
