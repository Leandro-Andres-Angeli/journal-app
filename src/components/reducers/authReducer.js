// {
//     uuid:12343253,
//     name:"user"
// }

import { types } from '../../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { uid: action.payload.uid, name: action.payload.name };
    case types.logout:
      console.log('switch');
      return {};
    default:
      return state;
  }
};
