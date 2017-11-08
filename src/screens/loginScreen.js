import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon, Text, Item, Input, Button} from 'native-base';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

class ProfileScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.onLoginButtonPressed = this.onLoginButtonPressed.bind(this);
  }
  static navigationOptions = {
    title: 'ورود به حساب کاربری',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    }
  };

  onLoginButtonPressed(input) {
    this.props.signIn(input);
  }

  render () {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Item>
          <Input
            onSubmitEditing={this.onSearchFormSubmit}
            onChangeText={ email => this.setState({ email }) }
            style={styles.searchBarInput}
            placeholder="ایمیل"
          />
          <Icon active name='person' />
        </Item>
        <Item last>
          <Input
            onSubmitEditing={this.onSearchFormSubmit}
            onChangeText={ password => this.setState({ password })  }
            returnKeyType="send" style={styles.searchBarInput}
            placeholder="رمز عبور"
            secureTextEntry
          />
          <Icon active name='key' />
        </Item>
        <Button onPress={() => this.onLoginButtonPressed({email, password})} style={styles.loginButton} success block>
          <Text style={styles.loginButtonText}>وارد شوید</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    alignItems: 'flex-start'
  },
  searchBarInput: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign:'right',
    fontFamily: 'IRANSansMobile'
  },
  loginButton: {
    margin: 10,
  },
  loginButtonText: {
    fontFamily: 'IRANSansMobile'
  }
});

export default connect(null, { signIn })(ProfileScreen);
