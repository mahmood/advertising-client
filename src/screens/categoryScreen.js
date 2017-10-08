import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Icon, Container, Content, Col, Row, Grid } from 'native-base';
import CategoryItem from '../components/categoryItem';

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
      <Container>
        <Content padder>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CategoryScreen;
