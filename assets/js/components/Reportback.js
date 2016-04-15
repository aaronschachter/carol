import React from 'react'

import MemberSummary from './MemberSummary'
import NavLink from './NavLink'
import Helpers from '../utils/Helpers.js'

export default React.createClass({
  bumpIndex: function(increment) {
    var newIndex = this.state.selectedItemIndex + increment;
    var totalItems = this.state.reportback.reportback_items.data.length;
    if (newIndex == totalItems) {
      newIndex = 0;
    }
    else if (newIndex < 0) {
      newIndex = totalItems - 1;
    }
    this.setState({
      selectedItemIndex: newIndex,
    });
  },
  getInitialState: function() {
    // @todo Pass itemIndex isntead of hardcoding first item.
    return {
      reportback: this.props.reportback,
      selectedItemIndex: 0,
      status: 'Inbox'
    };
  },
  postReview: function(status) {
    if (status == 'Approved' || status == 'Promoted' || status == 'Excluded') {
      status = 'Reviewed';
    }
    this.setState({
      status: status,
    });
  },
  render() {
    var campaignUrl = '/campaigns/' + this.props.campaign.id;
    var label = this.props.campaign.reportback_info.noun + ' ' + this.props.campaign.reportback_info.verb;
    var reportbackItem = this.state.reportback.reportback_items.data[this.state.selectedItemIndex];
    var date = Helpers.formatTimestamp(reportbackItem.created_at);
    return (
      <div className="panel panel-default">
        <div className="panel-body row">
          <div className="col-md-8">
          <Carousel
            key={this.state.reportback.id}
            bumpIndex={this.bumpIndex}
            data={this.state.reportback.reportback_items.data}
            reportback={this.state.reportback}
            reportbackItem={reportbackItem}
          />
          </div>
          <div className="col-md-4">
            <MemberSummary user={this.state.reportback.user} />
            <h3>{this.state.reportback.quantity} <small>{label}</small></h3>
            <ul className="list-group">
              <li className="list-group-item">
                <small>{date} <span className="pull-right">{this.state.selectedItemIndex+1} / {this.state.reportback.reportback_items.data.length}</span></small>
              </li>
            </ul>
            <ReportbackItemForm 
              key={reportbackItem.id}
              postReview={this.postReview}
              reportbackItem={reportbackItem}
            />
          </div>
        </div>
      </div>
    );
  },
});

var ReportbackStatusIcon = React.createClass({
  className: function() {
    switch(this.props.status) {
      case 'approved':
        return 'ok';
      case 'promoted':
        return 'heart';
      case 'excluded':
        return 'remove';
      case 'flagged':
        return 'trash';
      }
    return null;
  },
  render: function() {
    var className = 'glyphicon glyphicon-' + this.className();
    return (
      <span className={className} aria-hidden="true"></span>  
    );   
  }
});

var ReportbackItemForm = React.createClass({
  componentDidMount: function() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  getInitialState: function() {
    return {
      action: null,
      enabled: true,
      submitted: null,
    };
  },
  onKeyDown: function(e) {
    var status = null;
    console.log(e.keyCode);
    switch(e.keyCode) {
      // f
      case 70:
        status = 'flagged';
        break;
       // n
      case 78:
        status = 'excluded';
        break;
       // o
      case 79:
        status = 'promoted';
        break;
       // x
      case 88:
        status = 'excluded';
        break;
       // y
      case 89:
        status = 'approved';
        break;
    }
    if (status) {
      this.postReview(status);
    }
  },
  postReview: function(status) {
    this.props.postReview(status);
    this.setState({
      action: status,
      enabled: false,
      submitted: Date.now(),
    });
  },
  render: function() {
    if (!this.state.enabled) {
      return (
        <table className="table">
          <tr><td>
            <small><ReportbackStatusIcon status={this.state.action} /> <strong>{this.state.action}</strong> by Carol {Helpers.formatTimestamp(this.state.submitted / 1000)}</small>
          </td></tr>
        </table>
      );
    }
    return (
      <div className="well">
        <small>publish?</small>
        <button onClick={this.postReview.bind(this, 'approved')} className="btn btn-default btn-lg btn-block" type="submit">
          <ReportbackStatusIcon status='approved' /> yes
        </button>
        <button onClick={this.postReview.bind(this, 'promoted')} className="btn btn-default btn-lg btn-block" type="submit">
          <ReportbackStatusIcon status='promoted' /> omg
        </button>
        <button onClick={this.postReview.bind(this, 'excluded')} className="btn btn-default btn-lg btn-block" type="submit">
          <ReportbackStatusIcon status='excluded' /> no
        </button>
        <hr />
        <button onClick={this.postReview.bind(this, 'flagged')} className="btn btn-default btn-block" type="submit">
          <ReportbackStatusIcon status='flagged' /> flag
        </button>
      </div>
    );
  },
});

var Carousel = React.createClass({
  handleClick: function(increment) {
    this.props.bumpIndex(increment);
  },
  render: function() {
    var items = this.props.data.map(function(reportbackItem, itemIndex) {
      return (
        <CarouselItem 
          reportbackItem={reportbackItem}
          itemIndex={itemIndex}
          key={reportbackItem.id}
        />
      );
    });
    var carouselId = 'carousel' + this.props.reportback.id.toString();
    var controls = null;
    if (items.length > 1) {
      controls = this.renderControls('#' + carouselId);
    }
    return (
      <div id={carouselId} className="carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner" role="listbox">
          {items}
          {controls}
        </div>
      </div>
    );
  },
  renderControls: function(href) {
    return (
      <div>
        <a onClick={this.handleClick.bind(this, -1)} className="left carousel-control" href={href}  role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left carousel-button" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={this.handleClick.bind(this, 1)} className="right carousel-control" href={href}  role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right carousel-button" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
});

var CarouselItem = React.createClass({
  render: function() {
    var itemClassName = 'item';
    if (this.props.itemIndex == 0) {
      itemClassName = itemClassName + ' active';
    }
    return (
      <div className={itemClassName}>
        <img 
          src={this.props.reportbackItem.media.uri}
          className="center-block"
        />
        <div className="carousel-caption">
          {this.props.reportbackItem.caption}
        </div>
      </div>
    );
  }
});
