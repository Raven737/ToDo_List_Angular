import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';
import { Todo } from './todo.state';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private http: HttpClient) {
    console.log('Actions instance:', this.actions$); // Логування для перевірки
    console.log('HttpClient instance:', this.http); // Логування для перевірки
  }

  // Ефект для завантаження задач із сервера
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos), // Слухаємо дію "loadTodos"
      mergeMap(() =>
        this.http
          .get<Todo[]>('https://jsonplaceholder.typicode.com/users/1/todos') // HTTP-запит до API
          .pipe(
            map((todos) => loadTodosSuccess({ todos })), // Успішне завантаження
            catchError(
              (error) => of(loadTodosFailure({ error: error.message })) // Обробка помилок
            )
          )
      )
    )
  );
}
