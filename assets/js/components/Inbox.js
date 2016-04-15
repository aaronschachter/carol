import React from 'react'

import NavLink from './NavLink'
import Reportback from './Reportback';

export default React.createClass({
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
          data: json.data,
          reportback: json.data[0],
          loaded: true,
        });
      })
  },
  getInitialState: function() {
    return {
      loaded: false,
      reportback: null,
    };
  },
  render() {
    // @todo DRY with Campaigns.get util
    var campaignId = this.props.params.campaignId;
    var campaignUrl = '/campaigns/' + campaignId;
    var title = localStorage['campaign_' + campaignId + '_title'];
    var tagline = localStorage['campaign_' + campaignId + '_tagline'];
    var content;
    if (!this.state.loaded) {
      content = <div>Loading</div>;
    }
    else {
      content = (
        <Reportback
          campaign={this.state.reportback.campaign}
          key={this.state.reportback.id} 
          reportback={this.state.reportback} 
        />
      );
    }
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            <NavLink to={campaignUrl}>{title}</NavLink> <small><span className="glyphicon glyphicon-inbox"></span></small>
          </h1>
          <p>{tagline}</p>
        </div>
        <Controls reportback={this.state.reportback} />
        <div className="row">
          <div className="col-md-12">{content}</div>
        </div>
      </div>
    );
  }
});

var Controls = React.createClass({
  render: function() {
    var profileUrl = '#';
    var firstName = 'Doer';
    var photo = 'https://raw.githubusercontent.com/DoSomething/LetsDoThis-iOS/develop/Lets%20Do%20This/Images.xcassets/Avatar.imageset/Avatar.png';
    if (this.props.reportback) {
      profileUrl = '/members/' + this.props.reportback.user.id;
      if (this.props.reportback.user.first_name) {
        firstName = this.props.reportback.user.first_name;
      }
      if (this.props.reportback.user.photo) {
        photo = this.props.reportback.user.photo;
      }        
    }
  
    return (
      <nav>
        <ul className="pager inbox-pager">
          <li className="previous"><a href="#"><span className="glyphicon glyphicon-chevron-left" /></a></li>
          <li>
            <NavLink to={profileUrl}>
              <img className="media-object img-circle avatar" src={photo} />
              <small>{firstName.toUpperCase()}</small>
            </NavLink>
          </li>
          <li className="next"><a href="#"><span className="glyphicon glyphicon-chevron-right" /></a></li>
        </ul>
      </nav>
    );
  },
});

