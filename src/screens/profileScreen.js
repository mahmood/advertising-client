import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'native-base';
import { connect } from 'react-redux';

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
        {!this.props.auth.isLoggedIn ?
        <View style={styles.menuItem}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginButton}>وارد شوید</Text>
          </TouchableOpacity></View> : <Text></Text>}
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

function mapStateToProps(state) {
  return {
    auth: state.reducer.auth
  }
}

export default connect(mapStateToProps)(ProfileScreen);
