import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map, mergeMap,
  skip,
  switchMap,
  takeUntil, tap,
} from 'rxjs/operators';

import { LazyFeatureActions, LOAD_DATA, LoadData, LoadDataFailure, LoadDataSuccess } from '../actions/lazy-feature.actions';
import { LazyFeatureService } from '../../services/lazy-feature/lazy-feature.service';

@Injectable()
export class LazyFeatureEffects {
  @Effect()
  getUsers$ = this.actions$.pipe(
      ofType<LoadData>(LOAD_DATA),
      mergeMap((action) => this.featureOneService.getUsers(action.payload)
          .pipe(
              map(users => {
                console.log(users);
                return new LoadDataSuccess(users);
              }),
              catchError(() => of(new LoadDataFailure('Error hah')))
          )
      )
  );

  constructor(private actions$: Actions, private featureOneService: LazyFeatureService) {
  }
}
