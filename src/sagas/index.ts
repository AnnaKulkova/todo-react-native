import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import api from '../network/todosClient';
import {
  addTodo,
  changeTodo,
  deleteTodo,
  setTodoList,
  toggleTodo,
} from '../actions/todoActions';
import {
  ASYNC_ADD_TODO,
  ASYNC_CHANGE_TODO,
  ASYNC_DELETE_TODO,
  ASYNC_SET_TODO_LIST,
  ASYNC_TOGGLE_TODO,
} from '../constants/actionTypes';
import { ITodoItem } from '../types';

function* asyncGetTodos() {
  try {
    const { data } = yield call(api.get);
    yield put(setTodoList(data.body.todos));
  } catch (e) {
    console.log(e);
  }
}

function* asyncToggleTodo(action: {
  type: string;
  payload: { item: ITodoItem };
}) {
  const { item } = action.payload;
  try {
    yield call(api.patch, item.id, { ...item, completed: !item.completed });
    yield put(toggleTodo(item.id));
  } catch (e) {
    console.log(e);
  }
}
function* asyncAddTodo(action: {
  type: string;
  payload: { item: { title: string; description: string; color: string } };
}) {
  const { item } = action.payload;
  try {
    const response = yield call(api.post, item);
    const { todo } = response.data.body;
    yield put(addTodo(todo.id, todo.title, todo.description, todo.color));
  } catch (e) {
    console.log(e);
  }
}

function* asyncChangeTodo(action: {
  type: string;
  payload: {
    id: string;
    item: {
      title: string;
      description: string;
      color: string;
      completed: boolean;
    };
  };
}) {
  const { item, id } = action.payload;
  try {
    const response = yield call(api.patch, id, item);
    const todo = response.data.body;
    yield put(changeTodo(todo.id, todo.title, todo.description, todo.color));
  } catch (e) {
    console.log(e);
  }
}

function* asyncDeleteTodo(action: { type: string; payload: { id: string } }) {
  const { id } = action.payload;
  try {
    yield call(api.delete, id);
    yield put(deleteTodo(id));
  } catch (e) {
    console.log(e);
  }
}

function* watchGetTodos() {
  yield takeEvery(ASYNC_SET_TODO_LIST, asyncGetTodos);
}

function* watchToggleTodo() {
  yield takeEvery(ASYNC_TOGGLE_TODO, asyncToggleTodo);
}

function* watchDeleteTodo() {
  yield takeEvery(ASYNC_DELETE_TODO, asyncDeleteTodo);
}

function* watchAddTodo() {
  yield takeEvery(ASYNC_ADD_TODO, asyncAddTodo);
}

function* watchChangeTodo() {
  yield takeEvery(ASYNC_CHANGE_TODO, asyncChangeTodo);
}
export default function* rootSaga() {
  yield all([
    fork(watchGetTodos),
    fork(watchToggleTodo),
    fork(watchDeleteTodo),
    fork(watchAddTodo),
    fork(watchChangeTodo),
  ]);
}
