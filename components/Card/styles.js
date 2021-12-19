
import { StyleSheet } from 'react-native';
//import { Device, Color, Constants } from '@common';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer:{
    paddingBottom:110,
  },

  bottomContainer: {
    height: 80,
    shadowColor: 'rgba(0,0,0,0.08)',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation:15,
  },

  card: {
    width : 50%,
  }

});
