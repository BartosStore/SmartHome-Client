var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = require('./dashboard.jsx');
var Logger = require('./logger.jsx');
var Menu = require('./menu.jsx');
var Profile = require('./profile.jsx');
var StateBar = require('./stateBar.jsx');

var USER_DATA = {
	name: 'Miroslav Bartos',
	username: 'BartosStore',
	image: 'http://findicons.com/files/icons/1072/face_avatars/300/a02.png'
};

var Welcomeboard = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<StateBar />
				</div>

				<div className="row"> 
					<Dashboard mainText='Dashboard' />

					<Logger imageUrl={USER_DATA.image} />
				</div>

				<div className="row">
					<Menu username={USER_DATA.username} />

					<Profile name={USER_DATA.name} />
				</div>
			</div>
		)
	}
});

module.exports = Welcomeboard;