/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ExchangePage from './src/component/ExchangePage';
import MenuPage from './src/component/MenuPage';

const Navi = StackNavigator({
  Menu: { screen: MenuPage },
  Exchange: { screen: ExchangePage },
});

AppRegistry.registerComponent('mcdonald', () => Navi);
