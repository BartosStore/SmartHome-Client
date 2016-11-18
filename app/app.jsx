var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, Link, hashHistory, IndexRoute } = require('react-router');

var Dashboard = require('./components/dashboard.jsx');
var Logger = require('./components/logger.jsx');
var Menu = require('./components/menu.jsx');
var Profile = require('./components/profile.jsx');
var StateBar = require('./components/stateBar.jsx');

var Heating = require('./components/heating.jsx');
var Welcomeboard = require('./components/welcomeboard.jsx');

var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

var Application = React.createClass({
	render: function() {
		return (
			<div className="container">
				<ul>
					<li><a href="./index.html#/welcomeboard">Welcomeboard</a></li>
					<li><a href="./index.html#/logger">Logger</a></li>
					<li><a href="./index.html#/heating">Heating</a></li>
				</ul>

				{this.props.children}
			</div>
		)
	}
});

// ReactDOM.render(<Application />, document.getElementById('app'));

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Application}>
			<IndexRoute component = {Welcomeboard} />
      <Route path="welcomeboard" component={Welcomeboard} />
      <Route path="profile" component={Profile} />
      <Route path="logger" component={Logger} />
      <Route path="stateBar" component={StateBar} />
      <Route path="heating" component={Heating} />
    </Route>
	</Router>, 
	document.getElementById('app'));

