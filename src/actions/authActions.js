import { AUTH_USER, AUTH_USER_SUCCESS } from '../constants/actionTypes';
import axios from 'axios';
import config from '../constants/config';
import { AsyncStorage } from 'react-native';

export const signIn = data => {
  return dispatch => {
    axios.post(`${config.devApiEndPoint.ios}/api/v1/login`, data)
      .then(res => {
        try {
          AsyncStorage.setItem('token', res.data.token);
          dispatch({ type: AUTH_USER_SUCCESS, user: res.data.user, token: res.data.token });
        } catch (error) {
          console.log(error);
        }
      });
  }
};
