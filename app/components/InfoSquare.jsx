var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var Well = require('react-bootstrap/lib/Well');

var CONSTANTS = require('../constants.jsx');

var InfoSquare = React.createClass({	
	render() {
		return (
			<div className="col-sm-4 col-md-4 col-lg-4 infoSquare">
				<p className="action-square-desc">{this.props.description}</p>
				
				<Well className="wellText">{this.props.value}</Well>
			</div>
		)
	}
});	

module.exports = InfoSquare;