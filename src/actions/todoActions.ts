import {
  ADD_TODO,
  CHANGE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';

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
