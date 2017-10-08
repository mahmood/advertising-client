import axios from 'axios';
import { FETCH_CATEGORY } from '../constants/actionTypes';
import { Platform } from 'react-native';
import config from '../constants/config';

// just for Development
let apiEndPoint;
if (Platform.OS === 'ios') {
  apiEndPoint = config.devApiEndPoint.ios;
} else {
  apiEndPoint = config.devApiEndPoint.android;  
}

export const fetchCategories = () => {
  return dispatch => {
    axios.get(`${apiEndPoint}/api/v1/category`)
      .then(res => {
        dispatch({ type: FETCH_CATEGORY, data: res.data.data });
      }).catch(error => {
        console.log(error);
      })
  }
};
