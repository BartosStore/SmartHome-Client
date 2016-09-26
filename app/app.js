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
	render: function() {
		return (
			<div className="user-link">
				<a href={'https://github.com/' + this.props.username}>
					Github profile
				</a>
			</div>
		)
	}
});

var ProfileName = React.createClass({
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