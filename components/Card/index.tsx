import React, { Component, PureComponent } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Alert } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class FlipCard extends Component {
  constructor(props: any) {
    super(props);

  }
  onPress() {
    //this.props.navigation.goBack();
  }
  render() {
    return (
      
      <TouchableOpacity style={styles.container} onPress={() => this.onPress()} style={{}}>

        <Card  style={styles.card_template} containerStyle={{ padding: 0 }} >
          <CardImage 
            style={styles.card_image}
            source={{ uri: '../assets/solid.png' }}
            title={this.props.data.index}
          />

        </Card>


      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template:{
    width: 125,
    height: 200,
    boxShadow: "10px 10px 10px -12px rgba(0,0,0,0.75)"
  },
  card_image: {
    width: 125,
    height: 200,
    borderRadius : 10
  },
  text_container:{
    position: "absolute",
    width: 250,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_title: {
     color: "white",

  }
});

