/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);