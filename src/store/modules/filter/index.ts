import { Reducer } from 'redux';
import produce from 'immer';

import { FilterTypes, FilterState } from './types';

const INITIAL_STATE: FilterState = {
  data: {
    activePage: 1,
    tamPage: 30,
  },
  actived: false,
};

const reducer: Reducer<FilterState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case FilterTypes.UPDATE_FILTER:
        draft.data = action.payload.filter;
        break;

      default:
        break;
    }
  });
};

export default reducer;
