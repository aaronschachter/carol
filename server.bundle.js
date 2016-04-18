/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(21);
	var path = __webpack_require__(22);
	var compression = __webpack_require__(23);

	var app = express();
	app.use(compression());
	app.use(express.static(path.join(__dirname, 'dist')));

	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public "storage">\n    <html>\n      <head>\n        <meta charset=utf-8 />\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <title>DS Guardian</title>\n        <link rel="stylesheet" href=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\' />\n        <link rel="stylesheet" href="/index.css" />\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>\n        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>\n      </head>\n      <body>\n        <div id=app>' + appHtml + '</div>\n        <script src="/bundle.js"></script>\n      </body>\n    </html>\n   ';
	}

	var PORT = process.env.PORT || 4815;
	app.listen(PORT, function () {
	  console.log('DS Guardian server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(5);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	var _Campaign = __webpack_require__(9);

	var _Campaign2 = _interopRequireDefault(_Campaign);

	var _Campaigns = __webpack_require__(11);

	var _Campaigns2 = _interopRequireDefault(_Campaigns);

	var _Home = __webpack_require__(13);

	var _Home2 = _interopRequireDefault(_Home);

	var _Inbox = __webpack_require__(14);

	var _Inbox2 = _interopRequireDefault(_Inbox);

	var _Members = __webpack_require__(19);

	var _Members2 = _interopRequireDefault(_Members);

	var _Profile = __webpack_require__(20);

	var _Profile2 = _interopRequireDefault(_Profile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/campaigns', component: _Campaigns2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/campaigns/:campaignId', component: _Campaign2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/campaigns/:campaignId/inbox', component: _Inbox2.default })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/members', component: _Members2.default },
	      _react2.default.createElement(_reactRouter.Route, { path: '/members/:userId', component: _Profile2.default })
	    )
	  )
	);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _reactRouterActiveComponent = __webpack_require__(8);

	var _reactRouterActiveComponent2 = _interopRequireDefault(_reactRouterActiveComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavItem = (0, _reactRouterActiveComponent2.default)('li');

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'nav',
	        { className: 'navbar navbar-default navbar-fixed-top' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'navbar-header' },
	            _react2.default.createElement(
	              'button',
	              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
	              _react2.default.createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' }),
	              _react2.default.createElement('span', { className: 'icon-bar' })
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'navbar-brand' },
	              _react2.default.createElement('img', { src: '/images/logo.png', height: '20', width: '20' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              _react2.default.createElement(
	                NavItem,
	                { to: '/campaigns' },
	                'Campaigns'
	              ),
	              _react2.default.createElement(
	                NavItem,
	                { to: '/members' },
	                'Members'
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'nav navbar-nav navbar-right' },
	              _react2.default.createElement(
	                'li',
	                { className: 'dropdown' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
	                  _react2.default.createElement(
	                    'small',
	                    null,
	                    'carol@dosomething.org'
	                  ),
	                  ' ',
	                  _react2.default.createElement('span', { className: 'caret' })
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  { className: 'dropdown-menu' },
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      'a',
	                      { href: '#' },
	                      'Reviews'
	                    )
	                  ),
	                  _react2.default.createElement('li', { role: 'separator', className: 'divider' }),
	                  _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                      'a',
	                      { href: '#' },
	                      _react2.default.createElement(
	                        'small',
	                        null,
	                        'Logout'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        this.props.children
	      )
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-router-active-component");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _GalleryItem = __webpack_require__(10);

	var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Campaign',

	  componentDidMount: function componentDidMount() {
	    this.fetchData(this.props.params.campaignId);
	  },
	  fetchData: function fetchData(campaignId) {
	    var _this = this;

	    var galleryUrl = 'https://www.dosomething.org/api/v1/reportback-items.json?campaigns=' + campaignId + '&load_user=true';
	    fetch(galleryUrl).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      // @todo - shouldnt set campaign this way in case of no results
	      if (json.data.length > 0) {
	        _this.state.campaign = json.data[0].campaign;
	      }
	      _this.setState({
	        gallery: json.data,
	        galleryLoaded: true,
	        campaign: _this.state.campaign
	      });
	    });
	  },
	  getInitialState: function getInitialState() {
	    return {
	      gallery: [],
	      galleryLoaded: false,
	      campaign: null
	    };
	  },
	  render: function render() {
	    var title, tagline;
	    var campaignId = this.props.params.campaignId;
	    var inboxUrl = '/campaigns/' + campaignId + '/inbox';
	    if (localStorage) {
	      title = localStorage['campaign_' + campaignId + '_title'];
	      tagline = localStorage['campaign_' + campaignId + '_tagline'];
	    }

	    var reportbackItems = this.state.gallery.map(function (reportbackItem) {
	      // @todo: Move this into a storage.users.add function
	      var user = reportbackItem.user;
	      //  @TODO permalink to Reportback instead.
	      var url = '/members/' + user.id;
	      return _react2.default.createElement(_GalleryItem2.default, {
	        key: reportbackItem.id,
	        caption: reportbackItem.caption.substring(0, 60),
	        href: url,
	        imgSrc: reportbackItem.media.uri,
	        reportbackItem: reportbackItem
	      });
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'page-header' },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { className: 'btn btn-primary pull-right', to: inboxUrl, role: 'button' },
	          'Inbox'
	        ),
	        _react2.default.createElement(
	          'h1',
	          null,
	          title
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          tagline
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        reportbackItems
	      )
	    );
	  },
	  renderGallery: function renderGallery() {
	    if (!this.state.galleryLoaded) {
	      return this.renderLoadingView('Loading...');
	    }
	    if (this.state.gallery.length == 0) {
	      return this.renderLoadingView('No photos in gallery.');
	    }
	  },
	  renderLoadingView: function renderLoadingView(message) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        message
	      )
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'GalleryItem',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'col-md-3' },
	      _react2.default.createElement(
	        'div',
	        { className: 'thumbnail gallery' },
	        _react2.default.createElement(
	          _NavLink2.default,
	          { to: this.props.href },
	          _react2.default.createElement('img', { src: this.props.imgSrc, className: 'img-responsive' }),
	          _react2.default.createElement(
	            'h5',
	            { className: 'caption' },
	            this.props.caption
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _SearchForm = __webpack_require__(12);

	var _SearchForm2 = _interopRequireDefault(_SearchForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Campaigns',

	  fetchData: function fetchData() {
	    var _this = this;

	    fetch('https://www.dosomething.org/api/v1/campaigns?count=100').then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      _this.setState({
	        data: json.data
	      });
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    if (!this.props.children) {
	      this.fetchData();
	    }
	  },
	  render: function render() {
	    // If a child exists, this is a single Campaign view:
	    if (this.props.children) {
	      return this.props.children;
	    }
	    // Otherwise return list of Campaigns.
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'page-header' },
	        _react2.default.createElement(_SearchForm2.default, null)
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-3' },
	          _react2.default.createElement(
	            'ul',
	            { id: 'leftNav', className: 'nav nav-pills nav-stacked' },
	            _react2.default.createElement(
	              'li',
	              { className: 'active', role: 'presentation' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'All'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Animals'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Bullying'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Disasters'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              { role: 'presentation' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Discrimination'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-9' },
	          _react2.default.createElement(CampaignsTable, {
	            data: this.state.data
	          })
	        )
	      )
	    );
	  }
	});


	var CampaignsTable = _react2.default.createClass({
	  displayName: 'CampaignsTable',

	  render: function render() {
	    var campaigns = this.props.data.map(function (campaign) {
	      return _react2.default.createElement(CampaignsListItem, {
	        campaign: campaign,
	        key: campaign.id
	      });
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'list-group' },
	      campaigns
	    );
	  }
	});

	var CampaignsListItem = _react2.default.createClass({
	  displayName: 'CampaignsListItem',

	  render: function render() {
	    var campaignId = this.props.campaign.id.toString();
	    if (localStorage) {
	      localStorage['campaign_' + campaignId + '_title'] = this.props.campaign.title;
	      localStorage['campaign_' + campaignId + '_tagline'] = this.props.campaign.tagline;
	    }
	    var url = '/campaigns/' + campaignId;
	    return _react2.default.createElement(
	      _NavLink2.default,
	      { className: 'list-group-item', to: url },
	      _react2.default.createElement(
	        'h3',
	        null,
	        this.props.campaign.title
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'pull-right' },
	        _react2.default.createElement(
	          'small',
	          null,
	          this.props.campaign.status.toUpperCase()
	        )
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        this.props.campaign.tagline
	      )
	    );
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
			displayName: "SearchForm",
			render: function render() {
					return _react2.default.createElement(
							"div",
							{ className: "input-group" },
							_react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Search for..." }),
							_react2.default.createElement(
									"span",
									{ className: "input-group-btn" },
									_react2.default.createElement(
											"button",
											{ className: "btn btn-default", type: "button" },
											_react2.default.createElement("span", { className: "glyphicon glyphicon-search", "aria-hidden": "true" })
									)
							)
					);
			}
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'Home'
	    );
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(15);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Reportback = __webpack_require__(16);

	var _Reportback2 = _interopRequireDefault(_Reportback);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Inbox',

	  bumpIndex: function bumpIndex(increment) {
	    var newIndex = this.state.selectedIndex + increment;
	    this.setState({
	      selectedIndex: newIndex
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.fetchData(this.props.params.campaignId);
	  },
	  fetchData: function fetchData(campaignId) {
	    var _this = this;

	    var url = 'https://www.dosomething.org/api/v1/reportbacks?campaigns=' + campaignId + '&load_user=true';
	    fetch(url).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      var reportbacks = json.data;
	      // Hardcode all item statuses to null for testing postReview / state.
	      for (var i = 0; i < reportbacks.length; i++) {
	        for (var j = 0; j < reportbacks[i].reportback_items.data.length; j++) {
	          reportbacks[i].reportback_items.data[j].status = null;
	        }
	      }
	      _this.setState({
	        inbox: json.data,
	        loaded: true
	      });
	    });
	  },
	  getInitialState: function getInitialState() {
	    return {
	      inbox: [],
	      loaded: false,
	      selectedIndex: 0
	    };
	  },
	  postReview: function postReview(reportbackItemStatus, timestamp, reportbackItemIndex) {
	    var selectedReportback = this.state.inbox[this.state.selectedIndex];
	    selectedReportback.reportback_items.data[reportbackItemIndex].status = reportbackItemStatus;
	    selectedReportback.reportback_items.data[reportbackItemIndex].reviewed_at = timestamp;
	    this.state.inbox[this.state.selectedIndex] = selectedReportback;
	  },
	  render: function render() {
	    // @todo DRY with Campaigns.get util
	    var campaignId = this.props.params.campaignId;
	    var campaignUrl = '/campaigns/' + campaignId;
	    var title = localStorage['campaign_' + campaignId + '_title'];
	    var tagline = localStorage['campaign_' + campaignId + '_tagline'];
	    var content, reportback;
	    if (!this.state.loaded) {
	      content = _react2.default.createElement(
	        'div',
	        null,
	        'Loading'
	      );
	    } else if (this.state.inbox.length < 1) {
	      content = _react2.default.createElement(
	        'div',
	        null,
	        'Inbox zero. Sweet!'
	      );
	    } else {
	      reportback = this.state.inbox[this.state.selectedIndex];
	      content = _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          component: 'div',
	          transitionName: 'entry',
	          transitionLeaveTimeout: 1000,
	          transitionEnterTimeout: 1000
	        },
	        _react2.default.createElement(_Reportback2.default, {
	          campaign: reportback.campaign,
	          key: reportback.id,
	          reportback: reportback,
	          postReview: this.postReview
	        })
	      );
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'page-header' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: campaignUrl },
	            title
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          tagline
	        )
	      ),
	      _react2.default.createElement(Controls, {
	        bumpIndex: this.bumpIndex,
	        inboxIndex: this.state.selectedIndex,
	        inboxLength: this.state.inbox.length,
	        reportback: reportback
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-12' },
	          content
	        )
	      )
	    );
	  }
	});


	var Controls = _react2.default.createClass({
	  displayName: 'Controls',

	  onKeyDown: function onKeyDown(e) {
	    if (e.keyCode == 37) {
	      document.getElementById("prev-entry").click();
	    } else if (e.keyCode == 39) {
	      document.getElementById("next-entry").click();
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    window.addEventListener('keydown', this.onKeyDown);
	  },
	  pagerClick: function pagerClick(increment) {
	    if (this.props.inboxIndex == 0 && increment < 0) {
	      return;
	    }
	    this.props.bumpIndex(increment);
	  },
	  render: function render() {
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
	    return _react2.default.createElement(
	      'nav',
	      null,
	      _react2.default.createElement(
	        'ul',
	        { className: 'pager inbox-pager' },
	        _react2.default.createElement(
	          'li',
	          { className: 'previous' },
	          _react2.default.createElement(
	            'a',
	            { id: 'prev-entry', onClick: this.pagerClick.bind(this, -1) },
	            _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'small',
	              null,
	              _react2.default.createElement('span', { className: 'glyphicon glyphicon-inbox' }),
	              ' ',
	              this.props.inboxIndex + 1,
	              ' / ',
	              this.props.inboxLength
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          { className: 'next' },
	          _react2.default.createElement(
	            'a',
	            { id: 'next-entry', onClick: this.pagerClick.bind(this, 1) },
	            _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _MemberSummary = __webpack_require__(17);

	var _MemberSummary2 = _interopRequireDefault(_MemberSummary);

	var _NavLink = __webpack_require__(7);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _Helpers = __webpack_require__(18);

	var _Helpers2 = _interopRequireDefault(_Helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Reportback',

	  bumpIndex: function bumpIndex(increment) {
	    var newIndex = this.state.selectedItemIndex + increment;
	    var totalItems = this.props.reportback.reportback_items.data.length;
	    if (newIndex == totalItems) {
	      newIndex = 0;
	    } else if (newIndex < 0) {
	      newIndex = totalItems - 1;
	    }
	    this.setState({
	      selectedItemIndex: newIndex
	    });
	  },
	  getInitialState: function getInitialState() {
	    // @todo Support passing itemIndex instead of always hardcoding first item.
	    return {
	      selectedItemIndex: 0
	    };
	  },
	  postReview: function postReview(status, timestamp) {
	    // @todo Post to DS API
	    if (this.props.postReview) {
	      this.props.postReview(status, timestamp, this.state.selectedItemIndex);
	    }
	  },
	  render: function render() {
	    var campaignUrl = '/campaigns/' + this.props.campaign.id;
	    var label = this.props.campaign.reportback_info.noun + ' ' + this.props.campaign.reportback_info.verb;
	    var reportbackItem = this.props.reportback.reportback_items.data[this.state.selectedItemIndex];
	    var date = _Helpers2.default.formatTimestamp(reportbackItem.created_at);
	    return _react2.default.createElement(
	      'div',
	      { className: 'panel panel-default' },
	      _react2.default.createElement(
	        'div',
	        { className: 'panel-body row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-8' },
	          _react2.default.createElement(Carousel, {
	            key: this.props.reportback.id,
	            bumpIndex: this.bumpIndex,
	            data: this.props.reportback.reportback_items.data,
	            reportback: this.props.reportback,
	            reportbackItem: reportbackItem
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-4' },
	          _react2.default.createElement(_MemberSummary2.default, { user: this.props.reportback.user }),
	          _react2.default.createElement(
	            'h3',
	            null,
	            this.props.reportback.quantity,
	            ' ',
	            _react2.default.createElement(
	              'small',
	              null,
	              label
	            )
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'list-group' },
	            _react2.default.createElement(
	              'li',
	              { className: 'list-group-item' },
	              _react2.default.createElement(
	                'small',
	                null,
	                date,
	                ' ',
	                _react2.default.createElement(
	                  'span',
	                  { className: 'pull-right' },
	                  this.state.selectedItemIndex + 1,
	                  ' / ',
	                  this.props.reportback.reportback_items.data.length
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(ReportbackItemView, {
	            key: reportbackItem.id,
	            postReview: this.postReview,
	            status: reportbackItem.status,
	            reviewedAt: reportbackItem.reviewed_at
	          })
	        )
	      )
	    );
	  }
	});


	var ReportbackItemView = _react2.default.createClass({
	  displayName: 'ReportbackItemView',

	  getInitialState: function getInitialState() {
	    return {
	      status: this.props.status,
	      reviewedAt: this.props.reviewedAt
	    };
	  },
	  postReview: function postReview(status) {
	    var timestamp = Date.now() / 1000;
	    this.setState({
	      status: status,
	      reviewedAt: timestamp
	    });
	    this.props.postReview(status, timestamp);
	  },
	  render: function render() {
	    if (this.state.status) {
	      var time = _Helpers2.default.formatTimestamp(this.state.reviewedAt);
	      return _react2.default.createElement(
	        'small',
	        null,
	        _react2.default.createElement(ReportbackStatusIcon, { status: this.state.status }),
	        ' ',
	        _react2.default.createElement(
	          'strong',
	          null,
	          this.state.status
	        ),
	        ' ',
	        time
	      );
	    }
	    return _react2.default.createElement(ReportbackItemForm, {
	      postReview: this.postReview
	    });
	  }
	});

	var ReportbackItemForm = _react2.default.createClass({
	  displayName: 'ReportbackItemForm',

	  componentDidMount: function componentDidMount() {
	    window.addEventListener('keydown', this.onKeyDown);
	  },
	  getInitialState: function getInitialState() {
	    return {
	      reportbackItem: this.props.reportbackItem,
	      enabled: true,
	      submitted: null
	    };
	  },
	  onKeyDown: function onKeyDown(e) {
	    var status = null;
	    // f(flag)
	    if (e.keyCode == 70) {
	      status = 'flagged';
	    }
	    // e(exclude) || n(o) || x
	    else if (e.keyCode == 69 || e.keyCode == 78 || e.keyCode == 88) {
	        status = 'excluded';
	      }
	      // o(mg) || p(romoted)
	      else if (e.keyCode == 79 || e.keyCode == 80) {
	          status = 'promoted';
	        }
	        // a(approve) || y(es)
	        else if (e.keyCode == 65 || e.keyCode == 89) {
	            status = 'approved';
	          }
	    if (status) {
	      this.postReview(status);
	    }
	  },
	  postReview: function postReview(status) {
	    this.props.postReview(status);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'well' },
	      _react2.default.createElement(
	        'small',
	        null,
	        'publish?'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.postReview.bind(this, 'approved'), className: 'btn btn-default btn-lg btn-block', type: 'submit' },
	        _react2.default.createElement(ReportbackStatusIcon, { status: 'approved' }),
	        ' yes'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.postReview.bind(this, 'promoted'), className: 'btn btn-default btn-lg btn-block', type: 'submit' },
	        _react2.default.createElement(ReportbackStatusIcon, { status: 'promoted' }),
	        ' omg'
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.postReview.bind(this, 'excluded'), className: 'btn btn-default btn-lg btn-block', type: 'submit' },
	        _react2.default.createElement(ReportbackStatusIcon, { status: 'excluded' }),
	        ' no'
	      ),
	      _react2.default.createElement('hr', null),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.postReview.bind(this, 'flagged'), className: 'btn btn-default btn-block', type: 'submit' },
	        _react2.default.createElement(ReportbackStatusIcon, { status: 'flagged' }),
	        ' flag'
	      )
	    );
	  }
	});

	var ReportbackStatusIcon = _react2.default.createClass({
	  displayName: 'ReportbackStatusIcon',

	  className: function className() {
	    switch (this.props.status) {
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
	  render: function render() {
	    var className = 'glyphicon glyphicon-' + this.className();
	    return _react2.default.createElement('span', { className: className, 'aria-hidden': 'true' });
	  }
	});

	var Carousel = _react2.default.createClass({
	  displayName: 'Carousel',

	  handleClick: function handleClick(increment) {
	    this.props.bumpIndex(increment);
	  },
	  render: function render() {
	    var items = this.props.data.map(function (reportbackItem, itemIndex) {
	      return _react2.default.createElement(CarouselItem, {
	        reportbackItem: reportbackItem,
	        itemIndex: itemIndex,
	        key: reportbackItem.id
	      });
	    });
	    var carouselId = 'carousel' + this.props.reportback.id.toString();
	    var controls = null;
	    if (items.length > 1) {
	      controls = this.renderControls('#' + carouselId);
	    }
	    return _react2.default.createElement(
	      'div',
	      { id: carouselId, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': 'false' },
	      _react2.default.createElement(
	        'div',
	        { className: 'carousel-inner', role: 'listbox' },
	        items,
	        controls
	      )
	    );
	  },
	  renderControls: function renderControls(href) {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'a',
	        { onClick: this.handleClick.bind(this, -1), className: 'left carousel-control', href: href, role: 'button', 'data-slide': 'prev' },
	        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-left carousel-button', 'aria-hidden': 'true' }),
	        _react2.default.createElement(
	          'span',
	          { className: 'sr-only' },
	          'Previous'
	        )
	      ),
	      _react2.default.createElement(
	        'a',
	        { onClick: this.handleClick.bind(this, 1), className: 'right carousel-control', href: href, role: 'button', 'data-slide': 'next' },
	        _react2.default.createElement('span', { className: 'glyphicon glyphicon-chevron-right carousel-button', 'aria-hidden': 'true' }),
	        _react2.default.createElement(
	          'span',
	          { className: 'sr-only' },
	          'Next'
	        )
	      )
	    );
	  }
	});

	var CarouselItem = _react2.default.createClass({
	  displayName: 'CarouselItem',

	  render: function render() {
	    var itemClassName = 'item';
	    if (this.props.itemIndex == 0) {
	      itemClassName = itemClassName + ' active';
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: itemClassName },
	      _react2.default.createElement('img', {
	        src: this.props.reportbackItem.media.uri,
	        className: 'center-block'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'carousel-caption' },
	        this.props.reportbackItem.caption
	      )
	    );
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'MemberSummary',

	  render: function render() {
	    var firstName = 'Doer';
	    var photo = "/images/avatar.png";
	    var profileUrl = '/members/' + this.props.user.id;
	    if (this.props.user.first_name) {
	      firstName = this.props.user.first_name;
	    }
	    if (this.props.user.photo) {
	      photo = this.props.user.photo;
	    }
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: profileUrl, target: '_blank' },
	      _react2.default.createElement(
	        'div',
	        { className: 'media' },
	        _react2.default.createElement(
	          'div',
	          { className: 'media-left' },
	          _react2.default.createElement('img', { className: 'media-object img-circle avatar', src: photo })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'media-body media-middle' },
	          _react2.default.createElement(
	            'h4',
	            { className: 'media-heading' },
	            firstName.toUpperCase()
	          ),
	          _react2.default.createElement(
	            'small',
	            null,
	            'UNITED STATES'
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Helpers = {
	  formatTimestamp: function formatTimestamp(timestamp) {
	    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	    var date = new Date(timestamp * 1000);
	    var prettyDate = months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ' ' + date.getUTCFullYear() + ' ' + date.toLocaleTimeString();
	    return prettyDate;
	  }
	};

	exports.default = Helpers;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SearchForm = __webpack_require__(12);

	var _SearchForm2 = _interopRequireDefault(_SearchForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Members',
	  render: function render() {
	    if (this.props.children) {
	      return this.props.children;
	    }
	    return _react2.default.createElement(
	      'div',
	      { className: 'container' },
	      _react2.default.createElement(
	        'div',
	        { className: 'page-header' },
	        _react2.default.createElement(_SearchForm2.default, null)
	      )
	    );
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Reportback = __webpack_require__(16);

	var _Reportback2 = _interopRequireDefault(_Reportback);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Profile',

	  componentDidMount: function componentDidMount() {
	    this.fetchData();
	  },
	  fetchData: function fetchData() {
	    var _this = this;

	    var url = 'https://northstar.dosomething.org/v1/signups?user=' + this.props.params.userId;
	    fetch(url).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      _this.setState({
	        data: json.data,
	        loaded: true
	      });
	    });
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: [],
	      loaded: false
	    };
	  },
	  render: function render() {
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
	      content = _react2.default.createElement(
	        'div',
	        null,
	        'Loading...'
	      );
	    } else {
	      content = this.state.data.map(function (signup) {
	        if (signup.reportback) {
	          return _react2.default.createElement(_Reportback2.default, {
	            campaign: signup.campaign,
	            key: signup.id,
	            reportback: signup.reportback
	          });
	        }
	        return null;
	      });
	    }
	    var joined = Math.floor(Math.random() * 5);
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'page-header' },
	        _react2.default.createElement(
	          'div',
	          { className: 'media' },
	          _react2.default.createElement(
	            'div',
	            { className: 'media-left media-middle' },
	            _react2.default.createElement(
	              'a',
	              { href: photo, target: '_blank' },
	              _react2.default.createElement('img', { className: 'media-object img-circle avatar', src: photo })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'media-body' },
	            _react2.default.createElement(
	              'div',
	              { className: 'btn-group pull-right', role: 'group', 'aria-label': '...' },
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-default' },
	                'Messages'
	              ),
	              _react2.default.createElement(
	                'button',
	                { type: 'button', className: 'btn btn-default' },
	                'Flag Profile'
	              )
	            ),
	            _react2.default.createElement(
	              'h1',
	              null,
	              firstName
	            ),
	            _react2.default.createElement(
	              'small',
	              null,
	              'united states'.toUpperCase()
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Joined ',
	              joined + 1,
	              ' yrs ago'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        content
	      )
	    );
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);