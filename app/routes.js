import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Notes from './components/Notes';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Notes} />
    </Route>
  </Router>
);
