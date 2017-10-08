import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Icon } from 'native-base';

class CategoryScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'دسته ها',
    title: 'دسته ها',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="menu" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>دسته بندی</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  }
});

export default CategoryScreen;
