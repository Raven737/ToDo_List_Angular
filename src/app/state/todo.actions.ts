import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.state';

// Додавання задачі
export const addTodo = createAction(
  '[ToDo] Add Todo',
  props<{ title: string }>() // Приймає заголовок задачі
);

// Видалення задачі
export const deleteTodo = createAction(
  '[ToDo] Delete Todo',
  props<{ index: number }>() // Приймає індекс задачі
);

// Ініціація завантаження
export const loadTodos = createAction('[Todo] Load Todos');

// Успішне завантаження
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);

// Помилка завантаження
export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: string }>()
);
