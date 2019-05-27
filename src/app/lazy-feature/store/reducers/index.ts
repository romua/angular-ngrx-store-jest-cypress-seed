import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as fromFeature from './lazy-feature.reducer';

export interface State extends fromRoot.State {
  featureOne: fromFeature.FeatureOneState;
}

export const getUsersState = createFeatureSelector<State, fromFeature.FeatureOneState>('featureOne');


export const getUsers = createSelector(
    getUsersState,
    fromFeature.getData,
);

export const getError = createSelector(
    getUsersState,
    fromFeature.getError
);
