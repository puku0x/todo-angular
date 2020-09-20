import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDetailPageComponent } from './todo-detail.page';

const routes: Routes = [{ path: '', component: TodoDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoDetailRoutingModule {}
