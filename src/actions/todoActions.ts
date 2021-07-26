import {
  ADD_TODO,
  ASYNC_ADD_TODO,
  ASYNC_CHANGE_TODO,
  ASYNC_DELETE_TODO,
  ASYNC_SET_TODO_LIST,
  ASYNC_TOGGLE_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  SET_TODO_LIST,
  TOGGLE_TODO,
} from '../constants/actionTypes';
import { ITodoItem } from '../types';

export const addTodo = (
  id: string,
  title: string,
  description: string,
  color: string,
) => ({
  type: ADD_TODO,
  payload: { id, title, description, color },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const changeTodo = (
  id: string,
  title: string,
  description: string,
  color: string,
) => ({
  type: CHANGE_TODO,
  payload: { id, title, description, color },
});

export const setTodoList = (todos: ITodoItem[]) => ({
  type: SET_TODO_LIST,
  payload: todos,
});

export const asyncToggleTodo = (item: ITodoItem) => ({
  type: ASYNC_TOGGLE_TODO,
  payload: { item },
});

export const asyncGetTodos = () => ({
  type: ASYNC_SET_TODO_LIST,
});

export const asyncDeleteTodo = (id: string) => ({
  type: ASYNC_DELETE_TODO,
  payload: { id },
});

export const asyncAddTodo = (item: {
  color: string;
  title: string;
  description: string;
}) => ({
  type: ASYNC_ADD_TODO,
  payload: { item },
});

export const asyncChangeTodo = (
  id: string,
  item: {
    color: string;
    title: string;
    description: string;
    completed: boolean;
  },
) => ({
  type: ASYNC_CHANGE_TODO,
  payload: { id, item },
});
