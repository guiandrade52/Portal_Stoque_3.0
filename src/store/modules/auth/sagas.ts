import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import history from '~/services/history';
import api from '~/services/api';

import { AuthTypes } from './types';
import { signInSuccess, signFailure } from './actions';

function getSignIn(action: any) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (action.payload.login.password === '123') resolve({ token: '123teste' });
      else reject({ token: '123teste', signed: true });
    }, 2000);
  });
}

export function* signIn(action: any) {
  try {
    const response = yield call(getSignIn, action);

    const { token } = response;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    toastr.error('Ops', 'Usuário ou senha invalidos');
    yield put(signFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
