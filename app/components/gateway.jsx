var React = require('react');
var Statebar = require('./statebar.jsx');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var WelcomeBoard = require('./welcomeboard.jsx');

var CONSTANTS = require('../constants.jsx');

var Gateway = React.createClass({
	componentWillMount: function() {
		console.log('Gateway -> componentWillMount');
	},

	render: function() {
		console.log('Gateway -> render');
		/*
		console.log(this.props.children);
		console.log(this.props.route.path);
		*/

		if (this.props.children === null) {
			return(
				<div className="container app">
					<div className="row">
						<Statebar />
					</div>

					<div className="row">
						<WelcomeBoard />
					</div>				
				</div>					
			);
		} else {
			return(
				<div className="container app">
					<div className="row">
						<Statebar />
					</div>

					<div className="row">
						{this.props.children}
					</div>				
				</div>
			);
		}
	}
});

module.exports = Gateway;