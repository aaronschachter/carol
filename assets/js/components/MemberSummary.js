import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render: function() {
    var firstName = 'Doer';
    var photo = 'https://raw.githubusercontent.com/DoSomething/LetsDoThis-iOS/develop/Lets%20Do%20This/Images.xcassets/Avatar.imageset/Avatar.png';
    var profileUrl = '/members/' + this.props.user.id;
    if (this.props.user.first_name) {
      firstName = this.props.user.first_name;
    }
    if (this.props.user.photo) {
      photo = this.props.user.photo;
    }
    return (
      <NavLink to={profileUrl}>
        <div className="media">
          <div className="media-left">
            <img className="media-object img-circle avatar" src={photo} />
          </div>
          <div className="media-body media-middle">
            <h4 className="media-heading">{firstName.toUpperCase()}</h4>
            <small>UNITED STATES</small>
          </div>
        </div>
      </NavLink>
    );
  }
});
