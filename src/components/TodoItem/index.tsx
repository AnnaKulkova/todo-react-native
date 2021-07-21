import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { dynamicStyles, styles } from './styles';
import { ITodoItem } from '../../types';
import { darkGray } from '../../constants/colors';

const TodoItem: FC<ITodoItem> = ({ color, title, description, completed }) => {
  return (
    <View style={dynamicStyles(completed).container}>
      <View
        style={dynamicStyles(completed).colorLine(
          completed ? darkGray : color ?? 'transparent',
        )}
      />
      <View style={styles.textWrapper}>
        <Text style={dynamicStyles(completed).title}>{title}</Text>
        <Text numberOfLines={2} style={dynamicStyles(completed).description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default TodoItem;
