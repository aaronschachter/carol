import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render: function() {
    // @todo: Move this into a storage.users.add function
    var user = this.props.reportbackItem.user;
    if (user.photo) {
      localStorage['user_' + user.id + '_first_name'] = user.first_name;
    }
    if (user.photo) {
      localStorage['user_' + user.id + '_photo'] = user.photo;
    }

//  @TODO append /this.props.reportbackItem.reportback.id.toString();
    var url = '/members/' + user.id;
    var caption = this.props.reportbackItem.caption.substring(0,60);
    return (
      <div className="thumbnail gallery">
        <NavLink to={url}>
          <img src={this.props.reportbackItem.media.uri} className="img-responsive"/>
          <h5 className="caption">{caption}</h5>
        </NavLink>
      </div>
    );
  },
});
