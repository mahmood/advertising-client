import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'native-base';

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'پروفایل',
    title: 'پروفایل',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}}/>
    ),
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={style.menuItem}>
          <TouchableOpacity onPress={() => console.log ('sd')}>
            <Text style={styles.loginButton}>وارد شوید</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'flex-start'
  },
  menuItem: {
    alignSelf: 'stretch',
    borderBottomColor: '#ababab',
    borderBottomWidth: 1
  },
  loginButton: {
    fontFamily: "IRANSansMobile",
    padding: 10,
    textAlign: 'left'
  }
});

export default ProfileScreen;
