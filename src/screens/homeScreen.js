import React, { Component } from 'react';
import { Container, Content, Icon } from 'native-base';
import ProductCard from '../components/productCard';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'خانه',
    title: 'خانه',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={{color: tintColor}} />
    ),
  };

  componentDidMount = () => {
    this.props.fetchProducts();
  }

  render() {
    return (
      <Container>
        <Content padder>
          {this.props.products && this.props.products.map(product => <ProductCard key={product.id} {...product}/>)}
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps,{ fetchProducts })(HomeScreen);
