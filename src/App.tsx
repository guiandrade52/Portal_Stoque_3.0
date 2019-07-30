import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import './config/ReactotronConfig';

import { Toastr } from '~/components';

import Routes from '~/routes';
import history from '~/services/history';

import { store, persistor } from '~/store';

import GlobalStyles from '~/styles/global';

// Theme
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Routes />
          <GlobalStyles />
          <Toastr />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
