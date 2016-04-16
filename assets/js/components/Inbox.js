import React from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
        var reportbacks = json.data;
        // Hardcode all item statuses to null for testing postReview / state.
        for (var i=0; i < reportbacks.length; i++) {
          for (var j=0; j < reportbacks[i].reportback_items.data.length; j++) {
            reportbacks[i].reportback_items.data[j].status = null;
          }
        }
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
  // @todo: Need to pass currentItemIndex as well
  postReview: function(reportbackItemStatus, timestamp, reportbackItemIndex) {
    console.log(reportbackItemIndex);
    var selectedReportback = this.state.inbox[this.state.selectedIndex];
    selectedReportback.reportback_items.data[reportbackItemIndex].status = reportbackItemStatus;
    selectedReportback.reportback_items.data[reportbackItemIndex].reviewed_at = timestamp;
    this.state.inbox[this.state.selectedIndex] = selectedReportback;
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
    else if (this.state.inbox.length < 1) {
      content = <div>Inbox zero. Sweet!</div>
    }
    else {
      reportback = this.state.inbox[this.state.selectedIndex];
      content = (
        <CSSTransitionGroup
          component="div"
          transitionName="entry"
          transitionLeaveTimeout={1000}
          transitionEnterTimeout={1000}
        >
          <Reportback
            campaign={reportback.campaign}
            key={reportback.id} 
            reportback={reportback}
            postReview={this.postReview}
          />
        </CSSTransitionGroup>
      );
    }
    return (
      <div className="container">
        <div className="page-header">
          <h1>
            <NavLink to={campaignUrl}>{title}</NavLink>
          </h1>
          <p>{tagline}</p>
        </div>
        <Controls 
          bumpIndex={this.bumpIndex}
          inboxIndex={this.state.selectedIndex}
          inboxLength={this.state.inbox.length}
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
  onKeyDown: function(e) {
    if (e.keyCode == 37) {
      this.pagerClick(-1);
    }
    else if (e.keyCode == 39) {
      this.pagerClick(1);
    }
  },
  componentDidMount: function() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  pagerClick: function(increment) {
    if (this.props.inboxIndex == 0 && increment < 0) {
      return;
    } 
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
            <small><span className="glyphicon glyphicon-inbox"></span> {this.props.inboxIndex + 1} / {this.props.inboxLength} </small>
          </li>
          <li className="next">
            <span onClick={this.pagerClick.bind(this, 1)} className="glyphicon glyphicon-chevron-right" />
          </li>
        </ul>
      </nav>
    );
  },
});
