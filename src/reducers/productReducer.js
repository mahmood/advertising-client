import { FETCH_PRODUCT } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_PRODUCT:
      return { ...state, products: action.data };
    default:
      return state;
  }
}
