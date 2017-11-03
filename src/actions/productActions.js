import axios from 'axios';
import { FETCH_PRODUCT } from '../constants/actionTypes';
import { NavigationActions } from 'react-navigation';
import { Platform } from 'react-native';
import config from '../constants/config';

// just for Development
let apiEndPoint;
if (Platform.OS === 'ios') {
  apiEndPoint = config.devApiEndPoint.ios;
} else {
  apiEndPoint = config.devApiEndPoint.android;  
}

export const fetchProducts = () => {
  return dispatch => {
    axios.get(`${apiEndPoint}/api/v1/product`)
      .then(res => {
        dispatch({ type: FETCH_PRODUCT, data: res.data });
      }).catch(error => {
        console.log(error);
      })
  }
};


export const goAdvDetails = data => dispatch => {
    const nav = NavigationActions.navigate({
      routeName: 'advDetails',
      // My route params
      params: { ...data },
      // in case you want to navigate into specific sub route
      action: NavigationActions.navigate({ routeName: 'advDetails' })
    });
    dispatch(nav);
}
