import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import api from '~/services/api';

import { AuthTypes } from '../auth/types';
import { updateProfileRequest, updateProfileFailure } from './actions';

export function* getProfile(action: any) {
  try {
    const response = yield call(api.get, action.payload.profile.name);

    yield put(updateProfileRequest(response));
  } catch (err) {
    toastr.error('Ops', 'Usuário ou senha invalidos');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_SUCCESS, getProfile)]);
