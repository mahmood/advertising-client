import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'native-base';

class CategoryItem extends Component {
  render() {
    
    return (
      <TouchableOpacity onPress={() => Alert.alert('s')}>
      <View style={styles.box}>
        <Text style={styles.catIcon}><Icon style={{ fontSize: 35, color: '#424344' }} name="home" /></Text>
        <Text style={styles.catName}>املاک</Text>
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
