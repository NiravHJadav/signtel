
import React, { PureComponent, useState } from 'react';
import {
  FlatList,
  ListView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FlipCard from '../components/Card';



export class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: "hello",
      cards: [0, 1, 2, 3, 4, 5, 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 ,15]
    }

  }

  renderCards = (item , index:number) => {

   let carddata = {
      "index" : index
    }

    return (<FlipCard data={carddata}></FlipCard>);
  }

  render() {
    return (
      <SafeAreaView >
        <View>
          <FlatList
            data={this.state.cards}
            renderItem={({item, index}) => this.renderCards(item, index)}
            numColumns={3}  >
          </FlatList>
        </View>

      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});