import React from 'react';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { connect } from 'react-redux';
//Routes
import ChatScreen from '../screens/chatScreen';
import HomeScreen from '../screens/homeScreen';
import CategoryScreen from '../screens/categoryScreen';
import AddAdvScreen from '../screens/addAdvScreen';
import SearchScreen from '../screens/searchScreen';
import ProfileScreen from '../screens/profileScreen';

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  AddAds: { screen: AddAdvScreen },
  Search: { screen: SearchScreen },
  Profile: { screen: ProfileScreen },
}, {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarComponent: NavigationComponent,
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
      fontFamily: 'IRANSansMobile'
    }
  },
  bottomNavigationOptions: {
    shifting: false,
  }
});

export const AppNavigator = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
  advDetails: { screen: advDetails }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => {
  return {
    nav: state.nav,
  }
};

export default connect(mapStateToProps)(AppWithNavigationState);
