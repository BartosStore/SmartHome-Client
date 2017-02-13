var React = require('react');
var ReactDOM = require('react-dom');
var CONSTANTS = require('../constants.jsx');

var Jumbotron = require('./jumbotron.jsx');
var Logger = require('./logger.jsx');
var Menu = require('./menu.jsx');
var Profile = require('./profile.jsx');

var Welcomeboard = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row"> 
					<Jumbotron mainText='Jumbotron' />

					<Logger imageUrl={CONSTANTS.image} />
				</div>

				<div className="row">
					<Menu username={CONSTANTS.username} />

					<Profile name={CONSTANTS.name} />
				</div>
			</div>
		)
	}
});

module.exports = Welcomeboard;