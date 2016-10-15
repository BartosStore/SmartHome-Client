var React = require('react');

var PrimaryButton = require('primaryButton.jsx');

var Dashboard = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {
			name: "",
			temp: "",
			humi: ""
		};		
	},

	componentDidMount: function() {
		this.serverRequest = $.get("http://localhost:8080/SmartHome-1.0/api/room_values", function(result) {
			console.log(result);
			var values = result;
			this.setState({
				name: values.name,
				temp: values.temp,
				humi: values.humi
			});
		}.bind(this));
	},	

	componentWillUnmount: function() {
		console.log("componentWillMount");

		this.serverRequest.abort();
	},

	render: function() {
		console.log("state-name: " + this.state.name);

		return (
			<div className="col-md-8 dashboard">
				
				<div className="jumbotron">
		        <h2>{this.props.mainText}</h2>
		        <p>Přehled teplot a vlhkosti</p>
	         	<p> {this.state.name}: teplota {this.state.temp} C, vlhkost: {this.state.humi} % </p>
		        <PrimaryButton buttonText='Upravit vytápění'/>
			  </div>

		 	</div>
		 )
	}
});

module.exports = Dashboard;