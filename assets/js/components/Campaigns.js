import React from 'react'
import NavLink from './NavLink'
import activeComponent from 'react-router-active-component';
let NavItem = activeComponent('h2');

export default React.createClass({
  fetchData: function() {
    fetch('https://www.dosomething.org/api/v1/campaigns?count=100')
      .then((res) => {
          return res.json();
      }).then((json) => {
        this.setState({
          data: json.data,
        });
      })
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.fetchData();
  },
  render: function() {
    // If a child exists, this is a single Campaign view:
    if (this.props.children) {
      return this.props.children;
    }
    // Otherwise return list of Campaigns.
    return (
      <div className="row">
        <div className="col-md-3">
          <ul id="leftNav" className="nav nav-pills nav-stacked">
            <li className="active" role="presentation"><a>All</a></li>
            <li role="presentation"><a>Animals</a></li>
            <li role="presentation"><a>Bullying</a></li>
            <li role="presentation"><a>Disasters</a></li>
            <li role="presentation"><a>Discrimination</a></li>
          </ul>
        </div>
        <div className="col-md-9">
          <CampaignsTable data={this.state.data} />
        </div>
      </div>
    );
  }
})

var CampaignsTable = React.createClass({
  render: function() {
    var campaigns = this.props.data.map(function(campaign) {
      return (
        <CampaignsListItem 
          campaign={campaign}
          key={campaign.id}
        />
      );
    });
    return (
      <div>
        {campaigns}
      </div>
    );
  }
});

var CampaignsListItem = React.createClass({
  render: function() {
    var campaignId = this.props.campaign.id.toString();
    localStorage['campaign_' + campaignId + '_title'] = this.props.campaign.title;
    localStorage['campaign_' + campaignId + '_tagline'] = this.props.campaign.tagline;
    var url = '/campaigns/' + campaignId;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h2>
            <NavLink to={url}>
              {this.props.campaign.title}
            </NavLink>
          </h2>
          <p>{this.props.campaign.tagline}</p>
        </div>
        <div className="panel-footer">
          <p className="text-right">{this.props.campaign.status.toUpperCase()}</p>
        </div>
      </div>
    );
  }
});
