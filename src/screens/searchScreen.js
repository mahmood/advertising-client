import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, AsyncStorage } from 'react-native';
import { Button, Text, Icon, Item, Input, Form } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions/testActions';

class SearchScreen extends Component {
  constructor(props){
    super(props);

    this.onSearchFormSubmit = this.onSearchFormSubmit.bind(this);
    this.state = {
      search: '',
      searchHistory: []
    };
  }
  static navigationOptions = {
    tabBarLabel: 'جستجو',
    title: 'جستجو',
    headerTitleStyle: {
      fontSize: 19,
      fontFamily: 'IRANSansMobile',
      fontWeight: '400'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name="search" style={{color: tintColor}} />
    ),
  };
  
  componentDidMount = () => {
    AsyncStorage.getItem('searchHistory').then(value => {
      this.setState({ searchHistory: JSON.parse(value) });
    });
  }
  
  async onSearchFormSubmit () {
    const { search } = this.state;
    const history = this.state.searchHistory;
    const newHistory = [ ...history, { key: search } ];
    await AsyncStorage.setItem('searchHistory', JSON.stringify(newHistory));
    await AsyncStorage.getItem('searchHistory').then(value => {
      this.setState({ searchHistory: JSON.parse(value) });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Item last>
          <Input
            onSubmitEditing={this.onSearchFormSubmit}
            onChangeText={ (text) => this.setState({ search: text })  }
            returnKeyType="search" style={styles.searchBarInput}
            placeholder="متن جستجو"
          />
          <Icon active name='search' />
        </Item>
        {/* <Button onPress={() => this.props.goChat() }><Text>برو به چت</Text></Button> */}
        <View style={styles.searchHistoryContainer}>
          <FlatList
            data={this.state.searchHistory}
            renderItem={ (({ item }) => <Text style={styles.searchHistoryItem}>{item.key}</Text>) }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'flex-start',
  },
  searchBarInput: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign:'right',
    fontFamily: 'IRANSansMobile'
  },
  searchHistoryContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-start', 
    margin :10       
  },
  searchHistoryItem: {
    flex: 1,
    fontFamily: 'IRANSansMobile',
    fontSize: 17,
    textAlign: 'left',
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  }
});

export default connect(null, actions)(SearchScreen);
