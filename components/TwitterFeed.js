import React, { Component } from 'react'
import { Image, TouchableOpacity, Text, View, WebView, StyleSheet, Linking } from 'react-native';

export default class WebViewExample extends Component {
  navigationStateChangedHandler = ({ url }) => {
    if (url.startsWith('https://') && url !== this.props.url) {
      this.WebView.stopLoading();
    }
  };
  handleClick() {
    Linking.openURL('https://twitter.com/BlockchainAG');
  }
  render() {
    const {url, ...props} = this.props;
    return (      
      <View  style={styles.container}>
        <Text style={styles.title}>Twitter</Text>
        <WebView
          {...props}
          onNavigationStateChange={this.navigationStateChangedHandler}
          source={{
            html:
              '<a class="twitter-timeline" href="https://twitter.com/BlockchainAG?ref_src=twsrc%5Etfw">Tweets by BlockchainAG</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
          }}
          ref={c => this.WebView = c}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleClick}>
          <Image style={styles.buttonImage} source={{ uri: 'https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2%2Ficons%2Fon_color_large.png%3Fversion%3D0?ixlib=rails-2.1.3&w=240&h=240&auto=compress&s=90f12c8651ef9ece65a943c29a135bed' }} />
          <Text style={styles.buttonText}>Follow Us</Text>
        </TouchableOpacity>
      </View>
    ) 
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 20,
  },
  title: {
    color: '#323b40',
    fontSize: 28,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0F8EC7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonImage: {
    height: 30,
    width: 30,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
  }
})