import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-create-page',
  template: `
    <app-todo-create-container></app-todo-create-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreatePageComponent {}
