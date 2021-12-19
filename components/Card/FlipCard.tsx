import React, { Component, PureComponent } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Alert } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

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

<Card>
    <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Share"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction>
  </Card>

  
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
