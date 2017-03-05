var React = require('react');

var NotFound = React.createClass({
	render: function() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>Stránka nenalezena</h2>
							<p>Chyba 404...</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = NotFound;