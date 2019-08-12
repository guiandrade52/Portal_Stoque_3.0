import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { ApplicationState } from '~/store';

import { signInRequest } from '~/store/modules/auth/actions';

// import logo from '~/assets/icons/logo.svg';

const schema = Yup.object().shape({
  username: Yup.string().required('O usuário é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  function handleSubmit(login: any) {
    dispatch(signInRequest(login));
  }

  return (
    <>
      <h1>Portal Stoque</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" type="username" placeholder="Seu usuário" />
        <Input name="password" type="password" placeholder="Sua senha secreta" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Cadastrar</Link>
      </Form>
    </>
  );
}
