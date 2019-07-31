import { takeLatest, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import { changeFilter } from './actions';
import { FilterTypes } from './types';

export function* loadTasks(action: any) {
  console.log(action);
  try {
    yield put(changeFilter(action.payload));
  } catch (err) {
    yield toastr.error('Ops...', 'Encontramos um erro ao tentar recuperar as ocorrências.');
  }
}

export default all([takeLatest(FilterTypes.CHANGE_FILTER, loadTasks)]);
