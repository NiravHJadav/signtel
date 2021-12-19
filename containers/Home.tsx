import React, {Component, PureComponent, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FlipCard from '../components/Card';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'hello',
      cards: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      cardStatus: [],
      step: 0,
    };

    //const [cardStatus, setCardStatus] = useState([]);
  }

  componentDidMount(){
    this.start();
  }

  start =() => {
    let details: { index: number; status: boolean; }[] = [];

    this.state.cards.forEach(element => {
      details.push(this.getCardModel(element));
    });

    this.setState((state, props) => ({
      cardStatus: [...state.cardStatus, details],
    }));

    this.setState({
      step: this.state.step+1,
      cardStatus: details,
    });

    console.log(details);
    console.log(this.state.cardStatus);
  }

  

  getCardModel = (index: number) => {
    let carddata = {
      index: index,
      status: false,
    };
    return carddata;
  };

  renderCards = (item, index: number) => {
    return (<FlipCard cardStatus={this.state.cardStatus[index]} />);
  };

  render() {
    {this.start}
    return (
      <View>
        <View style={[styles.header]}>
          <Text style={styles.sectionTitle}>{this.state.step}</Text>
          <Button
             onPress={this.start}
            title="Start"
            color="#841584"
          />
        </View>
        <SafeAreaView>
          <View>
            <FlatList
              data={this.state.cards}
              renderItem={({item, index}) => this.renderCards(item, index)}
              numColumns={3}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    padding: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    //flex: 1,
    fontWeight: '700',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
