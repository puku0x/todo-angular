import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TodoCreateDto } from '../../../../../models';
import { TodoCreateFacade } from './todo-create.facade';

@Component({
  selector: 'app-todo-create-container',
  template: `
    <app-todo-create
      [isFetching]="isFetching$ | async"
      (create)="create($event)"
    ></app-todo-create>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [TodoCreateFacade],
})
export class TodoCreateContainerComponent {
  isFetching$ = this.facade.isFetching$;

  constructor(private readonly facade: TodoCreateFacade) {}

  create(todo: TodoCreateDto): void {
    this.facade.create(todo);
  }
}
