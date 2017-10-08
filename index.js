import { AppRegistry, I18nManager } from 'react-native';
import App from './App';

//Force RTL
I18nManager.forceRTL(true);

AppRegistry.registerComponent('DivarClient', () => App);
