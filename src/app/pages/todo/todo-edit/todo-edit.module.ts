import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoEditComponent } from './components';
import { TodoEditContainerComponent } from './containers';
import { TodoEditPageComponent } from './todo-edit.page';
import { TodoEditRoutingModule } from './todo-edit-routing.module';

@NgModule({
  declarations: [
    TodoEditPageComponent,
    TodoEditContainerComponent,
    TodoEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoEditRoutingModule,
  ],
})
export class TodoEditModule {}
