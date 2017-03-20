import React from 'react';
import { View, StatusBar } from 'react-native';
import MenuListView from './MenuListView';

class MenuPage extends React.Component {
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
