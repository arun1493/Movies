import { createStore } from 'redux';
import createReducer from './reducer/index';

const configureStore = () => {
  const store = createStore(
    createReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

export default configureStore();
