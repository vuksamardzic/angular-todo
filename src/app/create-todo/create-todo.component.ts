import { Component } from '@angular/core';
import { Todo } from '../common/interfaces/todo.interface';
import { TodoService } from '../common/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  id = 0;
  todoName: string;
  todoArray: Todo[];
  constructor(private _TodoService: TodoService) { }

  fillArray(ev: KeyboardEvent) {
    if ( (ev === undefined || ev.keyCode === 13) && this.todoName !== '') {
      const obj = {
        id: this.id++,
        name: this.todoName,
        props: {
          active: true,
          completed: false,
          favourite: false
        }
      };

      this._TodoService.todoArray.push(obj);
      this.todoName = '';
    }
  }

}
