var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var Screen = require('./screen.jsx');

var CONSTANTS = require('../constants.jsx');

var Heating = React.createClass({
	render: function() {
		return (
			<Screen
				path="/heating"
				sName="Vytápění"
				icon="fa fa-thermometer-half" />
		 )
	}
});

module.exports = Heating;