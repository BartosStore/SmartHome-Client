var React = require('react');

var Menu = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {

		};		
	},

	componentDidMount: function() {

	},

	componentWillUnmount: function() {
		console.log("componentWillMount");

	},

	render: function() {
		return (
			<div className="col-md-8 menu">
				<h2>Menu</h2>
				<p>Položky menu pro přechod na vytápění, osvětlení apod.</p>
				<a href={'https://github.com/' + this.props.username}>
					Github profile
				</a>
				<br />
			</div>
		)
	}
});

module.exports = Menu;