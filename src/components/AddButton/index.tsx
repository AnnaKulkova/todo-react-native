import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './styles';
import { IAddButton } from '../../types';
import { alabaster } from '../../constants/colors';

const AddButton: FC<IAddButton> = ({ style, onPress }) => {
  return (
    <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
      <Icon name="plus" size={40} color={alabaster} />
    </TouchableOpacity>
  );
};

export default AddButton;
