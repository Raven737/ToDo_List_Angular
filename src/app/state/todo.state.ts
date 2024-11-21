// Опис моделі задачі
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Стан ToDo додатку
export interface TodoState {
  todos: Todo[];
}

// Початковий стан
export const initialState: TodoState = {
  todos: [], // Початково список завдань порожній
};
