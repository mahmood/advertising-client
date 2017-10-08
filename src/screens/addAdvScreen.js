import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Icon, Form,Container, Item, Input, Content } from 'native-base';

class AddAdvScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'افزودن آگهی',
    title: 'افزودن آگهی',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="add-circle" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <Content padder>
        <Form>
          <Item>
            <Input placeholder="نام آگهی" style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }}/>
          </Item>
          <Item>
            <Input placeholder="نام آگهی" style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }}/>
          </Item>
          <Item>
            <Input placeholder="نام آگهی" style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }}/>
          </Item>
          <Item>
            <Input placeholder="نام آگهی" style={{ textAlign: 'right', fontFamily: 'IRANSansMobile' }}/>
          </Item>
        </Form>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  }
});

export default AddAdvScreen;
