import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    // @todo DRY with Campaigns.get util
    var campaignId = this.props.params.campaignId;
    var campaignUrl = '/campaigns/' + campaignId;
    var title = localStorage['campaign_' + campaignId + '_title'];
    var tagline = localStorage['campaign_' + campaignId + '_tagline'];
    return (
      <div className="container">
        <div className="page-header">
          <h1><NavLink to={campaignUrl}>{title}:</NavLink> Inbox</h1>
          <p>{tagline}</p>
        </div>
        <div className="row">
          Inbox for {campaignId}
        </div>
      </div>
    );
  }
})
