var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var Screen = require('./screen.jsx');

var CONSTANTS = require('../constants.jsx');

var Lighting = React.createClass({
	render: function() {
		return (
			<Screen
				path="/lighting"
				sName="Osvětlení"
				icon="fa fa-lightbulb-o" />	
		)
	}
});

module.exports = Lighting;