import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    StyleSheet,
  } from 'react-native';
  

export class Index extends Component {
  render() {
    return (
      <View style={[{height:450,backgroundColor:"red"},styles.clr]}>        
      </View>
    );
  }
}
const styles = StyleSheet.create({
clr:{
    height:500,
    backgroundColor:"green",
}
});
export default Index;
