import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, deleteTodo } from './state/todo.actions';
import { Todo } from './state/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newTodo: string = ''; // Поле для нового завдання
  todos$: Observable<Todo[]>; // Стейт задач

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todos$ = this.store.select((state) => state.todos.todos);
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.store.dispatch(addTodo({ title: this.newTodo })); // Додаємо нове завдання
      this.newTodo = '';
    }
  }

  deleteTodo(index: number): void {
    this.store.dispatch(deleteTodo({ index })); // Видаляємо завдання за індексом
  }
}
