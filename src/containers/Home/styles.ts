import { StyleSheet } from 'react-native';
import { mercury } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mercury,
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
});

export default styles;
