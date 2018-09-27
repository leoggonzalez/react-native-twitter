import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default class App extends React.Component {
  handleClick() {
    Linking.openURL('https://www.advancedblockchain.com/');
  }
  render() {
    return (
      <View style={styles.navbar}>
        <Image style={styles.navbarLogo} source={{ uri: 'https://www.advancedblockchain.com/img/logo.png' }}/>
        <TouchableOpacity onPress={ this.handleClick }>
          <Text style={styles.navbarText}>About Us</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarLogo: {
    height: 31,
    width: 132,
  },
  navbarText: {
    color: '#86949b',
    fontWeight: 'bold',
  },
});
