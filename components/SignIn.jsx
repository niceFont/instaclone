import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {withRouter} from "react-router";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this
			.handleSubmit
			.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this
			.props
			.SIGN_IN(this.txtEmail.value, this.txtPassword.value);
            

	}
	
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col l4 offset-l4 center-align  red-text">
						{this.props.authReducer.error && <span className="valign-wrapper">
							<i className="material-icons">error_outline</i>
							{`Error: ${this.props.authReducer.error.message}`}</span>}
					</div>
				</div>
				<div className="row">
					<form onSubmit={this.handleSubmit} className="col l4 offset-l4 center-align">
						<div className="input-field">
							<input
								className="center-align"
								ref={email => this.txtEmail = email}
								type="email"
								id="email"
								placeholder="E-Mail"
								required/>
						</div>
						<div className="input-field">
							<input
								className="center-align"
								ref={password => this.txtPassword = password}
								type="password"
								id="password"
								placeholder="Password"
								required/>
						</div>
						<input className="btn-large" type="submit" value="Sign In"/>
					</form>
				</div>
				

			</div>

		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);