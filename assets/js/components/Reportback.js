import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  randomDateString() {
    var days = Math.floor(Math.random() * (234 - 3 + 1)) + 3;
    var date = new Date();
    date.setDate(date.getDate() - days);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  },
  render() {
    var campaignUrl = '/campaigns/' + this.props.campaign.id;
    var label = this.props.campaign.reportback_info.noun + ' ' + this.props.campaign.reportback_info.verb;
    var reportbackItem = this.props.reportback.reportback_items.data[0];
    var date = this.randomDateString();
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="pull-right text-right">
            <h4>{this.props.reportback.quantity} <small>{label}</small></h4>
            <span className="glyphicon glyphicon-ok verified-icon" aria-hidden="true"></span>
            <small> Reviewed {date}</small>
          </div>
          <h4><NavLink to={campaignUrl}>{this.props.campaign.title}</NavLink></h4>
          <small>{this.props.campaign.tagline}</small>
        </div>
        <div className="panel-body">
          <Carousel
            key={this.props.reportback.id}
            data={this.props.reportback.reportback_items.data}
            reportback={this.props.reportback}
            reportbackItem={reportbackItem}
          />
        </div>
      </div>
    );
  }
});

var Carousel = React.createClass({
  handleClick: function(increment) {
//    this.props.bumpIndex(increment);
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
