import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../constants/actionTypes';

export const addTodo = (id: string, text: string, color: string) => ({
  type: ADD_TODO,
  payload: { id, text, color },
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: { id },
});
