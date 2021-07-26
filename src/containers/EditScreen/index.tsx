import React, { FC, useEffect, useRef, useState } from 'react';
import { IEditScreen } from '../../types';
import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import {
  amethyst,
  burntSienna,
  frolly,
  malibu,
  salomie,
  turquoiseBlue,
} from '../../constants/colors';
import { dynamicStyles, styles } from './styles';
import { useDispatch } from 'react-redux';
import { asyncAddTodo, asyncChangeTodo } from '../../actions/todoActions';
import ColorPicker from '../../components/ColorPicker';
import SaveButton from '../../components/SaveButton';

const COLORS = [burntSienna, frolly, amethyst, malibu, turquoiseBlue, salomie];

const EditScreen: FC<IEditScreen> = ({ route, navigation }) => {
  const { item, status } = route.params;
  const dispatcher = useDispatch();
  const [state, setState] = useState({
    title: item?.title ?? '',
    color: item?.color ?? burntSienna,
    description: item?.description ?? '',
  });
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);
  const titleRef = useRef<TextInput>(null);
  const handleTitleChange = (value: string) => {
    setState({
      ...state,
      title: value,
    });
  };
  const handleDescriptionChange = (value: string) => {
    setState({
      ...state,
      description: value,
    });
  };
  const handleButtonPress = async () => {
    if (status === 'new') {
      try {
        dispatcher(asyncAddTodo(state));
      } catch (e) {
        console.log(e);
      }
    }
    if (item && status === 'changed') {
      try {
        dispatcher(
          asyncChangeTodo(item.id, {
            ...state,
            completed: item.completed,
          }),
        );
      } catch (e) {
        console.log(e);
      }
    }
    navigation.goBack();
  };
  const handleColorPress = (color: string) => {
    setState({
      ...state,
      color,
    });
    setIsColorPickerVisible(false);
  };
  const handleColorPickerPress = () => {
    setIsColorPickerVisible(!isColorPickerVisible);
  };

  useEffect(() => {
    if (status === 'new' && titleRef.current) {
      titleRef.current.focus();
    }
  }, [status]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={dynamicStyles.header(state.color)}>
        <TextInput
          ref={titleRef}
          style={styles.title}
          value={state.title}
          onChangeText={handleTitleChange}
          placeholder="Do something amazing"
        />
        <TouchableOpacity
          style={dynamicStyles.colorButton(state.color)}
          onPress={handleColorPickerPress}
        />
        <SaveButton onPress={handleButtonPress} style={styles.saveButton} />
      </View>
      <TextInput
        style={styles.mainText}
        value={state.description}
        onChangeText={handleDescriptionChange}
        multiline
        placeholder="Description"
      />
      {isColorPickerVisible && (
        <ColorPicker
          containerStyle={styles.colorPicker}
          colors={COLORS}
          onColorPress={handleColorPress}
        />
      )}
    </SafeAreaView>
  );
};

export default EditScreen;
