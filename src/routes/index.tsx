import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Pages components
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import New from '~/pages/New';
import List from '~/pages/List';
import Config from '~/pages/Config';
import About from '~/pages/About';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      {/* Routes publics */}
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      {/* Routes private */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/new" component={New} isPrivate />
      <Route path="/list" component={List} isPrivate />
      <Route path="/config" component={Config} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/about" component={About} isPrivate />
    </Switch>
  );
}
