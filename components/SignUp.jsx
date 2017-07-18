import React from "react";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";

class SignUp extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		this.props.SIGN_UP(this.username.value, this.email.value, this.password.value);
	}
	componentWillMount() {
		if(this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	componentDidMount() {
		if(this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col l8 offset-l2 center-align">
						<form onSubmit={this.handleSubmit.bind(this)}>
							<div className="input-field">
								<input ref={user => this.username = user} type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<input ref={email => this.email = email} type="email" placeholder="E-Mail" />
							</div>
							<div className="input-field">
								<input ref={pass => this.password = pass} type="password" placeholder="Enter your Password" />
							</div>
							<div className="input-field">
								<input type="password" placeholder="Re-Enter your Password" />
							</div>
							<input type="submit" value="Sign Up" className="btn-large deep-orange" />
						</form>
					</div>

				</div>

			</div>
	
		);
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(SignUp);