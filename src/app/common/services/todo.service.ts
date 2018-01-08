import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {

  constructor() { }

  todoArray: Todo[];
}
