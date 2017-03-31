var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var CONSTANTS = require('../constants.jsx');

var Heating = React.createClass({
	componentWillMount() {
		//console.log("heating -> path: " + this.props.route.path);

	},

	render: function() {
		return (
			<div className="container">
			 	<div className="jumbotron">
			 		This is heating!
			 	</div>

			 	<div className="row">
			 		This is heating!
			 	</div>
			</div>
		 )
	}
});

module.exports = Heating;