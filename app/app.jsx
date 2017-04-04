var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var CONSTANTS = require('./constants.jsx');

var Gateway = require('gateway.jsx');
var Welcomeboard = require('./components/welcomeboard.jsx');
var Heating = require('./components/heating.jsx');
var Lighting = require('./components/lighting.jsx');
var Security = require('./components/security.jsx');

var LoginPage = require('./components/loginPage.jsx');
var NotFound = require('./components/notFound.jsx');

var Application = React.createClass({
	componentWillMount: function() {
		console.log('Application -> componentWillMount');
	},

	requireAuth: function requireAuth(nextState, replace) {
	  console.log('Application -> requireAuth');

	  if (window.sessionStorage.getItem("token") === null) {
	    console.log('token not found -> redirect to login');
	    hashHistory.push('/login');
	  } else {
	  	console.log('token is: ' + window.sessionStorage.getItem("token"));
	  } 
	}, 

	checkPermission: function checkPermission(location) {
		console.log('Application -> CHECK PERMISSION');

		let uuid = window.sessionStorage.getItem("token");

		if (uuid !== null) {
	    let request = {
	      uuid: uuid,
	      path: location.location.pathname
	    };

			$.ajax({
	      url: CONSTANTS.URL_HTTPS_AUTORIZATION,
	      type: "POST",
	      crossDomain: true,
	      data: JSON.stringify(request),
	      contentType: "application/json; charset=utf-8",
	      dataType: "json",
	      success: function(data){
	        console.log('AUTHORIZATION SUCCESS - no redirect');
	        console.log(data);
	        console.log(data.status);

					/* - rizeni pristupu podle DB - */	        
	        if (data.blocked === true) {
	        	hashHistory.push('/welcomeboard');
	        	alert("Blocked: " + data.blocked);
	        }

	        if (data.status === "ok") {
	        	console.log("Access granted!");
	        } else if (data.status === "err_access") {
	        	console.log("Access denied!");
	        	hashHistory.push('/welcomeboard');	
	        	alert("K tomuto obsahu bohužel nemáte přístup.");
	        } else if (data.status === "err_afk") {
	        	console.log("AFK error!");
	        	hashHistory.push('/login');	
	        } else {
	        	console.log("No user for UUID!");
	        	hashHistory.push('/login');	
	        }
	      },
	      error: function(data) {
	        console.log('AUTHORIZATION ERROR - redirect');
	        console.log(data);
	        hashHistory.push('/login');
	      }
	    });
    } 
	},

	render: function() {
		console.log('Application -> render');

		return (
			<div>
				<Router history={hashHistory}>
		      <Route path="login" component={LoginPage} />
					<Route path="/" component={Gateway} onEnter={this.requireAuth}>
		      	<Route path="welcomeboard" component={Welcomeboard} onEnter={this.checkPermission} />
			  	  <Route path="heating" component={Heating} onEnter={this.checkPermission} />
			      <Route path="lighting" component={Lighting} onEnter={this.checkPermission} />
			      <Route path="security" component={Security} onEnter={this.checkPermission} />
			    </Route>
			    <Route path="*" component={NotFound} />
				</Router>
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById('app'));
