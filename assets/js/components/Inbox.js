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
          <div className="row">
            <div className="col-md-12">
              <a className="btn btn-default" href="#" role="button">Prev</a>
              <a className="btn btn-default pull-right" href="#" role="button">Skip</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">{content}</div>
        </div>
      </div>
    );
  }
})
