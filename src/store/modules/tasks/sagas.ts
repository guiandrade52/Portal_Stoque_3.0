import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import api from '~/services/api';

import { loadTasksSuccess, loadTasksFailure } from './actions';
import { TasksTypes } from './types';

export function* loadTasks(action: any) {
  try {
    const response = yield call(api.get, 'api/task', {
      params: action.payload,
    });
    yield put(loadTasksSuccess(response.data));
  } catch (err) {
    yield put(loadTasksFailure());
    yield toastr.error('Ops...', 'Encontramos um erro ao tentar recuperar as ocorrências.');
  }
}

export default all([takeLatest(TasksTypes.LOAD_REQUEST, loadTasks)]);
