var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var CONSTANTS = require('../constants.jsx');

var MenuSquare = React.createClass({	
	render() {
		return (
			<div className="col-sm-4 col-md-4 col-lg-4 menuSquare">
				<div className='form-group'>
          <input 
            id='menuSubmit' 
            className='btn' 
            type='submit' 
            placeholder='test' />
        </div>
			</div>
		)
	}
});	

var Menu = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {
      screenPath: '/security',
      components: [
			  {
			    "id": 3,
			    "cName": "swtch_light1",
			    "description": "Vypínač světla - obývací pokoj",
			    "cType": "swtch",
			    "value": 0
			  }
			]
		};		
	},

	componentDidMount: function() {
		console.log("Menu -> componentDidMount");
	},

	componentWillUnmount: function() {
		console.log("Menu -> componentWillMount");

    let request = {
      uuid: "test",
      path: "/security"
    };

    $.ajax({
      url: CONSTANTS.URL_HTTPS_GET_SCREENS,
      type: "GET",
      crossDomain: true,
      contentType:"application/json; charset=utf-8",
      dataType: "json",
      success: function(data){
        console.log('SUCCESS');
        console.log(data);

        this.setState({components: data});
      }.bind(this),
      error: function(data) {
        console.log('ERROR on components call');
        console.log(data);
      }
    });
	},

	render: function() {
		var squares = this.state.components.map(function(item, i){
	  	return (
		  	<MenuSquare
		  		key={i}
		  		id={item.id}
		  		sName={item.sName} />
		  )
		});

		return (
 			<div className="col-sm-8 col-md-8 col-lg-8 squares">
	 			{squares}
	 		</div>
		)
	}
});

module.exports = Menu;