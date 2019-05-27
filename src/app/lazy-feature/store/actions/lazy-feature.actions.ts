import { Action } from '@ngrx/store';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';

export class LoadData implements Action {
  readonly type = LOAD_DATA;

  constructor(public payload: any = null) {
  }
}

export class LoadDataSuccess implements Action {
  readonly type = LOAD_DATA_SUCCESS;

  constructor(public payload: any) {
  }
}

export class LoadDataFailure implements Action {
  readonly type = LOAD_DATA_FAILURE;

  constructor(public payload: any) {
  }
}

export type LazyFeatureActions = LoadData | LoadDataSuccess | LoadDataFailure;
