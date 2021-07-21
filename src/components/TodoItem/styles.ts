import { StyleSheet } from 'react-native';
import {
  DEFAULT_TEXT_SIZE,
  HEADER_TEXT_SIZE,
} from '../../constants/appConstants';
import { alabaster, lightGray } from '../../constants/colors';

export const dynamicStyles = (completed: boolean) => ({
  colorLine: (bgColor: string) => ({
    backgroundColor: bgColor,
    width: 5,
    marginRight: 5,
  }),
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    marginVertical: 1,
    backgroundColor: completed ? lightGray : alabaster,
  },
  title: {
    fontSize: HEADER_TEXT_SIZE,
    textDecorationLine: completed ? 'line-through' : 'none',
  },
  description: {
    marginTop: 5,
    fontSize: DEFAULT_TEXT_SIZE,
    textDecorationLine: completed ? 'line-through' : 'none',
  },
});

export const styles = StyleSheet.create({
  textWrapper: {
    width: '93%',
    padding: 10,
  },
});
