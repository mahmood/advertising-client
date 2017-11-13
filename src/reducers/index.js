import { combineReducers } from 'redux';
import productReducer from './productReducer'
import navReducer from './navReducer';
import catReducer from './categoryReducer';
import authReducer from './authReudcer';

const rootReducer = combineReducers({
  auth: authReducer,
  nav: navReducer,
  product: productReducer,
  category: catReducer
});

export default {
  reducer: rootReducer
};
