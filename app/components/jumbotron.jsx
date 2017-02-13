var React = require('react');
var CONSTANTS = require('../constants.jsx');

var PrimaryButton = require('primaryButton.jsx');

var Jumbotron = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {
			name: "",
			temp: "",
			humi: ""
		};		
	},

	componentDidMount: function() {
		console.log('componentDidMount -> URL: ' + CONSTANTS.URL + 'room_values');

		this.serverRequest = $.get(CONSTANTS.URL + "room_values", function(result) {
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
			<div className="col-md-8 jumbo">
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

module.exports = Jumbotron;