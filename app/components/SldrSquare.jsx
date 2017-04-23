var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var InputRange = require('react-input-range');
//var ReactBootstrapSlider = require("react-bootstrap-slider");

var CONSTANTS = require('../constants.jsx');

var SldrSquare = React.createClass({	
	getInitialState() {
    return {
    	id: 0,
    	value: 20
    };
	},

	componentWillMount() {
		console.log("SldrSquare -> componentWillMount");
		let swtchId = this.props.id;
		let swtchValue = this.props.value;

		this.setState({
			id: swtchId,
			value: swtchValue
		});
	},

	handleClick(value) {
		console.log("SldrSquare -> componentWillMount");
    
    let request = {
      uuid: window.sessionStorage.getItem("token"),
      id: this.state.id,
      value: value
    };

    $.ajax({
      url: CONSTANTS.URL_HTTPS_SQUARE_SLDR,
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(request),
      contentType:"application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log('SUCCESS');
        console.log(data);
      }.bind(this),
      error: function(data) {
        console.log('ERROR on components call');
        console.log(data);
      }
    });

    this.setState({
      value: value,
    });
	},	

	render() {
		return (
			<div className="col-sm-4 col-md-4 col-lg-4 sldrSquare">
				<p className="action-square-desc">{this.props.description}</p>

				<div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
					<InputRange
		        minValue={16}
		        maxValue={28}
		        value={this.state.value}
		        onChange={this.handleClick} />
	       </div>
      </div>
		)
	}
});

module.exports = SldrSquare;
