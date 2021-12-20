import React, {Component} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';

import FlipCard from '../components/Card';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'hello',
      cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      cardStatus: [],
      step: 0,
      lastSelected: 0,
      randoms: [],
    };

    //const [cardStatus, setCardStatus] = useState([]);
  }

  componentDidMount() {
    this.start();
  }

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  start = () => {
    const min = 1;
    const max = 100;
    let tempList = [];
    for (i = 0; i < 6; i++) {
      const rand = min + Math.random() * (max - min);
      tempList.push(parseInt(rand, 10));
    }
    tempList.forEach(element => {
      tempList.push(element);
    });

    let shuffled = this.shuffleArray(tempList);
    console.log(shuffled);

    let details: {index: number; status: boolean}[] = [];

    this.state.cards.forEach((key, element) => {
      details.push(this.getCardModel(element, shuffled[key]));
    });

    this.setState((state, props) => ({
      cardStatus: [...state.cardStatus, details],
    }));

    this.setState({
      // step: this.state.step+1,
      cardStatus: details,
    });

    this.setState({
      step: 0,
    });

    console.log(details);
    console.log(this.state.cardStatus);
  };

  getCardModel = (index: number, value: number) => {
    let carddata = {
      index: index,
      status: false,
      value: value,
    };
    return carddata;
  };

  renderCards = (item, index: number) => {
    return (
      <FlipCard
        handler={this.handleClick}
        cardStatus={this.state.cardStatus[index]}
      />
    );
  };

  //Logic

  handleClick = (index: number) => {
    console.log('handleClick');

    let c = this.state.cardStatus;
    if (c[index].status) {
      return;
    }
    c[index].status = true;
    this.setState({
      cardStatus: c,
    });

    if ((this.state.step + 1) % 2 !== 0) {
      console.log('inside if');

      this.setState({
        lastSelected: index,
      });
    } else {
      let previousValue = c[this.state.lastSelected].value;
      if (previousValue !== c[index].value) {
        c[index].status = false;
        c[this.state.lastSelected].status = false;

        this.setState({
          cardStatus: c,
        });
      }
    }

    this.setState({
      step: this.state.step + 1,
    });
    let won = true;

    this.state.cardStatus.forEach(element => {
      if (!element.status) {
        won = false;
      }
    });

    if (won) {
      ToastAndroid.showWithGravityAndOffset(
        'Congratulations!!! you have won!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  render() {
    {
      this.start;
    }
    return (
      <View>
        <View style={[styles.header]}>
          <Text style={styles.sectionTitle}> Steps : {this.state.step}</Text>
          <Button onPress={this.start} title="Re-Start" color="#841584" />
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
