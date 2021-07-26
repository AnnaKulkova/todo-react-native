import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CHANGE_TODO,
  SET_TODO_LIST,
} from '../constants/actionTypes';
import { TodoState, Action } from '../types';

export default function todos(state: TodoState = [], action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          color: action.payload.color,
          description: action.payload.description,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case CHANGE_TODO:
      const todosCopy = [...state];
      const changedTodo = todosCopy.find(todo => todo.id === action.payload.id);
      if (changedTodo) {
        changedTodo.title = action.payload.title;
        changedTodo.description = action.payload.description;
        changedTodo.color = action.payload.color;
      }
      return todosCopy;
    case SET_TODO_LIST:
      return action.payload;
    default:
      return state;
  }
}
