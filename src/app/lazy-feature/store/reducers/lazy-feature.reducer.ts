import * as Actions from '../actions/lazy-feature.actions';

export interface FeatureOneState {
  data: any[];
  error: null;
}

export const initialState: FeatureOneState = {
  data: [],
  error: null,
};

export function reducer(
    state = initialState,
    action: Actions.LazyFeatureActions
): FeatureOneState {
  switch (action.type) {
    case Actions.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case Actions.LOAD_DATA_FAILURE:
      return {
        ...state,
        data: action.payload
      };

    default: {
      return state;
    }
  }
}

export const getData = (state: FeatureOneState) => state.data;
export const getError = (state: FeatureOneState) => state.error;
