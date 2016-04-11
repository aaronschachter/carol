import React from 'react'

export default React.createClass({
  render: function() {
    var url = '/reportback/' + this.props.reportbackItem.reportback.id.toString();
    var caption = this.props.reportbackItem.caption.substring(0,60);
    return (
      <div className="thumbnail gallery">
        <a href={url}>
          <img src={this.props.reportbackItem.media.uri} className="img-responsive"/>
          <h5 className="caption">{caption}</h5>
        </a>
      </div>
    );
  },
});
