import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { TodoCreateDto } from '../../../../../models';
import { create } from '../../../../../store/todo/actions';
import { TodoCreateFacade } from './todo-create.facade';

describe('TodoFacade', () => {
  const actions$ = of();
  let store: Store;
  let facade: TodoCreateFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockActions(() => actions$), provideMockStore()],
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(TodoCreateFacade);
  });

  it('should dispatch create', () => {
    const todo: TodoCreateDto = {
      title: 'test1',
    };
    facade.create(todo);
    const action = create({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
