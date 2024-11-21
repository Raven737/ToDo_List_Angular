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
  todos$: Observable<Todo[]>; // Потік для задач
  newTodo: string = ''; // Поле для нової задачі

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todos$ = this.store.select((state) => state.todos.todos); // Підписка на задачі
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
