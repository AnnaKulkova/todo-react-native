import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import TodoList from '../../components/TodoList';
import AddButton from '../../components/AddButton';
import { useSelector } from 'react-redux';
import { IHomeScreen, ITodoItem } from '../../types';

const Home: FC<IHomeScreen> = ({ navigation }) => {
  const data = useSelector(state => state.todos);
  console.log(data);
  const handleButtonPress = () => {
    navigation.navigate('Edit', { status: 'new' });
  };
  const handleItemPress = (item: ITodoItem) => {
    navigation.navigate('Edit', { status: 'changed', item });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TodoList items={data} onItemPress={handleItemPress} />
      <AddButton style={styles.button} onPress={handleButtonPress} />
    </SafeAreaView>
  );
};

export default Home;
