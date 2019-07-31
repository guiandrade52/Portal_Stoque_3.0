import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import qs from 'qs';

// Services
import history from '~/services/history';
import api from '~/services/api';

import { AuthTypes } from './types';
import { signInSuccess, signFailure } from './actions';

export function* signIn(action: any) {
  try {
    const response = yield call(
      api.post,
      'token',
      qs.stringify({ ...action.payload.login, grant_type: 'password' })
    );

    const { access_token: token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    toastr.error('Ops', 'Usuário ou senha invalidos');
    yield put(signFailure());
  }
}

export function setToken({ payload }: any) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_OUT, signOut),
]);
