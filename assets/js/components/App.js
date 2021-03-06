import React from 'react'
import NavLink from './NavLink'
import activeComponent from 'react-router-active-component';
let NavItem = activeComponent('li');

export default React.createClass({
  render() {
    return (
      <div>
    		<nav className="navbar navbar-default navbar-fixed-top">
    		  <div className="container">
    		    <div className="navbar-header">
    		      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    		        <span className="sr-only">Toggle navigation</span>
    		        <span className="icon-bar"></span>
    		        <span className="icon-bar"></span>
    		        <span className="icon-bar"></span>
    		      </button>
    		      <a className="navbar-brand">
                <img src="/images/logo.png" height="20" width="20" />
              </a>
    		    </div>
    		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    		      <ul className="nav navbar-nav">
    		        <NavItem to="/campaigns">Campaigns</NavItem>
    		        <NavItem to="/members">Members</NavItem>
    		      </ul>
    		      <ul className="nav navbar-nav navbar-right">
    		        <li className="dropdown">
    		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><small>carol@dosomething.org</small> <span className="caret"></span></a>
    		          <ul className="dropdown-menu">
    		            <li><a href="#">Reviews</a></li>
    		            <li role="separator" className="divider"></li>
    		            <li><a href="#"><small>Logout</small></a></li>
    		          </ul>
    		        </li>
    		      </ul>
    		    </div>
    		  </div>
    		</nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});
