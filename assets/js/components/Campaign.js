import React from 'react'
import { Link } from 'react-router'

import ReportbackItem from './ReportbackItem'

export default React.createClass({
  componentDidMount: function() {
    this.fetchData(this.props.params.campaignId);
  },
  fetchData: function(campaignId) {
    var url = 'https://www.dosomething.org/api/v1/reportback-items.json?campaigns=' + campaignId + '&load_user=true';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // @todo - shouldnt set campaign this way in case of no results
        if (json.data.length > 0) {
          this.state.campaign = json.data[0].campaign;
        }
        this.setState({
          gallery: json.data,
          galleryLoaded: true,
          campaign: this.state.campaign,
        });
      })
  },
  getInitialState: function() {
    return {
      gallery: [],
      galleryLoaded: false,
      campaign: null,
    };
  },
  render() {
  	var campaignId = this.props.params.campaignId;
    var inboxUrl = '/campaigns/' + campaignId + '/inbox';
    var title = localStorage['campaign_' + campaignId + '_title'];
    var tagline = localStorage['campaign_' + campaignId + '_tagline'];
    var reportbackItems = this.state.gallery.map(function(reportbackItem) {
      return (
        <div className="col-md-3">
          <ReportbackItem 
            reportbackItem={reportbackItem} 
            key={reportbackItem.id} 
          />
        </div>
      );
    });
    return (
      <div className="container">
	      <div className="page-header">
          <Link className="btn btn-primary pull-right" to={inboxUrl} role="button">Inbox</Link>
	        <h1>{title}</h1>
	        <p>{tagline}</p>
	      </div>
	      <div className="row">
	        {reportbackItems}
	      </div>
      </div>
    )
  },
  renderGallery: function() {
    if (!this.state.galleryLoaded) {
      return this.renderLoadingView('Loading...');
    }
    if (this.state.gallery.length == 0) {
      return this.renderLoadingView('No photos in gallery.');
    }

  },
  renderLoadingView: function(message) {
    return (
      <div>
        <h4>{message}</h4>
      </div>
    );
  },
})
