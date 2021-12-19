import React, { Component, PureComponent } from "react";
import { StyleSheet, Image, TouchableOpacity, Text, Alert } from "react-native";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';




export default class FlipCard extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      cardStatus: props.cardStatus,
    };
  }
  
  blueImage =
    'https://i.pinimg.com/originals/e5/f6/a0/e5f6a0120330a1d50f000bb2a3c46ab1.jpg';

    getTitle =() => {
      if(this.props.cardStatus?.status){
        return this.props.cardStatus?.value;
      }
      return "";
    }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ cardStatus: nextProps.cardStatus });
  // }

  
  onPress() {
    this.props.handler();
  }
  render() {
    //console.log("enter" + this.props.cardStatus?.index);
    return (

      <TouchableOpacity style={styles.container} onPress={() => this.onPress()} style={{}}>
        <Card  style={styles.card_template} containerStyle={{ padding: 0 }} >
          <CardImage
            style={styles.card_image}
            source={{uri: this.blueImage}}
            title={this.getTitle}
          />
        </Card>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  card_template:{
    width: 125,
    height: 160,
    boxShadow: "10px 10px 10px -12px rgba(0,0,0,0.75)",
  },
  card_image: {
    width: 125,
    height: 160,
    borderRadius : 10,
  },
  text_container:{
    position: "absolute",
    width: 250,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
     color: "white",
    },
});