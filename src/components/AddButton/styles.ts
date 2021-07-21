import { StyleSheet } from 'react-native';
import { alabaster, aquaForest } from '../../constants/colors';

const BUTTON_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    backgroundColor: aquaForest,
    borderRadius: BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: alabaster,
    fontSize: 50,
    borderWidth: 1,
    paddingLeft: 9,
    paddingBottom: 9,
  },
});

export default styles;
