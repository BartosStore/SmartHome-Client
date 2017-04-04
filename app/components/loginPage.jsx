var React = require('react');
//var Router = require('react-router');
var { Router, Route, hashHistory, IndexRoute } = require('react-router');

var CONSTANTS = require('../constants.jsx');

var ReactFormLabel = React.createClass({
  render: function() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
});

var LoginPage = React.createClass({
	getInitialState: function () {
    window.sessionStorage.setItem("token", "");

		return {
      name: '',
      pass: ''
    };
	},

  componentWillMount() {
    console.log('LoginPage -> componentWillMount');

  },

  componentDidMount() {
    console.log('LoginPage -> componentDidMount');
  },

  componentWillUnmount() {
    console.log('LoginPage -> componentWillUnmount');
  },

  handleChange(e) {
    console.log('LoginPage -> handleChange');
    let newState = {};

    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },

  onChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },

  onSubmit(e) {
    console.log('onSubmit: ' + this.state.name + '_' + this.state.pass);
    
    let request = {
      name: this.state.name,
      pass: this.state.pass
    };

    $.ajax({
      url: CONSTANTS.URL_HTTPS_LOGIN,
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(request),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(data){
        console.log('SUCCESS');
        console.log(data);

        if (data.token != null) {
          window.sessionStorage.setItem("token", data.token);
          alert("Byli jste úspěšně přihlášeni. " + window.sessionStorage.getItem("token"));
          hashHistory.push('/welcomeboard');
        } else {
          alert("Došlo k chybě při prihlášení. Opakujte jej prosím.");
        }
      },
      error: function(data) {
        console.log('ERROR on client');
        console.log(data);
      }
    });  
  },

	render: function() {
    return (
      <form className='react-form' onSubmit={this.onSubmit}>
        <h1>Smart Home</h1>
        <fieldset className='form-group'>
  
          <ReactFormLabel htmlFor='nameInput' title='Name:' />
          <input 
            id='nameInput'
            name='name'
            type={'text'} 
            value={this.state.name}
            onChange={this.onChange}
            required> 
          </input>
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='passInput' title='Password:' />
          <input 
            id='passInput'
            name='pass'
            type={'password'} 
            value={this.state.pass}
            onChange={this.onChange}
            required> 
          </input>
        </fieldset>

        <div className='form-group'>
          <input 
            id='submitInput' 
            className='btn' 
            type='submit' 
            placeholder='Send message' />
        </div>
      </form>
		)
	}
});

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

module.exports = LoginPage;
