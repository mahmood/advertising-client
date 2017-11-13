import { AUTH_USER_SUCCESS } from '../constants/actionTypes'

const initialState = { isLoggedIn: false, user: {}, token: '' };

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTH_USER_SUCCESS:
      return { ...state, user: action.user, token: action.token, isLoggedIn: true };
    default: 
      return state;
  }
};
