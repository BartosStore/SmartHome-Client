var React = require('react');

var PrimaryButton = React.createClass({
  render() {
    return (
      <div>
         <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
        </div>
    )
  }
});

module.exports = PrimaryButton;