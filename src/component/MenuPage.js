import React from 'react';
import { View, StatusBar } from 'react-native';
import MenuListView from './MenuListView';

/**
 * The main page and it's responsible for showing all coupon items
 */
class MenuPage extends React.Component {

  // Header style follows the original app that has white text and red background
  static navigationOptions = {
    title: '選擇優惠卷',
    header: (/*navigation, defaultHeader*/) => ({
      titleStyle: {
        color: '#FFFFFF' 
      },
      style: {
        backgroundColor: '#FF0000'
      }
    })
  };

  // The page contains a header and a listview. Also, make the status bar text white
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
        />
        <MenuListView navigator={navigate} />
      </View>
    );
  }
}

export default MenuPage;
