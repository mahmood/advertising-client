import { AUTH_USER } from '../constants/actionTypes';
import axios from 'axios';
import config from '../constants/config';


export const signIn = data => {
  return dispatch => {
    axios.post(`${config.devApiEndPoint.ios}/api/v1/login`, data)
      .then(res => {
        console.log(res);
      });
  }
};
