var React = require('react');
var Statebar = require('./statebar.jsx');
var WelcomeBoard = require('./welcomeboard.jsx');

var Gateway = React.createClass({
	render: function() {
		console.log('Gateway.render');
		console.log(this.props.children);

		if (this.props.children === null) {
			return(
				<div className="container app">
					<div className="row">
						<Statebar />
					</div>

					<div className="row">
						<WelcomeBoard />
					</div>				
				</div>					
			);
		} else {
			return(
				<div className="container app">
					<div className="row">
						<Statebar />
					</div>

					<div className="row">
						{this.props.children}
					</div>				
				</div>
			);
		}
	}
});

module.exports = Gateway;