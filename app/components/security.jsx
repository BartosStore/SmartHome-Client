var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var Screen = require('./screen.jsx');

var CONSTANTS = require('../constants.jsx');

var Security = React.createClass({
	render: function() {
		return (
			<Screen
				path="/security"
				sName="Zabezpečení"
				icon="fa fa-shield" />	
		)
	}
});

module.exports = Security;