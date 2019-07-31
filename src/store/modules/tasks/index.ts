import { Reducer } from 'redux';
import { TasksState, TasksTypes } from './types';

const INITIAL_STATE: TasksState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TasksState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksTypes.LOAD_REQUEST:
      return { ...state, loading: true, error: false };

    case TasksTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case TasksTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
