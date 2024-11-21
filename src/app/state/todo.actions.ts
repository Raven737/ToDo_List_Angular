import { createAction, props } from '@ngrx/store';

// Дія для додавання задачі
export const addTodo = createAction(
  '[ToDo] Add Todo',
  props<{ title: string }>() // Приймає заголовок задачі
);

// Дія для видалення задачі
export const deleteTodo = createAction(
  '[ToDo] Delete Todo',
  props<{ index: number }>() // Приймає індекс задачі
);
