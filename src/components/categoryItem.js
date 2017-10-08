import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';

class CategoryItem extends Component {
  renderIcon(slug) {
    switch(slug) {
      case 'car': 
        return 'car';
      case 'home-accesorry':
        return 'briefcase'
      case 'home':
        return 'home';
      case 'game':
        return 'game-controller-b';
      case 'animal':
        return 'logo-octocat';
      case 'music':
        return 'musical-notes'
      default:
        return 'infinite'
    }
  }
  render() {
    const { name, slug } = this.props;
    return (
      <TouchableOpacity onPress={() => Alert.alert(name)}>
      <View style={styles.box}>
        <Text style={styles.catIcon}><Icon style={{ fontSize: 35, color: '#424344' }} name={this.renderIcon(slug)} /></Text>
        <Text style={styles.catName}>{name}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

// Detect device width
let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  box: {
    width: (width - 40) / 2,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    padding: 15
  },
  catIcon: {
    marginBottom: 15,
  },
  catName: {
    fontFamily: 'IRANSansMobile',
    fontSize: 17,
    color: '#363738'
  }
});

export default CategoryItem;
