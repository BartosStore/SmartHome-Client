var React = require('react');

var Logger = React.createClass({
	render: function() {
		let now = new Date();
		let time = ("0" + now.getHours()).slice(-2) + ":" +  ("0" + now.getMinutes()).slice(-2);

		return (
		 	<div className="col-sm-4 col-md-4 col-lg-4 logger top-line">
		 		<h2><i className="fa fa-bars" aria-hidden="true"></i> Historie</h2>
		 		<p>{time} - odemčeno Zámek dveří</p>
		 		<p>{time} - zapnuto Světlo v obývacím pokoji</p>
		 		<p>{time} - zapnuto Světlo v kuchyni</p>
		 	</div>
		 )
	}
});

module.exports = Logger;