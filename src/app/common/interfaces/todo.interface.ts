export interface TodoObj {
  active: boolean;
  completed: boolean;
  favourite: boolean;
}

export interface Todo {
  id: number;
  name: string;
  props: TodoObj;
}
