import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions/testActions';

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'جستجو',
    title: 'جستجو',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>جستجو</Text>
        <Button onPress={() => this.props.goChat() }><Text>برو به چت</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  }
});

export default connect(null, actions)(SearchScreen);
