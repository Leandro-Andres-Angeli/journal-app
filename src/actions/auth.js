import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase_config';
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'pedro'));
    }, 3500);
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      });
  };
};
export const login = (uid, name) => ({
  type: types.login,
  payload: { uid, name },
});
