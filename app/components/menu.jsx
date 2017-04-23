var React = require('react');
var { Router, Route, hashHistory, IndexRoute, Link } = require('react-router');

var CONSTANTS = require('../constants.jsx');

var MenuSquare = React.createClass({	
	redirect: function() {
		console.log("MenuSquare -> redirect()");
	},

	render: function() {
		//<Link to={{ pathname: this.props.url, query: { screen: this.props.url } }}>
		//<i className="fa fa-lightbulb-o" aria-hidden="true"></i>
		//<i className={this.props.icon} />

		return (
			<Link to={{ pathname: this.props.url }}>
				<div className="col-sm-4 col-md-4 col-lg-4 menuSquare">
					<i className={this.props.icon} />
					<p>{this.props.sName}</p>
				</div>
			</Link>
		)
	}
});	

var Menu = React.createClass({
	getInitialState: function() {
		console.log("getInitialState");

		return {
      screenPath: '/security',
      components: []
		};		
	},

	componentWillMount: function() {
    let request = {
      uuid: "test",
      path: "menu"
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

	componentDidMount: function() {
		console.log("Menu -> componentDidMount");
	},

	componentWillUnmount: function() {
		console.log("Menu -> componentWillMount");
	},

	render: function() {
		var squares = this.state.components.map(function(item, i){
			if (item.id !== 1) {
		  	return (
			  	<MenuSquare
			  		key={i}
			  		id={item.id}
			  		sName={item.sName}
			  		url={item.url}
			  		icon={item.icon} />
			  )
		  } else {
		  	return (
			  	<MenuSquare
				  		key={i}
				  		id={item.id}
				  		sName="Login"
				  		url="/login"
				  		icon={item.icon} />
			  )
		  }
		});

		return (
 			<div className="col-sm-8 col-md-8 col-lg-8 squares">
 				<div className="top-line">
	 				{squares}
	 			</div>
	 		</div>
		)
	}
});

module.exports = Menu;