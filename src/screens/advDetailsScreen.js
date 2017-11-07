import React, { Component } from 'react';
import { View, StyleSheet, Image, Platform, Dimensions, Share, TouchableOpacity } from 'react-native';
import { phonecall } from 'react-native-communications';
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
    }
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
  shareProduct(productId) {
    Share.share({
      message: `${config.url}/ads/${productId}`
    })
      .then()
      .catch(err => console.log(err))
  }

  render() {
    const { id, image, name, category, telphone, description } = this.props.navigation.state.params.data;
    return (
      <Container style={styles.container}>
        <Content>
        <View style={styles.image}>
          <Image style={styles.imageInner} source={{ uri: this.loadImage(image) }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <Button onPress={() => phonecall(telphone, true)} style={styles.callButton} danger block>
              <Text style={styles.callButtonText}>تماس با آگهی دهنده</Text>
            </Button>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => this.shareProduct(id)}>
              <Icon name="share" style={{ color: '#3d3d3d', textAlign: 'center'}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontFamily: "IRANSansMobile", color: '#828282', fontSize: 14 }}>{category}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={{ fontFamily: "IRANSansMobile", fontSize: 17 ,textAlign: "left", lineHeight: 30, marginTop: 20 }}>{description}</Text>
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
    marginTop: 15
  },
  title: {
    fontFamily: 'IRANSansMobile',
    fontWeight: 'bold',
    fontSize: 21,
    color: '#3d3d3d'
  }
});

export default advDetailsScreen;
