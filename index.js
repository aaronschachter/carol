import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './assets/js/components/App';
import Campaign from './assets/js/components/Campaign';
import Campaigns from './assets/js/components/Campaigns';
import Members from './assets/js/components/Members';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/campaigns" component={Campaigns}>
        <Route path="/campaigns/:campaignId" component={Campaign}/>
      </Route>
      <Route path="/members" component={Members}/>
    </Route>
  </Router>
), document.getElementById('app'));
