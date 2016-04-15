import React from 'react'

import NavLink from './NavLink'
import Reportback from './Reportback';

export default React.createClass({
  bumpIndex: function(increment) {
    var newIndex = this.state.selectedIndex + increment;
    this.setState({
      selectedIndex: newIndex,
    });
  },
  componentDidMount: function() {
    this.fetchData(this.props.params.campaignId);
  },
  fetchData: function(campaignId) {
    var url = 'https://www.dosomething.org/api/v1/reportbacks?campaigns=' + campaignId + '&load_user=true';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          inbox: json.data,
          loaded: true,
        });
      })
  },
  getInitialState: function() {
    return {
      inbox: [],
      loaded: false,
      selectedIndex: 0,
    };
  },
  render() {
    // @todo DRY with Campaigns.get util
    var campaignId = this.props.params.campaignId;
    var campaignUrl = '/campaigns/' + campaignId;
    var title = localStorage['campaign_' + campaignId + '_title'];
    var tagline = localStorage['campaign_' + campaignId + '_tagline'];
    var content, reportback;
    if (!this.state.loaded) {
      content = <div>Loading</div>;
    }
    else {
      reportback = this.state.inbox[this.state.selectedIndex];
      content = (
        <Reportback
          campaign={reportback.campaign}
          key={reportback.id} 
          reportback={reportback} 
        />
      );
    }
    var badge = null;
    if (this.state.inbox.length) {
      badge = <span className="badge pull-right">{this.state.inbox.length}</span>;
    }
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            <NavLink to={campaignUrl}>{title}</NavLink> <small><span className="glyphicon glyphicon-inbox"></span></small>
          </h1>
          {badge}
          <p>{tagline}</p>
        </div>
        <Controls 
          bumpIndex={this.bumpIndex}
          inboxIndex={this.state.selectedIndex}
          reportback={reportback}
        />
        <div className="row">
          <div className="col-md-12">{content}</div>
        </div>
      </div>
    );
  }
});

var Controls = React.createClass({
  pagerClick: function(increment) {
    var currentIndex = this.props.inboxIndex + increment;    
    this.props.bumpIndex(increment);
  },
  render: function() {
    if (!this.props.reportback) {
      return null;
    }
    var firstName = 'Doer';
    var photo = 'https://raw.githubusercontent.com/DoSomething/LetsDoThis-iOS/develop/Lets%20Do%20This/Images.xcassets/Avatar.imageset/Avatar.png';
    var profileUrl = '/members/' + this.props.reportback.user.id;
    if (this.props.reportback.user.first_name) {
      firstName = this.props.reportback.user.first_name;
    }
    if (this.props.reportback.user.photo) {
      photo = this.props.reportback.user.photo;
    }   
    return (
      <nav>
        <ul className="pager inbox-pager">
          <li className="previous">
            <span onClick={this.pagerClick.bind(this, -1)} className="glyphicon glyphicon-chevron-left" />
          </li>
          <li>
            <NavLink to={profileUrl}>
              <img className="media-object img-circle avatar" src={photo} />
              <small>{firstName.toUpperCase()}</small>
            </NavLink>
          </li>
          <li className="next">
            <span onClick={this.pagerClick.bind(this, 1)} className="glyphicon glyphicon-chevron-right" />
          </li>
        </ul>
      </nav>
    );
  },
});

