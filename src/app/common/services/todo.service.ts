import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];
  pipeValue: string;
}
