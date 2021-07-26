import React, { FC, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import TodoList from '../../components/TodoList';
import AddButton from '../../components/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import { IHomeScreen, ITodoItem } from '../../types';
import { asyncGetTodos } from '../../actions/todoActions';

const Home: FC<IHomeScreen> = ({ navigation }) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(asyncGetTodos());
  }, [dispatcher]);
  const data = useSelector(state => state.todos);
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
