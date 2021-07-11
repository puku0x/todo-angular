import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { TodoFacade } from '../../../../../store';
import { TodoDetailFacade } from './todo-detail.facade';

@Component({
  selector: 'app-todo-detail-container',
  template: `
    <app-todo-detail [todo]="todo$ | async"></app-todo-detail>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [TodoDetailFacade],
})
export class TodoDetailContainerComponent implements OnInit {
  @Input()
  id: string | null = null;

  todo$ = this.todoFacade.todo$;

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {
    if (this.id) {
      this.todoFacade.fetch(this.id);
    }
  }
}
