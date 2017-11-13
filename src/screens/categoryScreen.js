import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Container, Content, Icon } from 'native-base';
import CategoryItem from '../components/categoryItem';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';

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
  componentDidMount = () => {
    this.props.fetchCategories();
  }
  render() {
    return (
      <Container>
        <Content padder>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.props.category && this.props.category.map(item => <CategoryItem key={item.id} {...item} /> )}
          </View>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.reducer.category.data
  }
}


export default connect(mapStateToProps, { fetchCategories })(CategoryScreen);
