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
  on(fetchAll, (state) => {
    return { ...state, isFetching: true };
  }),
  on(fetchAllSuccess, (state, { todos }) => {
    return adapter.setAll(todos, { ...state, isFetching: false });
  }),
  on(fetchAllFailure, (state, { error }) => {
    return { ...state, isFetching: false, error };
  }),
  on(fetch, (state, { id }) => {
    return { ...state, isFetching: true, selectedId: id };
  }),
  on(fetchSuccess, (state, { todo }) => {
    return adapter.upsertOne(todo, { ...state, isFetching: false });
  }),
  on(fetchFailure, (state, { error }) => {
    return { ...state, isFetching: false, error };
  }),
  on(create, (state) => {
    return { ...state, isFetching: true };
  }),
  on(createSuccess, (state, { todo }) => {
    return adapter.addOne(todo, { ...state, isFetching: false });
  }),
  on(createFailure, (state, { error }) => {
    return { ...state, isFetching: false, error };
  }),
  on(update, (state) => {
    return { ...state, isFetching: true };
  }),
  on(updateSuccess, (state, { todo }) => {
    return adapter.updateOne(
      { id: todo.id, changes: todo },
      { ...state, isFetching: false }
    );
  }),
  on(updateFailure, (state, { error }) => {
    return { ...state, isFetching: false, error };
  }),
  on(remove, (state) => {
    return { ...state, isFetching: true };
  }),
  on(removeSuccess, (state, { id }) => {
    return adapter.removeOne(id, { ...state, isFetching: false });
  }),
  on(removeFailure, (state, { error }) => {
    return { ...state, isFetching: false, error };
  })
);
