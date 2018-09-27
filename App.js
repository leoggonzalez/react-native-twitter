import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './components/Navbar';
import TwitterFeed from './components/TwitterFeed';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bananas: false };
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <TwitterFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  }
})