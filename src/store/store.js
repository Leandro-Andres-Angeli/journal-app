import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../components/reducers/authReducer';
import { notesReducer } from '../components/reducers/notesReducer';
import { uiReducer } from '../components/reducers/uiReducer';
const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  notes: notesReducer,
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
