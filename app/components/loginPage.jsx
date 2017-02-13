var React = require('react');
var CONSTANTS = require('../constants.jsx');

var LoginPage = React.createClass({
	render: function() {
		return (
			<div className="col-md-8">
				<h2>LoginPage component</h2>

				<p>Test {CONSTANTS.URL}</p>
			</div>
		)
	}
});

module.exports = LoginPage;