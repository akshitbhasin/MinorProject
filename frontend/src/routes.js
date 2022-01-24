import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './pages/Auth';
import Main from './pages/Main';
import Form from './pages/Signup/Form';
import PageNotFound from './pages/PageNotFound';
// import Signup from './pages/Signup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/auth" />} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signup" component={Form} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
