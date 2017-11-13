import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const config =  {
  key: 'primary',
  blacklist: ['nav'],
  storage
}

let reducer = persistCombineReducers(config, rootReducer);

console.log(reducer)

const configStore = () => {
  const store = createStore (
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    )
  );
  const persistor = persistStore(store)
  return { persistor, store }
};

export default configStore;
