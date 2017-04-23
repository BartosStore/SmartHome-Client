var React = require('react');
var { Link } = require('react-router');

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
			<div className="col-sm-4 col-md-4 col-lg-4 profile">
				<div className="profile-square-img">
					<i className="fa fa-user-circle fa-4x" aria-hidden="true"></i>
				</div>

				<div className="profile-square-nick">
					<h2>Táta</h2>
				</div>

				<Link to="#">
					<div className="profile-square">
						<span>
						<i className="fa fa-user" aria-hidden="true"></i> Profil
						</span>
					</div>
				</Link>

				<Link to="#">
					<div className="profile-square">
						<i className="fa fa-cogs" aria-hidden="true"></i> Konfigurace
					</div>
				</Link>

				<Link to="login">
					<div className="profile-square">
						<i className="fa fa-sign-out" aria-hidden="true"></i> Odhlášení
					</div>
				</Link>

				<div className="profile-square-info">
					<i className="fa fa-copyright" aria-hidden="true"></i> SmartHome 2017
				</div>
			</div>
		)
	}
});

module.exports = Profile;