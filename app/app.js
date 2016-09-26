var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function() {
		return (
			<div className="user-image">
			 	<img className="picture" src={this.props.imageUrl} />
		 	</div>
		 )
	}
});

var ProfileLink = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {
			rest_data: ""	
		};		
	},

	componentDidMount: function() {
		console.log("componentDidMount");

		this.serverRequest = $.get("https://jsonplaceholder.typicode.com/posts", function(result) {
			var first_object = result[0];

			console.log("first_object: " + first_object.title);
			this.setState({
				rest_data: first_object
			});
		}.bind(this));

		console.log("end of componentDidMount");
	},

	componentWillUnmount: function() {
		console.log("componentWillMount");

		this.serverRequest.abort();
	},

	render: function() {
		console.log("render: " + this.state.rest_data);
		
		return (
			<div className="user-link">
				<a href={'https://github.com/' + this.props.username}>
					Github profile
				</a>
				<br />

				{this.state.rest_data.title}
			</div>
		)
	}
});

var ProfileName = React.createClass({
	getInitialState: function() {
		return {
			hausy_rules: ""
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get("http://mydomain.cz:8080/SmartHome-1.0/api/rules", function(result) {
			console.log(result);
			console.log("test: " + result.evaluationNodeTitle);
			console.log("test: " + result[0]);
			console.log("test: " + result[1]);
			console.log("test: " + result[0].evaluationNodeTitle);
		}.bind(this));
	},

	render: function() {
		return (
			<div className="user-name">{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div> 

				<ProfilePic imageUrl={this.props.user.image} />

				<ProfileLink username={this.props.user.username} />

				<ProfileName name={this.props.user.name} />

			</div>
		)
	}
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));