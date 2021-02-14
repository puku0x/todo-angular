import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';

import { TodoService } from '../../../services';
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

@Injectable()
export class TodoEffects {
  fetchAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAll),
      switchMap(({ offset, limit }) =>
        this.todoService.findAll(offset, limit).pipe(
          map((result) => fetchAllSuccess({ todos: result })),
          catchError((error) => of(fetchAllFailure({ error })))
        )
      )
    )
  );

  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetch),
      concatMap(({ id }) =>
        this.todoService.find(id).pipe(
          map((result) => fetchSuccess({ todo: result })),
          catchError((error) => of(fetchFailure({ error })))
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(create),
      concatMap(({ todo }) =>
        this.todoService.create(todo).pipe(
          map((result) => createSuccess({ todo: result })),
          catchError((error) => of(createFailure({ error })))
        )
      )
    )
  );

  createSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createSuccess),
        tap(({ todo }) => {
          this.router.navigate(['/todos', todo.id]);
        })
      ),
    { dispatch: false }
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(update),
      concatMap(({ todo }) =>
        this.todoService.update(todo).pipe(
          map((result) => updateSuccess({ todo: result })),
          catchError((error) => of(updateFailure({ error })))
        )
      )
    )
  );

  updateSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateSuccess),
        tap(({ todo }) => {
          this.router.navigate(['/todos', todo.id]);
        })
      ),
    { dispatch: false }
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(remove),
      concatMap(({ id }) =>
        this.todoService.remove(id).pipe(
          map((result) => removeSuccess({ id: result })),
          catchError((error) => of(removeFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly todoService: TodoService
  ) {}
}
