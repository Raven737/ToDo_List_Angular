// Опис моделі задачі
export interface Todo {
  userId: number; // ID користувача
  id: number; // Унікальний ID завдання
  title: string; // Назва завдання
  completed: boolean; // Статус виконання
}

// Стан ToDo додатку
export interface TodoState {
  todos: Todo[]; // Список завдань
  loading: boolean; // Статус завантаження (true — завантажується)
  error: string | null; // Помилка, якщо виникла
}

// Початковий стан
export const initialState: TodoState = {
  todos: [], // Початково список завдань порожній
  loading: false, // Завантаження не активне
  error: null, // Помилок немає
};
