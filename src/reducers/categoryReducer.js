import { FETCH_CATEGORY } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_CATEGORY: 
      return {...state, data: action.data};
    default: 
      return state;
  }
}
