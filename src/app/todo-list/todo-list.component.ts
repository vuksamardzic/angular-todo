import { Component } from '@angular/core';
import { TodoService } from '../common/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  constructor(public _TodoService: TodoService) { }
}
