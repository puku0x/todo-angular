import { Todo, TodoCreateDto, TodoUpdateDto } from '../../../models';
import {
  fetch,
  fetchSuccess,
  fetchFailure,
  fetchAll,
  fetchAllSuccess,
  fetchAllFailure,
  create,
  createSuccess,
  createFailure,
  update,
  updateSuccess,
  updateFailure,
  remove,
  removeSuccess,
  removeFailure,
} from '../actions';
import { State, initialState, adapter } from '../states';
import { reducer } from './todo.reducer';

describe('TodoReducer', () => {
  it('should handle fetchAll', () => {
    const state: State = {
      ...initialState,
    };
    const expected: State = {
      ...state,
      isFetching: true,
    };
    const action = fetchAll({ offset: 0, limit: 100 });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle fetchAllSuccess', () => {
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
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = adapter.setAll(todos, {
      ...state,
      isFetching: false,
    });
    const action = fetchAllSuccess({ todos });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle fetchAllFailure', () => {
    const error = 'error';
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = {
      ...state,
      isFetching: false,
      error,
    };
    const action = fetchAllFailure({ error });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle fetch', () => {
    const id = '1';
    const state: State = {
      ...initialState,
      isFetching: false,
    };
    const expected: State = {
      ...state,
      isFetching: true,
      selectedId: id,
    };
    const action = fetch({ id });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle fetchSuccess', () => {
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    const state: State = {
      ...initialState,
      isFetching: true,
      selectedId: todo.id,
    };
    const expected: State = adapter.upsertOne(todo, {
      ...state,
      isFetching: false,
    });
    const action = fetchSuccess({ todo });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle fetchFailure', () => {
    const error = 'error';
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = {
      ...state,
      isFetching: false,
      error,
    };
    const action = fetchFailure({ error });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle create', () => {
    const todo: TodoCreateDto = {
      title: 'test1',
    };
    const state: State = {
      ...initialState,
      isFetching: false,
    };
    const expected: State = {
      ...state,
      isFetching: true,
    };
    const action = create({ todo });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle createSuccess', () => {
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = adapter.addOne(todo, {
      ...state,
      isFetching: false,
    });
    const action = createSuccess({ todo });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle createFailure', () => {
    const error = 'error';
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = {
      ...state,
      isFetching: false,
      error,
    };
    const action = createFailure({ error });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle update', () => {
    const todo: TodoUpdateDto = {
      id: '1',
      title: 'test1a',
      completed: true,
    };
    const state: State = adapter.addOne(
      {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      { ...initialState }
    );
    const expected: State = {
      ...state,
      isFetching: true,
    };
    const action = update({ todo });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle updateSuccess', () => {
    const todo: Todo = {
      id: '1',
      title: 'test1a',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    const state: State = adapter.addOne(
      {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      { ...initialState, isFetching: true }
    );
    const expected: State = adapter.updateOne(
      { id: todo.id, changes: todo },
      { ...state, isFetching: false }
    );
    const action = updateSuccess({ todo });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle updateFailure', () => {
    const error = 'error';
    const state: State = {
      ...initialState,
      isFetching: true,
    };
    const expected: State = {
      ...state,
      error,
      isFetching: false,
    };
    const action = updateFailure({ error });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle remove', () => {
    const id = '2';
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
    const state: State = adapter.setAll(todos, { ...initialState });
    const expected: State = {
      ...state,
      isFetching: true,
    };
    const action = remove({ id });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle removeSuccess', () => {
    const id = '2';
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
    const state: State = adapter.setAll(todos, {
      ...initialState,
      isFetching: false,
    });
    const expected: State = adapter.removeOne(id, { ...state });
    const action = removeSuccess({ id });
    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle deleteTodoFailure', () => {
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
    const error = 'error';
    const state: State = adapter.setAll(todos, {
      ...initialState,
      isFetching: true,
    });
    const expected: State = {
      ...state,
      isFetching: false,
      error,
    };
    const action = removeFailure({ error });
    expect(reducer(state, action)).toEqual(expected);
  });
});
