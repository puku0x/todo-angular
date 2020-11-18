import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { TodoFacade } from '../../../../../store';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list.container.html',
  styleUrls: ['./todo-list.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainerComponent implements OnChanges, OnInit {
  @Input()
  offset!: number;

  @Input()
  limit!: number;

  todos$ = this.todoFacade.todos$;

  constructor(
    private readonly router: Router,
    private readonly todoFacade: TodoFacade
  ) {}

  ngOnChanges(): void {
    this.todoFacade.fetchAll(this.offset, this.limit);
  }

  ngOnInit(): void {}

  changeOffset(offset: number): void {
    this.router.navigate(['todos'], {
      queryParams: { offset, limit: this.limit },
    });
  }

  changeLimit(limit: number): void {
    this.router.navigate(['todos'], {
      queryParams: { offset: this.offset, limit },
    });
  }
}
