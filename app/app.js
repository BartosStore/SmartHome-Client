var React = require('react');
var ReactDOM = require('react-dom')

var HelloUser = React.createClass({
	render: function() {
		return (
			<div>
				HelloUser!
			</div>
		)
	}
});

ReactDOM.render(<HelloUser />, document.getElementById('app'));