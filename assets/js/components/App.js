import React from 'react'
import { Link } from 'react-router'

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
		      <Link className="navbar-brand" to="/campaigns"><img src="https://raw.githubusercontent.com/DoSomething/LetsDoThis-iOS/develop/Lets%20Do%20This/Images.xcassets/DS%20Logo.imageset/DS%20Logo.png" height="20" width="25" /></Link>
		    </div>
		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul className="nav navbar-nav">
		        <li><Link to="/campaigns" activeClassName="active">Campaigns</Link></li>
		        <li><Link to="/members" activeClassName="active">Members</Link></li>
		      </ul>
		      <ul className="nav navbar-nav navbar-right">
		        <li className="dropdown">
		          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><small>carol@dosomething.org</small> <span className="caret"></span></a>
		          <ul className="dropdown-menu">
		            <li><a href="#">Reviews</a></li>
		            <li role="separator" className="divider"></li>
		            <li><a href="#">Logout</a></li>
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
