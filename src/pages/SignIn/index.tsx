import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Button, Icon, Container, Header } from 'semantic-ui-react'

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
    <Container className="Principal" fluid>
      <Header className="Lo">Portal Stoque</Header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input className="inputUser" name="username" type="username" placeholder="Usuário"/>
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit">{loading ? 'Carregando...' : 'Acessar'}</Button>
        <Link to="/register">Novo Cadastro</Link>
      </Form>
      </Container>
    </>
  );
}
 