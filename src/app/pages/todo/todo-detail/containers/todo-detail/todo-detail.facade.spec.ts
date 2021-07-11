import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { fetch } from '../../../../../store/todo/actions';
import { TodoDetailFacade } from './todo-detail.facade';

describe('TodoFacade', () => {
  const actions$ = of();
  let store: Store;
  let facade: TodoDetailFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockActions(() => actions$), provideMockStore()],
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(TodoDetailFacade);
  });

  it('should dispatch fetch', () => {
    const id = '1';
    facade.fetch(id);
    const action = fetch({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
