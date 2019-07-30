import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Pages components
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      {/* Routes publics */}
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      {/* Routes private */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
