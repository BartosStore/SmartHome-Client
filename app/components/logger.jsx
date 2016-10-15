var React = require('react');

var Logger = React.createClass({
	render: function() {
		return (
		 	<div className="col-md-4 logger">
		 		<h2>Logger</h2>
		 		<p>výpis upozornění</p>
		 		<img className="picture" src={this.props.imageUrl} />
		 	</div>
		 )
	}
});

module.exports = Logger;