import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  deleteTodo,
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './todo.actions';
import { initialState } from './todo.state';

export const todoReducer = createReducer(
  initialState,

  on(addTodo, (state, { title }) => ({
    ...state,
    todos: [
      ...state.todos,
      { userId: 1, id: state.todos.length + 1, title, completed: false },
    ],
  })),

  on(deleteTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== index),
  })),

  on(loadTodos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
    error: null,
  })),

  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
