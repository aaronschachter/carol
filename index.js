import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './assets/js/components/App';
import Campaigns from './assets/js/components/Campaigns';
import Members from './assets/js/components/Members';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/campaigns" component={Campaigns}/>
      <Route path="/members" component={Members}/>
    </Route>
  </Router>
), document.getElementById('app'));
