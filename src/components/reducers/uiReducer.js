import { types } from '../../types/types';

const initialState = {
  loading: false,
  msgError: null,
};
export const uiReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,

        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,

        msgError: null,
      };

    default:
      return state;
  }
};