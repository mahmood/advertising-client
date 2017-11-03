import React, { Component } from 'react';
import { View, StyleSheet, Image, Platform, Dimensions, Share, TouchableOpacity } from 'react-native';
import { Text, Icon, Form, Container, Item, Input, Content, Button } from 'native-base';
import config from '../constants/config';

class advDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'صفحه توضیحات آگهی',
    title: `${ navigation.state.params.data.name }`,
    headerTitleStyle: {
      fontSize: 17,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="add-circle" style={{color: tintColor}} />
    ),
  });
  loadImage(url) {
    // just for Development
    let apiEndPoint;
    if (Platform.OS === 'ios') {
      return `${config.devApiEndPoint.ios}/uploads/${url}`;
    } else {
      return `${config.devApiEndPoint.android}/uploads/${url}`;
    }
  }
  _shareTextMessage () {
    Share.share({
      message: 'Such sharing! Much wow!'
    })
      .then(this._showResult)
      .catch(err => console.log(err))
  }
  render() {
    const { image, name } = this.props.navigation.state.params.data;
    return (
      <Container style={styles.container}>
        <Content>
        <View style={styles.image}>
          <Image style={styles.imageInner} source={{ uri: this.loadImage(image) }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <Button style={styles.callButton} danger block>
              <Text style={styles.callButtonText}>تماس با آگهی دهنده</Text>
            </Button>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={this._shareTextMessage}>
              <Icon name="share" style={{ color: '#3d3d3d', textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}> 
          <Text style={styles.title}>{name}</Text>
        </View>
        </Content>
      </Container>
    );
  }
}

let { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
  },
  image: {
    flex: 1,
    alignItems: 'flex-end'
  },
  imageInner: {
    width,
    height: 400
  },
  callButton: {
    margin: 10,
  },
  callButtonText: {
    fontFamily: 'IRANSansMobile',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 5
  },
  titleContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 25  
  },
  title: {
    fontFamily: 'IRANSansMobile',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3d3d3d'
  }
});

export default advDetailsScreen;
