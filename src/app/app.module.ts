import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoService } from './common/services/todo.service';
import { TodoActionComponent } from './todo-list/todo-action/todo-action.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodoListComponent,
    CreateTodoComponent,
    TodoActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
