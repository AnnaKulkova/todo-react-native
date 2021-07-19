import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/actionTypes';
import { TodoState, Action } from '../types';

export default function todos(state: TodoState = [], action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          originalColor: action.payload.color,
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
    default:
      return state;
  }
}
