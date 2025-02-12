import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets';

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.appColor
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row'
  },  
  text1: {
    marginLeft: 10
  },
  text2: {
    color: COLORS.appColor, 
    fontWeight: '400'
  },
  seperator: {
    borderLeftWidth: 1,
    borderLeftColor: COLORS.darkGray,
    marginRight: 10
  }
});

export default styles;