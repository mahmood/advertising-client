import { combineReducers } from 'redux';
import productReducer from './productReducer'
import navReducer from './navReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  product: productReducer
});

export default rootReducer;
