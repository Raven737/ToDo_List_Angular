import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, deleteTodo, loadTodos } from './state/todo.actions';
import { Todo } from './state/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos$: Observable<Todo[]>; // Потік для задач
  loading$: Observable<boolean>; // Потік для статусу завантаження
  error$: Observable<string | null>; // Потік для помилок
  newTodo: string = ''; // Поле для нової задачі

  constructor(
    private store: Store<{
      todos: { todos: Todo[]; loading: boolean; error: string | null };
    }>
  ) {
    this.todos$ = this.store.select((state) => state.todos.todos); // Підписка на задачі
    this.loading$ = this.store.select((state) => state.todos.loading); // Підписка на статус завантаження
    this.error$ = this.store.select((state) => state.todos.error); // Підписка на помилки
  }

  ngOnInit(): void {
    // Завантаження задач із сервера
    this.store.dispatch(loadTodos());
  }

  // Додавання задачі
  addTodo() {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ title: this.newTodo }));
      this.newTodo = '';
    }
  }

  // Видалення задачі
  deleteTodo(index: number) {
    this.store.dispatch(deleteTodo({ index }));
  }
}
