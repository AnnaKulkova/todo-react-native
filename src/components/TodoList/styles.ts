import { Animated, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flatList: {
    flexGrow: 0.95,
  },
  removeButton: {
    flex: 0.2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 1,
  },
  toggleCard: {
    flex: 0.2,
    margin: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});

export const dynamicStyles = {
  removeButtonText: (translateX: Animated.AnimatedInterpolation) => ({
    transform: [{ translateX }],
  }),
};
