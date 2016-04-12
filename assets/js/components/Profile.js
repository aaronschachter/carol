import React from 'react';
import Reportback from './Reportback';

export default React.createClass({
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    var url = 'https://northstar.dosomething.org/v1/signups?user=' + this.props.params.userId;
    fetch(url)
      .then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({
          data: json.data,
          loaded: true,
       });
     })
  },
  getInitialState: function() {
    return {
      data: [],
      loaded: false,
    };
  },
  render: function() {
    // @todo: Move this into a storage.users.get function
  	var userId = this.props.params.userId;
    var firstName = "Doer";
    if (localStorage['user_' + userId + '_first_name']) {
      firstName = localStorage['user_' + userId + '_first_name'];
    } 
    var photo = 'https://raw.githubusercontent.com/DoSomething/LetsDoThis-iOS/develop/Lets%20Do%20This/Images.xcassets/Avatar.imageset/Avatar.png';
    if (localStorage['user_' + userId + '_photo']) {
    	photo = localStorage['user_' + userId + '_photo'];
    }
    var content; 
    if (!this.state.loaded) {
      content = <div>Loading...</div>;
    }
    else {
      content = this.state.data.map(function(signup) {
        if (signup.reportback) {
          return (
            <div className="col-md-8 col-md-offset-2">
              <Reportback
                campaign={signup.campaign}
                key={signup.id} 
                reportback={signup.reportback} 
              />
            </div>
          );
        }
        return null;
      });      
    }
    return (
      <div>
        <div className="page-header">
          <ul className="list-group pull-right">
            <button type="button" className="list-group-item"><a href="#">Email {firstName}</a></button>
            <button type="button" className="list-group-item"><a href="#"><small>Flag as inappropriate</small></a></button>
          </ul>
          <div className="media">
            <div className="media-left media-middle">
              <a href={photo} target="_blank">
                <img className="media-object img-circle avatar" src={photo} />
              </a>
            </div>
            <div className="media-body">
              <h1>{firstName}</h1>
              <small>{'united states'.toUpperCase()}</small>
            </div>
          </div>
        </div>
        <div className="row">
          {content}
        </div>
      </div>
    );
  },
});
