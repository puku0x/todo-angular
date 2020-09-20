import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../../../models';
import { TodoService } from '../../../services';
import * as actions from '../actions';
import { TodoEffects } from './todo.effect';

describe('TodoEffects', () => {
  let actions$: Observable<unknown>;
  let effects: TodoEffects;
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        {
          provide: TodoService,
          useValue: jasmine.createSpyObj('TodoService', [
            'fetchAll',
            'fetch',
            'create',
            'update',
            'remove',
          ]),
        },
      ],
    });
    effects = TestBed.inject(TodoEffects);
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchAll$', () => {
    it('should return fetchAllSuccess', () => {
      const todos: Todo[] = [
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '2',
          title: 'test2',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '3',
          title: 'test3',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
      ];
      const response = cold('-b', { b: todos });
      service.findAll = () => response;

      const offset = 0;
      const limit = 100;
      const action = actions.fetchAll({ offset, limit });
      const completion = actions.fetchAllSuccess({ todos });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.fetchAll$).toBeObservable(expected);
    });

    it('should return fetchAllFailure', () => {
      const error = new Error('error');
      const response = cold('-#', {}, error);
      service.findAll = () => response;

      const offset = 0;
      const limit = 100;
      const action = actions.fetchAll({ offset, limit });
      const completion = actions.fetchAllFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.fetchAll$).toBeObservable(expected);
    });
  });

  describe('fetch$', () => {
    it('should return fetchSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.find = () => response;

      const id = '1';
      const action = actions.fetch({ id });
      const completion = actions.fetchSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.fetch$).toBeObservable(expected);
    });

    it('should return fetchFailure', () => {
      const error = new Error('error');
      const response = cold('-#', {}, error);
      service.find = () => response;

      const id = '1';
      const action = actions.fetch({ id });
      const completion = actions.fetchFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.fetch$).toBeObservable(expected);
    });
  });

  describe('create$', () => {
    it('should return createSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.create = () => response;

      const dto: TodoCreateDto = {
        title: 'test1',
      };
      const action = actions.create({ todo: dto });
      const completion = actions.createSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.create$).toBeObservable(expected);
    });

    it('should return createFailure', () => {
      const error = new Error('error');
      const response = cold('-#', {}, error);
      service.create = () => response;

      const dto: TodoCreateDto = {
        title: 'test1',
      };
      const action = actions.create({ todo: dto });
      const completion = actions.createFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.create$).toBeObservable(expected);
    });
  });

  describe('update$', () => {
    it('should return updateSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.update = () => response;

      const dto: TodoUpdateDto = {
        id: '1',
        title: 'test1',
        completed: true,
      };
      const action = actions.update({ todo: dto });
      const completion = actions.updateSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.update$).toBeObservable(expected);
    });

    it('should return updateFailure', () => {
      const error = new Error('error');
      const response = cold('-#', {}, error);
      service.update = () => response;

      const dto: TodoUpdateDto = {
        id: '1',
        title: 'test1',
        completed: true,
      };
      const action = actions.update({ todo: dto });
      const completion = actions.updateFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.update$).toBeObservable(expected);
    });
  });

  describe('remove$', () => {
    it('should return removeSuccess', () => {
      const id = '1';
      const response = cold('-b', { b: id });
      service.remove = () => response;

      const action = actions.remove({ id });
      const completion = actions.removeSuccess({ id });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.remove$).toBeObservable(expected);
    });

    it('should return removeFailure', () => {
      const error = new Error('error');
      const response = cold('-#', {}, error);
      service.remove = () => response;

      const id = '1';
      const action = actions.remove({ id });
      const completion = actions.removeFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.remove$).toBeObservable(expected);
    });
  });
});
