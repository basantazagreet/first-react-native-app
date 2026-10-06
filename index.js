/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import CustomModal from './components/CustomModal';
import StatusBarDemo from './components/StatusBarDemo';
import ResponsiveLayoutDemo from './components/ResponsiveLayoutDemo';
import StackNavigationDemo from './components/StackNavigationDemo';
import TabNavigatorDemo from './components/TabNavigatorDemo';


AppRegistry.registerComponent(appName, () => App);
