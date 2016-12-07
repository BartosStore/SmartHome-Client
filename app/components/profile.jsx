var React = require('react');

var Profile = React.createClass({
	getInitialState: function() {
		return {
			hausy_rules: "",
			items: ""
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get("http://localhost:8080/SmartHome-1.0/api/rules", function(result) {
			console.log(result);
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