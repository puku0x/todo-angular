import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoEditPageComponent } from './todo-edit.page';

const routes: Routes = [{ path: '', component: TodoEditPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoEditRoutingModule {}
