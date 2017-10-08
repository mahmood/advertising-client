import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon } from 'native-base';
import configStore from './src/store/configStore';
import { Provider, connect } from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
//Redux Store
const store = configStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
