import React, { Component, PureComponent } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Alert } from "react-native";

export default class FlipCard extends Component {
  constructor(props : any) {
    super(props);
    
  }
  onPress(){
    //this.props.navigation.goBack();
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.onPress()} style={{}}>
            <Text>{this.props.data}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  backIcon: {
    height: 16,
    width: 16,
    //tintColor:Color.mainColor,
    marginLeft:16,
  },
});
