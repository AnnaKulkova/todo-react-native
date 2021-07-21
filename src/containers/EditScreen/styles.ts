import { StyleSheet } from 'react-native';
import { alabaster } from '../../constants/colors';
import {
  HEADER_TEXT_SIZE,
  MEDIUM_TEXT_SIZE,
} from '../../constants/appConstants';

export const dynamicStyles = {
  header: (backgroundColor: string) => ({
    backgroundColor,
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 3,
    flexDirection: 'row',
    width: '100%',
  }),
  colorButton: (backgroundColor: string) => ({
    height: 30,
    width: 30,
    backgroundColor,
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 5,
    borderColor: 'rgba(88,88,88,0.62)',
  }),
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    width: '65%',
    backgroundColor: alabaster,
    height: 30,
    fontSize: HEADER_TEXT_SIZE,
  },
  mainText: {
    minHeight: '80%',
    fontSize: MEDIUM_TEXT_SIZE,
    paddingHorizontal: 3,
    width: '100%',
  },
  colorPicker: {
    position: 'absolute',
    top: 42,
    right: '9%',
  },
  saveButton: {
    marginLeft: 10,
  },
});
