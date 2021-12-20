import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
  View,
} from 'react-native';
export default class FlipCard extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      cardStatus: props.cardStatus,
    };
  }

  blueImage =
    'https://i.pinimg.com/originals/e5/f6/a0/e5f6a0120330a1d50f000bb2a3c46ab1.jpg';

  getTitle = () => {
    console.log(this.props.cardStatus?.status);
    if (this.props.cardStatus?.status) {
      return this.props.cardStatus?.value;
    }
    return '';
  };

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ cardStatus: nextProps.cardStatus });
  // }

  onPress() {
    this.props.handler(this.props.cardStatus.index);
  }
  render() {
    //console.log("enter" + this.props.cardStatus?.index);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.onPress()}
        style={{}}>
        <View style={styles.container}>
          <ImageBackground
            source={this.blueImage}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text}>{this.getTitle()}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    margin: 5,
  },
  card_template: {
    width: 125,
    height: 160,
    boxShadow: '10px 10px 10px -12px rgba(0,0,0,0.75)',
  },
  card_image: {
    width: 125,
    height: 160,
    borderRadius: 10,
  },
  text_container: {
    position: 'absolute',
    width: 250,
    height: 30,
    bottom: 0,
    padding: 5,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: 'white',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width: 90,
    height: 130,
    borderRadius: 1,
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: "#000000c0"
  },
});
