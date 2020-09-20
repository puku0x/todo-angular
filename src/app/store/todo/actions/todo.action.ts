import { createAction, props } from '@ngrx/store';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../../../models';

export const fetchAll = createAction(
  '[Todo Page] Fetch All',
  props<{ offset?: number; limit?: number }>()
);

export const fetchAllSuccess = createAction(
  '[Todo API] Fetch All Success',
  props<{ todos: Todo[] }>()
);

export const fetchAllFailure = createAction(
  '[Todo API] Fetch All Failure',
  props<{ error: unknown }>()
);

export const fetch = createAction('[Todo Page] Fetch', props<{ id: string }>());

export const fetchSuccess = createAction(
  '[Todo API] Fetch Success',
  props<{ todo: Todo }>()
);

export const fetchFailure = createAction(
  '[Todo API] Fetch Failure',
  props<{ error: unknown }>()
);

export const create = createAction(
  '[Todo Page] Create',
  props<{ todo: TodoCreateDto }>()
);

export const createSuccess = createAction(
  '[Todo API] Create Success',
  props<{ todo: Todo }>()
);

export const createFailure = createAction(
  '[Todo API] Create Failure',
  props<{ error: unknown }>()
);

export const update = createAction(
  '[Todo Page] Update',
  props<{ todo: TodoUpdateDto }>()
);

export const updateSuccess = createAction(
  '[Todo API] Update Success',
  props<{ todo: Todo }>()
);

export const updateFailure = createAction(
  '[Todo API] Update Failure',
  props<{ error: unknown }>()
);

export const remove = createAction(
  '[Todo Page] Remove',
  props<{ id: string }>()
);

export const removeSuccess = createAction(
  '[Todo API] Remove Success',
  props<{ id: string }>()
);

export const removeFailure = createAction(
  '[Todo API] Remove Failure',
  props<{ error: unknown }>()
);
