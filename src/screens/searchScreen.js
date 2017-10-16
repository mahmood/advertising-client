import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon, Item, Input, Form } from 'native-base';
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
        <Item last>
          <Input style={{ writingDirection: 'ltr', alignItems: 'flex-start', justifyContent: 'flex-start', textAlign:'right' }} placeholder="متن جستجو" />
          <Icon active name='search' />
        </Item>
        {/* <Button onPress={() => this.props.goChat() }><Text>برو به چت</Text></Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'flex-start',
  }
});

export default connect(null, actions)(SearchScreen);
