var React = require('react');
var ReactDOM = require('react-dom');
//var { Router, Route, Link, hashHistory, IndexRoute } = require('react-router');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var CONSTANTS = require('./constants.jsx');

var Gateway = require('gateway.jsx');
var Welcomeboard = require('./components/welcomeboard.jsx');
var Heating = require('./components/heating.jsx');
var Lighting = require('./components/lighting.jsx');

var LoginPage = require('./components/loginPage.jsx');
var NotFound = require('./components/notFound.jsx');

var Application = React.createClass({
	componentWillMount: function() {
		let uuid = window.sessionStorage.getItem("token");

		if (uuid === null) {
	    let request = {
	      uuid: uuid,
	    };

			$.ajax({
	      url: CONSTANTS.URL_HTTPS_AUTORIZATION,
	      type: "POST",
	      crossDomain: true,
	      data: JSON.stringify(request),
	      contentType: "application/json; charset=utf-8",
	      dataType: "json",
	      success: function(data){
	        console.log('AUTHORIZATION SUCCESS');
	        console.log(data);

	      },
	      error: function(data) {
	        console.log('AUTHORIZATION ERROR');
	        console.log(data);
	      }
	    });
    } 
	},

	requireAuth: function requireAuth(nextState, replace) {
	  console.log('Application.requireAuth');

	/*
	  if (window.sessionStorage.getItem("token") === null) {
	    console.log('token not found -> redirect to login');
	    //hashHistory.push('/login');
	    replace({
      	pathname: '/login',
      	state: { nextPathname: nextState.location.pathname }
    	})
	  } else {
	  	console.log('token is: ' + window.sessionStorage.getItem("token"));
	  } 
	*/
	}, 

	checkPermission: function checkPermission(component) {
		console.log('Application.checkPermission');
		console.log(component);
	},

	render: function() {
		console.log('Application -> render');

		return (
			<div>
				<Router history={hashHistory}>
		      <Route path="login" component={LoginPage} />
					<Route path="/" component={Gateway} onEnter={this.requireAuth}>
		      	<Route path="welcomeboard" component={Welcomeboard} />
			  	  <Route path="heating" component={Heating} onEnter={this.checkPermission('heating')} />
			      <Route path="lighting" component={Lighting} />
			    </Route>
			    <Route path="*" component={NotFound} />
				</Router>
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById('app'));
