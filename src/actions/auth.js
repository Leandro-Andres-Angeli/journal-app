import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase_config';
import { useDispatch } from 'react-redux';
import { finishLoading, startLoading, testAction } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(finishLoading());
      });
    // setTimeout(() => {
    //   dispatch(login(123, 'pedro'));
    // }, 3500);
  };
};
export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
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

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};
export const logout = () => ({
  type: types.logout,
});
