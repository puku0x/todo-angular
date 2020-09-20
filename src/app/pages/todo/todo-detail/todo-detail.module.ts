import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDetailComponent } from './components';
import { TodoDetailContainerComponent } from './containers';
import { TodoDetailPageComponent } from './todo-detail.page';
import { TodoDetailRoutingModule } from './todo-detail-routing.module';

@NgModule({
  declarations: [
    TodoDetailPageComponent,
    TodoDetailContainerComponent,
    TodoDetailComponent,
  ],
  imports: [CommonModule, TodoDetailRoutingModule],
})
export class TodoDetailModule {}
