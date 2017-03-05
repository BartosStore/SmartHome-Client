var React = require('react');
var ReactDOM = require('react-dom');
//var { Router, Route, Link, hashHistory, IndexRoute } = require('react-router');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var Gateway = require('gateway.jsx');
var Welcomeboard = require('./components/welcomeboard.jsx');
var Heating = require('./components/heating.jsx');
var Lighting = require('./components/lighting.jsx');

var LoginPage = require('./components/loginPage.jsx');
var NotFound = require('./components/notFound.jsx');

var Application = React.createClass({
	requireAuth: function requireAuth(nextState, replace) {
	  console.log('Application.requireAuth');
	  console.log(nextState);
	  if (false) {
	    console.log('redirect to login');
	    //hashHistory.push('/login');
	    replace({
      	pathname: '/login',
      	state: { nextPathname: nextState.location.pathname }
    	})
	  } 
	}, 

	render: function() {
		console.log('Application.render');

		return (
			<div>
				<Router history={hashHistory}>
		      <Route path="login" component={LoginPage} />
					<Route path="/" component={Gateway} onEnter={this.requireAuth}>
		      	<Route path="welcomeboard" component={Welcomeboard} />
			  	  <Route path="heating" component={Heating} />
			      <Route path="lighting" component={Lighting} />
			    </Route>
			    <Route path="*" component={NotFound} />
				</Router>
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById('app'));

/*
	<div className="container app">
		<div className="row">
			<Statebar />
		</div>

		<div className="row">
			{this.props.children}
		</div>
*/				