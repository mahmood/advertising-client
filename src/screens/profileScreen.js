import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Icon } from 'native-base';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'پروفایل',
    title: 'پروفایل',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>پروفایل</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  }
});

export default ProfileScreen;
