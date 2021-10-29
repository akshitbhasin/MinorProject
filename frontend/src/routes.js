import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './pages/Auth';
import Main from './pages/Main';
import Form from './pages/Signup/Form';
// import Signup from './pages/Signup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/auth" />} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={Main} />
        <Route path="/signup" component={Form}/>
      </Switch>
    </BrowserRouter>
  );
}
