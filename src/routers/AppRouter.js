import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
  // useRouteMatch
} from 'react-router-dom';
import JournalScreen from '../components/journal/JournalScreen';

import * as firebase from 'firebase/app';

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRouter } from './AuthRouter';

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);
  if (checking) {
    return (
      <div
        style={{
          backgroundColor: 'blue',
          color: 'white',
          width: '100%',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        {/* <Route
          path='/auth'
          component={!isLoggedIn ? AuthRouter : JournalScreen}
        ></Route> */}
        <Route path='/auth'>
          {isLoggedIn ? <Redirect to='/' /> : <AuthRouter />}
        </Route>
        <Route path='/' exact>
          {!isLoggedIn ? <Redirect to='/auth' /> : <JournalScreen />}
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
