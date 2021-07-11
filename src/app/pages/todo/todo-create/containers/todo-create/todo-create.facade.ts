import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { TodoCreateDto } from '../../../../../models';
import { create } from '../../../../../store/todo/actions';
import { getIsFetching, getTodo } from '../../../../../store/todo/selectors';

@Injectable()
export class TodoCreateFacade {
  isFetching$ = this.store.pipe(select(getIsFetching));
  todo$ = this.store.pipe(select(getTodo));

  constructor(private readonly store: Store) {}

  create(todo: TodoCreateDto): void {
    this.store.dispatch(create({ todo }));
  }
}
