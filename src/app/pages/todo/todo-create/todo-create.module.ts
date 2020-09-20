import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoCreateComponent } from './components';
import { TodoCreateContainerComponent } from './containers';
import { TodoCreatePageComponent } from './todo-create.page';
import { TodoCreateRoutingModule } from './todo-create-routing.module';

@NgModule({
  declarations: [
    TodoCreatePageComponent,
    TodoCreateContainerComponent,
    TodoCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoCreateRoutingModule,
  ],
})
export class TodoCreateModule {}
