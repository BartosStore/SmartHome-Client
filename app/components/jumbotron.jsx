var React = require('react');
var Carousel = require('nuka-carousel');
var PrimaryButton = require('primaryButton.jsx');

var CONSTANTS = require('../constants.jsx');

var CarouselMember = React.createClass({
	render: function() {
		return(
			<div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 carousel-member">
				<row>
					<div className="col-sm-12 col-md-12 col-lg-12 carousel-text">
						<p className="carousel-text-border">{this.props.text}</p>
					</div>
				</row>
				<row>
					<div className="col-sm-12 col-md-12 col-lg-12 carousel-main">
						<i className={this.props.icon} aria-hidden="true"></i>
						<span className="carousel-value">
							&nbsp;{this.props.value}{this.props.unit}
						</span>
					</div>
				</row>
			</div>
		)
	}
});


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
			<div className="col-sm-8 col-md-8 col-lg-8">
			<div className="col-sm-12 col-md-12 col-lg-12 jumbo">
				<Carousel>
	        <CarouselMember text="Venkovní teplota" value="18" unit="°C" icon="fa fa-thermometer-full" />
	        <CarouselMember text="Obývací pokoj - teplota" value="23" unit="°C" icon="fa fa-thermometer-full" />
	        <CarouselMember text="Obývací pokoj - vlhkost" value="64" unit="%" icon="fa fa-cloud" />
				</Carousel>
			</div>
			</div>
		 )
	}
});

module.exports = Jumbotron;
