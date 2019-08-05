import { Reducer } from 'redux';
import produce from 'immer';

import { TasksState, TasksTypes } from './types';

const INITIAL_STATE: TasksState = {
  data: {
    tasks: [],
    totalOcor: 0,
    totalPages: 0,
  },
  error: false,
  loading: false,
  selected: { idSituacao: 0 },
};

const reducer: Reducer<TasksState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TasksTypes.LOAD_REQUEST:
        draft.loading = true;
        break;
      case TasksTypes.LOAD_SUCCESS:
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      case TasksTypes.LOAD_FAILURE:
        draft.error = true;
        break;
      case TasksTypes.SELECT_TASK:
        draft.selected = action.payload.task;
        break;
      default:
        break;
    }
  });
};

export default reducer;
