import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

// import './config/ReactotronConfig';

import { Toastr } from '~/components';

import Routes from '~/routes';
import history from '~/services/history';

import { store, persistor } from '~/store';

// Theme
import theme from './theme';
import GlobalStyle from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
          <Toastr />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
