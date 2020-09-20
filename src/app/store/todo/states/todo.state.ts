import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Todo } from '../../../models';

export const featureName = 'todo';

export interface State extends EntityState<Todo> {
  error?: unknown;
  isFetching: boolean;
  selectedId?: string;
}

export const adapter = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  isFetching: false,
});
