import { StyleSheet } from 'react-native';
import { alabaster, aquaForest } from '../../constants/colors';
import { HEADER_TEXT_SIZE } from '../../constants/appConstants';

export const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 40,
    backgroundColor: aquaForest,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: alabaster,
    fontSize: HEADER_TEXT_SIZE,
  },
});
