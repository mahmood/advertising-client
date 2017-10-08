import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

class ChatScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const { state, setParams } = navigation;
      const isInfo = state.params.mode === 'info';
      const { user } = state.params;
      return {
        title: isInfo ? `${user}'اطلاعات` : `چت با ${state.params.user}`,
        headerRight: <Button title={isInfo ? 'تمام' : `اطلاعات ${user}`} onPress={ () => setParams({ mode: isInfo ? 'none' : 'اطلاعات'})}/>,
      }
    };
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>چت با { params.user }</Text>
        </View>
      );
    }
}

export default ChatScreen;
