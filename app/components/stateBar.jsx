var React = require('react');

var StateBar = React.createClass({
	render: function() {
		return (
		 	<div className="statebar">
		 		<ul>
					<li><a href="./index.html#/welcomeboard">Welcomeboard</a></li>
					<li><a href="./index.html#/heating">Heating</a></li>
					<li><a href="./index.html#/lighting">Lighting</a></li>

					<li><a href="./index.html#/login">Login</a></li>
				</ul>
		 	</div>
		 )
	}
});

module.exports = StateBar;