import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[ToDo] Add Todo',
  props<{ title: string }>()
);

export const deleteTodo = createAction(
  '[ToDo] Delete Todo',
  props<{ index: number }>()
);
