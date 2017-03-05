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
		console.log('componentDidMount -> URL: ' + CONSTANTS.URL_HTTPS_ROOM);

		this.serverRequest = $.get(CONSTANTS.URL_HTTPS_ROOM_VALUES, function(result) {
			console.log(result);

			this.setState({
				name: result.name,
				temp: result.temp,
				humi: result.humi
			});

			console.log('name: ' + result.name);
			console.log('temp: ' + result.temp);

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