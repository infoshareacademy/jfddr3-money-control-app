import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard, SignIn } from './views';

const BASENAME = '/jfddr3-money-control-app';

function Routes() {
  return (
    <Router basename={BASENAME}>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
