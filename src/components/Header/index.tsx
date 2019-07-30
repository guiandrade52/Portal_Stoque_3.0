import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

// State application

import logo from '~/assets/icons/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector((state: ApplicationState) => state.profile);
  const dispatch = useDispatch();

  function handleSingUp() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Fagner</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Fagner" />
          </Profile>
          <Link to="/" onClick={handleSingUp}>
            Sair
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
