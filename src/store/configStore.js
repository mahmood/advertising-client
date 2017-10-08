import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const configStore = () => {
  const store = createStore (
    rootReducer,
    applyMiddleware(logger, thunk)
  );
  return store;
};

export default configStore;
