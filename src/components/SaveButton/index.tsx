import React, { FC } from 'react';
import { ISaveButton } from '../../types';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const SaveButton: FC<ISaveButton> = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
