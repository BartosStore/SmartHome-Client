var React = require('react');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');
var { Panel } = require('react-bootstrap');

var BtnSquare = require('./BtnSquare.jsx');
var SldrSquare = require('./SldrSquare.jsx');
var SwtchSquare = require('./SwtchSquare.jsx');
var InfoSquare = require('./InfoSquare.jsx');

var CONSTANTS = require('../constants.jsx');

var Screen = React.createClass({
	getInitialState() {
    return {
      screenPath: '',
      components: []
    };
	},

	componentWillMount() {
		console.log("Screen -> componentWillMount");
		console.log("path: " + this.props.path);

		this.setState({
			screenPath: this.props.path,
		});
    
    let request = {
      uuid: "test",
      path: this.props.path						
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

	componentDidMount() {
		console.log("Screen -> componentDidMount");

	},

	componentWillUnmount() {
		console.log("Screen -> componentWillUnmount");

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
			 		<div className="row">
			 			<div className="col-sm-12 col-md-12 col-lg-12 action-squares">
			 				<h1><i className={this.props.icon} aria-hidden="true"></i> {this.props.sName}</h1>

			 				<Panel header="Dům" bsStyle="primary" collapsible="true" defaultExpanded="true">
				 				<div className="top-line">
					 				{squares}
					 			</div>
				 			</Panel>

				 			<Panel header="Zahrada" bsStyle="success">
				 			</Panel>
				 		</div>
				 	</div>
			</div>
		 )
	}
});

module.exports = Screen;