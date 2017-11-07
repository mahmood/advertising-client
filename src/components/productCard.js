import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { goAdvDetails } from '../actions/productActions';
import { connect } from 'react-redux';
import config from '../constants/config';
import moment from 'moment-jalaali';
moment.loadPersian();

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.onAdvPressed = this.onAdvPressed.bind(this);
  }
  loadImage(url) {
    // just for Development
    let apiEndPoint;
    if (Platform.OS === 'ios') {
      return `${config.devApiEndPoint.ios}/uploads/${url}`;
    } else {
      return `${config.devApiEndPoint.android}/uploads/${url}`;
    }
  }
  onAdvPressed(data) {
    this.props.goAdvDetails(data);
  }
  render() {
    const { name, price, image, category, telphone ,created_at, id, description } = this.props;
    const data = { id, name, price, image, category, telphone, description, created_at };
    return (
      <TouchableOpacity onPress={() => this.onAdvPressed({ id, data })}>
        <View style={styles.cart}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{name}</Text>
            <View style={styles.cartInfoDetail}>
              <Text style={styles.cartInfoTime}>{moment(created_at, "YYYY-MM-DD h:m:s").format("jD jMMMM jYYYY")}</Text>
              <Text style={styles.cartInfoPrice}>{price} تومان </Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image style={styles.imageInner} source={{ uri: this.loadImage(image) }} />
          </View>
        </View>
      </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'flex-start',
    flexDirection: 'row',
    marginBottom: 10
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10
  },
  cartInfoDetail: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  cartInfoTime: {
    fontFamily: 'IRANSansMobile',
    fontWeight: '100',
    fontSize: 13
  },
  cartInfoPrice: {
    fontFamily: 'IRANSansMobile',
    fontWeight: '400',
    fontSize: 14
  },
  infoText: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'IRANSansMobile'
  },
  image: {
    flex: 1,
    alignItems: 'flex-end'
  },
  imageInner: {
    width: 170,
    height: 150
  }
});

export default connect(null, { goAdvDetails })(ProductCard);
