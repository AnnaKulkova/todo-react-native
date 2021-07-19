import { combineReducers } from 'redux';
import todos from './todos';
import colors from './colors';

const todoApp = combineReducers({
  todos,
  colors,
});

export default todoApp;
