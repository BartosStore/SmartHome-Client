var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, Link, hashHistory, IndexRoute } = require('react-router');

var Statebar = require('./components/stateBar.jsx');
var Welcomeboard = require('./components/welcomeboard.jsx');
var Heating = require('./components/heating.jsx');
var Lighting = require('./components/lighting.jsx');

var LoginPage = require('./components/loginPage.jsx');

var Application = React.createClass({
	render: function() {
		return (
			<div className="container app">
				<div className="row">
					<Statebar />
				</div>

				<div className="row">
					{this.props.children}
				</div>
			</div>
		)
	}
});

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Application}>
			<IndexRoute component = {Welcomeboard} />
      <Route path="welcomeboard" component={Welcomeboard} />
      <Route path="heating" component={Heating} />
      <Route path="lighting" component={Lighting} />

      <Route path="login" component={LoginPage} />
    </Route>
	</Router>, 
	document.getElementById('app'));
