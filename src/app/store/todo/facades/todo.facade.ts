import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { TodoCreateDto, TodoUpdateDto } from '../../../models';
import { fetch, fetchAll, create, update, remove } from '../actions';
import { getIsFetching, getTodo, getTodos } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  isFetching$ = this.store.pipe(select(getIsFetching));
  todos$ = this.store.pipe(select(getTodos));
  todo$ = this.store.pipe(select(getTodo));

  constructor(private readonly store: Store) {}

  fetchAll(offset?: number, limit?: number): void {
    this.store.dispatch(fetchAll({ offset, limit }));
  }

  fetch(id: string): void {
    this.store.dispatch(fetch({ id }));
  }

  create(todo: TodoCreateDto): void {
    this.store.dispatch(create({ todo }));
  }

  update(todo: TodoUpdateDto): void {
    this.store.dispatch(update({ todo }));
  }

  remove(id: string): void {
    this.store.dispatch(remove({ id }));
  }
}
