import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
  {
    path: 'new',
    pathMatch: 'full',
    loadChildren: () =>
      import('./todo-create/todo-create.module').then(
        (m) => m.TodoCreateModule
      ),
  },
  {
    path: ':id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./todo-detail/todo-detail.module').then(
        (m) => m.TodoDetailModule
      ),
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    loadChildren: () =>
      import('./todo-edit/todo-edit.module').then((m) => m.TodoEditModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
