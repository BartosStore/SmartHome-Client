var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var ToggleButton = require('react-toggle-button')

var CONSTANTS = require('../constants.jsx');

var X = React.createClass({
	render() {
		return (	
			<p>X</p>
		)
	}
});

var Check = React.createClass({
	render() {
		return (	
			<p>OK</p>
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
		var swtchId = this.props.id;
		this.setState({id: swtchId});
	},

	handleClick() {
		console.log("Security -> componentWillMount");
    
    let request = {
      uuid: window.sessionStorage.getItem("token"),
      id: this.state.id
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
		console.log(value);
		this.setState({
      value: !value,
    });
	},

	render() {
		console.log("props: " + this.props);
		return (
			<div className="col-sm-3 col-md-3 col-lg-3 swtchSquare">
				<p>{this.props.description}</p>

				<div className="toggleButton">
					<ToggleButton 
						inactiveLabel={<i className="fa fa-times"></i>}
					  activeLabel={<i className="fa fa-check"></i>}
						value={this.state.value} 
						containerStyle={{display:'inline-block',width:'100px'}} 
						trackStyle={{width:'100px'}} 
						thumbAnimateRange={[1, 80]} 
						activeLabelStyle={{ width:'50px' }} 
						inactiveLabelStyle={{ width:'50px' }}
					  colors={{
					    activeThumb: {
					      base: 'rgb(250,250,250)',
					    },
					    inactiveThumb: {
					      base: 'rgb(62,130,247)',
					    },
					    active: {
					      base: '#428bca',
					      hover: 'rgb(91,192,222)',
					    },
					    inactive: {
					      base: 'rgb(65,66,68)',
					      hover: 'rgb(95,96,98)',
					    }
					  }}
						onToggle={(value) => {							
					    {this.handleC(value)}
					  }} />
				</div>
			</div>
		)
	}
});	

module.exports = SwtchSquare;