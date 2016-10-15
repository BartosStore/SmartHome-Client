var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
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
			<div className="col-md-8 user-image">
				
				<div className="jumbotron">
			        <h1>{this.props.mainText}</h1>
			        <p> {this.state.temp} </p>
			        <PrimaryButton buttonText='Learn more'/>
			    </div>
		 	</div>
		 )
	}
});


var Dashboard = React.createClass({
	render: function() {
		return (
		 	<div className="col-md-4 dashboard">
		 		<img className="picture" src={this.props.imageUrl} />
		 	</div>
		 )
	}
});

var ProfileLink = React.createClass({
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
		return (
			<div className="col-md-7 user-link">
				<a href={'https://github.com/' + this.props.username}>
					Github profile
				</a>
				<br />

				{this.state.name}: teplota {this.state.temp} C, vlhkost: {this.state.humi} %
			</div>
		)
	}
});

var ProfileName = React.createClass({
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
			<div className="col-md-4 col-md-offset-1 user-name">{this.props.name}</div>
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

					<ProfilePic />

					<Dashboard imageUrl={this.props.user.image} />

				</div>

				<div className="row">

					<ProfileLink username={this.props.user.username} />

					<ProfileName name={this.props.user.name} />

				</div>
			</div>
		)
	}
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));