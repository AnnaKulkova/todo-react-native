import React, { FC } from 'react';
import { IColorPicker } from '../../types';
import { TouchableOpacity, View } from 'react-native';
import { dynamicStyles, styles } from './styles';

const ColorPicker: FC<IColorPicker> = ({
  colors,
  onColorPress,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {colors.map(color => (
        <TouchableOpacity
          style={dynamicStyles.color(color)}
          onPress={() => onColorPress(color)}
        />
      ))}
    </View>
  );
};

export default ColorPicker;
