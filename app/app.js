var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

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
			<div className="col-md-7 menu">
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

var Profile = React.createClass({
	getInitialState: function() {
		return {
			hausy_rules: "",
			items: ""
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get("http://localhost:8080/SmartHome-1.0/api/rules", function(result) {
			console.log(result);
			console.log("rules: " + result.evaluationNodeTitle);
		}.bind(this));

	},

	render: function() {
		return (
			<div className="col-md-4 col-md-offset-1 profile">
				<h2>Profile</h2>
				<p>Nastavení spjaté s uživatelem.</p>
				<p>{this.props.name}</p>
			</div>
		)
	}
});

var PrimaryButton = React.createClass({
  render() {
    return (
      <div>
         <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
        </div>
    )
  }
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row"> 

					<Dashboard mainText='Dashboard' />

					<Logger imageUrl={this.props.user.image} />

				</div>

				<div className="row">

					<Menu username={this.props.user.username} />

					<Profile name={this.props.user.name} />

				</div>
			</div>
		)
	}
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));