var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var ToggleButton = require('react-toggle-button')

var CONSTANTS = require('../constants.jsx');

var X = React.createClass({
	render() {
		return (	
			<span>X</span>
		)
	}
});

var Check = React.createClass({
	render() {
		return (	
			<span>OK</span>
		)
	}
});

var SwtchSquare = React.createClass({	
	getInitialState() {
    return {
    	id: 0,
    	value: true
    };
	},

	componentWillMount() {
		console.log("Security -> componentWillMount");
		let swtchId = this.props.id;
		let swtchValue;
		
		if (this.props.value === 1) {
			swtchValue = true;
		} else {
			swtchValue = false;
		}

		this.setState({
			id: swtchId, 
			value: swtchValue
		});
	},

	handleClick(value) {
		console.log("Security -> componentWillMount");
		let tempValue;

		this.setState({
      value: !value,
    });

    if (this.state.value === true) {
			tempValue = 0;
		} else {
			tempValue = 1;
		}
    
    let request = {
      uuid: window.sessionStorage.getItem("token"),
      id: this.state.id,
      value: tempValue
    };

    $.ajax({
      url: CONSTANTS.URL_HTTPS_SQUARE_SWTCH,
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

	handleC(value) {
		console.log("click");
		console.log(!value);
		this.setState({
      value: !value,
    });
	},

	render() {
		console.log("props: " + this.props);
		return (
			<div className="col-sm-4 col-md-4 col-lg-4 swtchSquare">
				<p className="action-square-desc">{this.props.description}</p>

				<div className="toggleButton">
					<ToggleButton 
					  value={this.state.value}
					  inactiveLabel={<X/>}
					  activeLabel={<Check/>}

					  onToggle={this.handleClick} />
				</div>
			</div>
		)
	}
});	

module.exports = SwtchSquare;