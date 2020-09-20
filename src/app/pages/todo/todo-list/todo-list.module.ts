import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './components';
import { TodoListContainerComponent } from './containers';
import { TodoListPageComponent } from './todo-list.page';
import { TodoListRoutingModule } from './todo-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoListRoutingModule,
  ],
  declarations: [
    TodoListPageComponent,
    TodoListContainerComponent,
    TodoListComponent,
  ],
})
export class TodoListModule {}
