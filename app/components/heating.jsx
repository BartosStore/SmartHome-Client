var React = require('react');

var Heating = React.createClass({
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