import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { TodoCreateDto, TodoUpdateDto } from '../../../models';
import { create, fetch, fetchAll, remove, update } from '../actions';
import { TodoFacade } from './todo.facade';

describe('TodoFacade', () => {
  const actions$: Observable<unknown> = of();
  let store: Store;
  let facade: TodoFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockActions(() => actions$), provideMockStore()],
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(TodoFacade);
  });

  it('should call fetchAll', () => {
    facade.fetchAll(0, 10);
    const action = fetchAll({ offset: 0, limit: 10 });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call fetch', () => {
    const id = '1';
    facade.fetch(id);
    const action = fetch({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call create', () => {
    const todo: TodoCreateDto = {
      title: 'test1',
    };
    facade.create(todo);
    const action = create({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call update', () => {
    const todo: TodoUpdateDto = {
      id: '1',
      title: 'test1',
      completed: true,
    };
    facade.update(todo);
    const action = update({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call remove', () => {
    const id = '1';
    facade.remove(id);
    const action = remove({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
