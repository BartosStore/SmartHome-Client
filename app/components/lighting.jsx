var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var BtnSquare = require('./BtnSquare.jsx');
var SldrSquare = require('./SldrSquare.jsx');
var SwtchSquare = require('./SwtchSquare.jsx');
var InfoSquare = require('./InfoSquare.jsx');

var CONSTANTS = require('../constants.jsx');

var Lighting = React.createClass({
	getInitialState() {
    return {
      screenPath: '/lighting',
      components: []
    };
	},

	componentWillMount() {
		console.log("Heating -> componentWillMount");
    
    let request = {
      uuid: "test",
      path: "/lighting"
    };

    console.log("request: " + request + "/nurl: " + CONSTANTS.URL_HTTPS_GET_COMPONENTS);

    $.ajax({
      url: CONSTANTS.URL_HTTPS_GET_COMPONENTS,
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(request),
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
		  if (item.cType === "btn") {
		  	console.log("btn rendering");	
		  	return (
			  	<BtnSquare
			  		key={i}
			  		id={item.id}
			  		cName={item.cName}
			  		value={item.value}
			  		description={item.description} />
			  )
		  } else if (item.cType === "sldr") {
		  	console.log("sldr rendering");	
		  	return (
			  	<SldrSquare
			  		key={i}
			  		id={item.id}
			  		cName={item.cName}
			  		value={item.value}
			  		description={item.description} />
			  )
		  } else if (item.cType === "swtch") {
		  	console.log("swtch rendering");	
		  	return (
			  	<SwtchSquare
			  		key={i}
			  		id={item.id}
			  		cName={item.cName}
			  		value={item.value}
			  		description={item.description} />
			  )	
		  } else if (item.cType === "info") {
		  	console.log("info rendering");	
		  	return (
			  	<InfoSquare
			  		key={i}
			  		id={item.id}
			  		cName={item.cName}
			  		value={item.value}
			  		description={item.description} />
			  )	
		  }		  		  
		});

		return (
			<div className="container">
			 	<div className="jumbotron">
			 		<div className="row">
			 			<div className="col-sm-12 col-md-12 col-lg-12 squares">
				 			{squares}
				 		</div>
				 	</div>
			 	</div>
			</div>
		 )
	}
});

module.exports = Lighting;