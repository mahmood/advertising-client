import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import configStore from './src/store/configStore';
import { Provider, connect } from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
import { PersistGate } from 'redux-persist/es/integration/react';

export default class App extends Component {
  render() {
    const store = configStore();
    return (
      <Provider store={store.store}>
        <PersistGate loading={<Text>loading</Text>} persistor={store.persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
