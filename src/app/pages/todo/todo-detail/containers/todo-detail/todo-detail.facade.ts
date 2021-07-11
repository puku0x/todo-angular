import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { fetch } from '../../../../../store/todo/actions';
import { getIsFetching, getTodo } from '../../../../../store/todo/selectors';

@Injectable()
export class TodoDetailFacade {
  isFetching$ = this.store.pipe(select(getIsFetching));
  todo$ = this.store.pipe(select(getTodo));

  constructor(private readonly store: Store) {}

  fetch(id: string): void {
    this.store.dispatch(fetch({ id }));
  }
}
