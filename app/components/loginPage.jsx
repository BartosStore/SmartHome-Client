var React = require('react');
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
		return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
	},

	handleSubmit: function() {
    console.log('LoginPage.handleSubmit');
    
		var formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    };

		$.ajax({
      url: '/some/url',
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(data) {
        if (confirm('Thank you for your message. Can I erase the form?')) {
          document.querySelector('.form-input').val('');
        }
      },
      error: function(xhr, status, err) {
        console.error(status, err.toString());
        alert('There was some problem with sending your message.');
      }
    });
    
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
	},
	render: function() {
		return (
			<form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Smart Home</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formName' title='Full Name:' />

          <input id='formName' className='form-input' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formEmail' title='Email:' />

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formSubject' title='Subject:'/>

          <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formMessage' title='Message:' />

          <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
        </fieldset>
        
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
		)
	}
});

module.exports = LoginPage;





		