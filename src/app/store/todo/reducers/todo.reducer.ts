import { createReducer, on } from '@ngrx/store';

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
import { initialState, adapter } from '../states';

export const reducer = createReducer(
  initialState,
  on(fetchAll, (state) => ({ ...state, isFetching: true })),
  on(fetchAllSuccess, (state, { todos }) =>
    adapter.setAll(todos, { ...state, isFetching: false })
  ),
  on(fetchAllFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  })),
  on(fetch, (state, { id }) => ({
    ...state,
    isFetching: true,
    selectedId: id,
  })),
  on(fetchSuccess, (state, { todo }) =>
    adapter.upsertOne(todo, { ...state, isFetching: false })
  ),
  on(fetchFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  })),
  on(create, (state) => ({ ...state, isFetching: true })),
  on(createSuccess, (state, { todo }) =>
    adapter.addOne(todo, { ...state, isFetching: false })
  ),
  on(createFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  })),
  on(update, (state) => ({ ...state, isFetching: true })),
  on(updateSuccess, (state, { todo }) =>
    adapter.updateOne(
      { id: todo.id, changes: todo },
      { ...state, isFetching: false }
    )
  ),
  on(updateFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  })),
  on(remove, (state) => ({ ...state, isFetching: true })),
  on(removeSuccess, (state, { id }) =>
    adapter.removeOne(id, { ...state, isFetching: false })
  ),
  on(removeFailure, (state, { error }) => ({
    ...state,
    isFetching: false,
    error,
  }))
);
