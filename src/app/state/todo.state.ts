export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [], // Початково список завдань порожній
};
