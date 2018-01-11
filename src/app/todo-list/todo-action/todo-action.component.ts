import { Component, Input } from '@angular/core';
import { TodoObj } from '../../common/interfaces/todo.interface';
import { TodoService } from '../../common/services/todo.service';

@Component({
  selector: 'app-todo-action',
  templateUrl: './todo-action.component.html',
  styleUrls: ['./todo-action.component.scss']
})
export class TodoActionComponent {
  @Input() todoAction: TodoObj;
  @Input() todoId: number;
  constructor(private _TodoService: TodoService) { }

  updateTodo(val: string) {
    switch ( val ) {
      case 'completed':
        Object.keys(this.todoAction).map(i => this.todoAction[i] = false);
        this.todoAction[val] = true;
        break;
        case 'favourite':
          this.todoAction[val] = !this.todoAction[val];
          break;
        case 'remove':
          this._TodoService.todoArray = this._TodoService.todoArray.filter(i => i.id !== this.todoId);
          break;
    }
  }
}
