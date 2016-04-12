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
          return <Reportback
            campaign={signup.campaign}
            key={signup.id} 
            reportback={signup.reportback} 
          />;
        }
        return null;
      });      
    }
    return (
      <div>
        <div className="page-header">
          <img src={photo} className="img-circle avatar pull-left" />
          <h1>{firstName}</h1>
          <h4>{'united states'.toUpperCase()}</h4>
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  },
});
