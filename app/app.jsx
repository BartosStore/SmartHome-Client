var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = require('./components/dashboard.jsx');
var Logger = require('./components/logger.jsx');
var Menu = require('./components/menu.jsx');
var Profile = require('./components/profile.jsx');
var StateBar = require('./components/stateBar.jsx');

var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

var Application = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<StateBar />
				</div>

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

ReactDOM.render(<Application user={USER_DATA} />, document.getElementById('app'));