var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var InputRange = require('react-input-range');

var CONSTANTS = require('../constants.jsx');

var SldrSquare = React.createClass({	
	getInitialState() {
    return {
    	id: 0,
    	value: 10
    };
	},

	componentWillMount() {
		console.log("SldrSquare -> componentWillMount");
		var swtchId = this.props.id;
		this.setState({id: swtchId});
	},

	handleClick() {
		console.log("SldrSquare -> componentWillMount");
    
    let request = {
      uuid: window.sessionStorage.getItem("token"),
      id: this.state.id
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
	},	

	handleChange(value) {
		console.log("SldrSquare -> handleChange" + value);
	},

	handleChangeComplete(value) {
		this.setState({ value })
		console.log("SldrSquare -> handleChangeComplete" + value);
	},

	render() {
		return (
			<div className="col-sm-3 col-md-3 col-lg-3 sldrSquare">
				<p>{this.props.description}</p>
    
	      <form className="form">
	        <InputRange
	          maxValue={20}
	          minValue={0}
	          value={this.state.value}
	          onChange={value => this.handleChange(value)}
	          onChangeComplete={value => this.handleChange(value)} />
	      </form>
      </div>
		)
	}
});

module.exports = SldrSquare;