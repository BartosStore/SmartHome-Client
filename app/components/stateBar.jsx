var React = require('react');
var { Link } = require('react-router');

var StateBar = React.createClass({
	render: function() {
		let now = new Date();
		let time = ("0" + now.getHours()).slice(-2) + ":" +  ("0" + now.getMinutes()).slice(-2);
		let date = now.getDate() + "." + now.getMonth() + ".";
		console.log("time:" + now.getHours() + ":" + now.getMinutes());

		return (
		 	<div className="col-sm-12 col-md-12 col-lg-12 statebar">
		 		<span className="col-sm-2 col-md-2 col-lg-2 top-bar-time">{time}</span>
		 		<span className="col-sm-8 col-md-8 col-lg-8 statebar-nav">
		 			<Link to="/welcomeboard">
							<i className="fa fa-chevron-up top-bar-favicon" /> 
							Domů
							<i className="fa fa-chevron-up top-bar-favicon" />
					</Link>
				</span>
		 	</div>
		 )
	}
});

module.exports = StateBar;
