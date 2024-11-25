import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';
import { Todo } from './todo.state';

@Injectable({ providedIn: 'root' })
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    console.log(this.actions$);
    return this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.http
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            map((todos) =>
              loadTodosSuccess({
                todos: todos.map((todo) => ({
                  userId: todo.userId,
                  id: todo.id,
                  title: todo.title,
                  completed: false,
                })),
              })
            ),
            catchError((error) =>
              of(loadTodosFailure({ error: error.message }))
            )
          )
      )
    );
  });
  constructor(private actions$: Actions, private http: HttpClient) {
    console.log(http);
  }
}
