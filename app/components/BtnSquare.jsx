var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var Button = require('react-bootstrap/lib/Button');

var CONSTANTS = require('../constants.jsx');

var BtnSquare = React.createClass({	
	getInitialState() {
    return {
    	id: 0
    };
	},

	componentWillMount() {
		console.log("BtnSquare -> componentWillMount");
		var btnId = this.props.id;
		this.setState({id: btnId});
	},

	handleClick() {
		console.log("BtnSquare -> handleClick");
    
    let request = {
      uuid: window.sessionStorage.getItem("token"),
      id: this.state.id,
      value: 0      
    };

    console.log(request);

    $.ajax({
      url: CONSTANTS.URL_HTTPS_SQUARE_BTN,
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

	handleC() {
		console.log("click");
	},

	render() {
		return (
			<div className="col-sm-3 col-md-3 col-lg-3 btnSquare">
				<p>{this.props.description}</p>

				<div className="classicButton">
					<Button bsStyle="primary" onClick={this.handleClick}>Proveď</Button>
				</div>
			</div>
		)
	}
});	

module.exports = BtnSquare;