import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';
import MenuItem from '../MenuItem';

class MenuListView extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(MenuItem)
    };
  }

  renderItem(rowData) {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigator('Exchange', { data: rowData })}
        style={styles.listContainer}
      >
        <Image source={rowData.backgroundImage} style={styles.listItem}>
          <Text style={styles.listItemText}>{rowData.title}</Text>
        </Image>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderItem(rowData)}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    height: 120,
    alignItems: 'flex-end'
  },
  listItemText: {
    width: '50%',
    color: 'white',
    fontSize: 22,
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginLeft: 5,
    marginBottom: 5
  }
});

export default MenuListView;
