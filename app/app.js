var React = require('react');
var ReactDOM = require('react-dom')

var HelloUser = React.createClass({
	render: function() {
		return (
			<div>
				HelloWorld!
			</div>
		)
	}
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));