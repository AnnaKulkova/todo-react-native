import { StyleSheet } from 'react-native';

export const dynamicStyles = {
  color: (backgroundColor: string) => ({
    backgroundColor,
    width: 30,
    height: 30,
    marginBottom: 2,
  }),
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 2,
    borderColor: 'rgba(88,88,88,0.62)',
  },
});
