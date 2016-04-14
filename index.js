import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './assets/js/components/App';
import Campaign from './assets/js/components/Campaign';
import Campaigns from './assets/js/components/Campaigns';
import Inbox from './assets/js/components/Inbox';
import Members from './assets/js/components/Members';
import Profile from './assets/js/components/Profile';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/campaigns" component={Campaigns}>
        <Route path="/campaigns/:campaignId" component={Campaign}/>
          <Route path="/campaigns/:campaignId/inbox" component={Inbox}/>
      </Route>
      <Route path="/members" component={Members}>
        <Route path="/members/:userId" component={Profile} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
