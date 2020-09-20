import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TodoCreateDto } from '../../../../../models';
import { TodoFacade } from '../../../../../store';

@Component({
  selector: 'app-todo-create-container',
  templateUrl: './todo-create.container.html',
  styleUrls: ['./todo-create.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreateContainerComponent implements OnInit {
  isFetching$ = this.todoFacade.isFetching$;

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {}

  create(todo: TodoCreateDto): void {
    this.todoFacade.create(todo);
  }
}
