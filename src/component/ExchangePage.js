import React from 'react';
import { StyleSheet, Text, Image, TouchableHighlight, Alert } from 'react-native';

class ExchangePage extends React.Component {

  static navigationOptions = {
    title: '優惠卷',
    header: (navigation/*, defaultHeader*/) => ({
      titleStyle: {
        color: '#FFFFFF'
      },
      style: {
        backgroundColor: '#FF0000'
      },
      left: (
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Text style={{ color: '#FFFFFF', fontSize: 28, marginLeft: 10 }}>&lt;</Text>
        </TouchableHighlight>
      ),
      right: (
        <Text style={{ color: '#FFFFFF', marginRight: 10 }}>搜尋附近餐廳</Text>
      )
    })
  };

  state = {
    isUsed: false,
    countDown: 120,
    defaultText: '兌換優惠'
  };

  componentWillUnmount() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onExchange() {
    if (this.state.isUsed) {
      clearInterval(this.timer);
      this.setState({ isUsed: false, countDown: 120 });
    } else {
      Alert.alert('確認兌換優惠', '請確認你已經在麥當勞櫃檯，點選「立即兌換」後，需於兩分鐘內出示給結帳人員', [
        {
          text: '暫不兌換',
          onPress: () => console.log('Next time...')
        }, {
          text: '立即兌換',
          onPress: () => {
            this.setState({ isUsed: true });
            this.timer = setInterval(() => {
              this.setState({
                countDown: this.state.countDown - 1
              });
              if (this.state.countDown <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                this.setState({ isUsed: false, countDown: 120 });
              }
            }, 1000);
          }
        }
      ]);
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Image source={params.data.backgroundImage} style={styles.container}>

        <TouchableHighlight
          onPress={() => this.onExchange()}
          style={this.state.isUsed
          ? styles.buttonCountDown
          : styles.button}
        >
          <Text style={styles.buttonText}>
            {this.state.isUsed
              ? `優惠倒數   ${Math.floor(this.state.countDown / 60)}:${('0' + (this.state.countDown % 60)).slice(-2)}`
              : this.state.defaultText}
          </Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  button: {
    height: 50,
    backgroundColor: '#FDA63F',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCountDown: {
    height: 70,
    backgroundColor: '#FDA63F',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});

export default ExchangePage;
