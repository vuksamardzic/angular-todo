import { Component, OnInit } from '@angular/core';
import { TodoService } from '../common/services/todo.service';
import { TodoObj } from '../common/interfaces/todo.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  activeObj: TodoObj = {
    active: true,
    favourite: false,
    completed: false
  };
  constructor(private _TodoService: TodoService) { }

  ngOnInit() {
    this._TodoService.pipeValue = 'active';
  }

  handleClick(str: string) {
    Object.keys(this.activeObj).map(i => this.activeObj[i] = false);
    this.activeObj[str] = true;
    this._TodoService.pipeValue = str;
  }

}
