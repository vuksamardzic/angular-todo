import {Component, Input} from '@angular/core';
import {TodoObj} from '../../common/interfaces/todo.interface';
import {TodoService} from '../../common/services/todo.service';

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
    if ( val ) {
      this.todoAction[val] = !this.todoAction[val];
    } else {
      this._TodoService.todoArray = this._TodoService.todoArray.filter(i => i.id !== this.todoId);
    }
  };
}
