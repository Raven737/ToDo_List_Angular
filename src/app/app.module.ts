import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Для роботи з ngModel
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { todoReducer } from './state/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // Для обробки форми
    StoreModule.forRoot({ todos: todoReducer }), // Реєструємо ред'юсер
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
