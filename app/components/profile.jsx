var React = require('react');
var CONSTANTS = require('../constants.jsx');

var Profile = React.createClass({
	getInitialState: function() {
		return {
			hausy_rules: "",
			items: ""
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get(CONSTANTS.URL_HTTPS_RULES, function(result) {
			console.log("result1");
			console.log(result);
			console.log("result2");
			console.log("rules: " + result.evaluationNodeTitle);
		}.bind(this));

	},

	render: function() {
		return (
			<div className="col-md-4 profile">
				<h2>Profile</h2>
				<p>Nastavení spjaté s uživatelem.</p>
				<p>{this.props.name}</p>
			</div>
		)
	}
});

module.exports = Profile;