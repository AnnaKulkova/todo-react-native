import React, { FC, useCallback } from 'react';
import { FlatList, Swipeable } from 'react-native-gesture-handler';
import { Animated, ListRenderItem, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import TodoItem from '../TodoItem';
import { styles, dynamicStyles } from './styles';
import { alabaster } from '../../constants/colors';
import { useDispatch } from 'react-redux';
import { asyncDeleteTodo, asyncToggleTodo } from '../../actions/todoActions';
import { ITodoItem, ITodoList } from '../../types';

const TodoList: FC<ITodoList> = ({ items, onItemPress }) => {
  const dispatcher = useDispatch();
  const swipeRefs: Swipeable[] = [];
  const createSwipeRef = (ref: Swipeable) => {
    swipeRefs.push(ref);
  };
  const renderItem: ListRenderItem<ITodoItem> = ({ item, index }) => {
    const handlePress = () => {
      if (onItemPress) {
        onItemPress(item);
      }
    };
    const handleItemCheck = async () => {
      dispatcher(asyncToggleTodo(item));
      swipeRefs?.[index].close();
    };
    const handleRemoveButtonPress = async () => {
      dispatcher(asyncDeleteTodo(item.id));
    };

    const RightActions = (
      progress: Animated.AnimatedInterpolation,
      dragX: Animated.AnimatedInterpolation,
    ) => {
      const trans = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 25],
      });
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.removeButton}
          onPress={handleRemoveButtonPress}>
          <Animated.Text style={dynamicStyles.removeButtonText(trans)}>
            <Icon name="trash-can-outline" size={45} color={alabaster} />
          </Animated.Text>
        </TouchableOpacity>
      );
    };

    const LeftActions = (
      progress: Animated.AnimatedInterpolation,
      dragX: Animated.AnimatedInterpolation,
    ) => {
      const trans = dragX.interpolate({
        inputRange: [50, 100],
        outputRange: [0, 25],
      });
      return (
        <TouchableOpacity
          style={styles.toggleCard}
          activeOpacity={1}
          onPress={handleItemCheck}>
          <Animated.Text style={dynamicStyles.removeButtonText(trans)}>
            <Icon name="check-bold" size={45} color={alabaster} />
          </Animated.Text>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        ref={createSwipeRef}
        renderRightActions={RightActions}
        overshootRight={false}
        overshootLeft={false}
        renderLeftActions={LeftActions}>
        <TouchableOpacity onPress={handlePress} activeOpacity={1}>
          <TodoItem
            id={item.id}
            title={item.title}
            color={item.color}
            description={item.description}
            completed={item.completed}
          />
        </TouchableOpacity>
      </Swipeable>
    );
  };
  const keyExtractor = useCallback((data: ITodoItem) => data.id, []);
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.flatList}
    />
  );
};

export default TodoList;
