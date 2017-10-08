import { combineReducers } from 'redux';
import productReducer from './productReducer'
import navReducer from './navReducer';
import catReducer from './categoryReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  product: productReducer,
  category: catReducer
});

export default rootReducer;
