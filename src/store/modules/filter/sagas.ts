import { takeLatest, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { FilterTypes } from './types';
import { loadTasksRequest } from '../tasks/actions';

export function* loadTasks(action: any) {
  try {
    yield put(loadTasksRequest(action.payload.filter));
  } catch (err) {
    yield toastr.error('Ops...', 'Encontramos um erro ao tentar recuperar as ocorrências.');
  }
}

export default all([takeLatest(FilterTypes.UPDATE_FILTER, loadTasks)]);
