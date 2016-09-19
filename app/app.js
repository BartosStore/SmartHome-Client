var React = require('react');
var ReactDOM = require('react-dom')

var Container = React.createClass({
	render: function() {
		var name = 'Miroslav Bartos';
		var friends = ['Frantisek Svoboda', 'Roleta Stodolova', 'Ivan Ranec'];

		return (
			<div>
				<h3>Name: {name}!</h3>
				<List names={friends} />
			</div>
		)
	}
});

var List = React.createClass({
	render: function() {
		var listItems = this.props.names.map(function(friend) {
			return <li>{friend}</li>
		})

		return (
			<div>
				<h3>Friends</h3>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
});

ReactDOM.render(<Container />, document.getElementById('app'));