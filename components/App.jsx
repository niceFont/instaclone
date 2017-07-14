import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import { SIGN_IN, LOGGED_IN, LOGOUT, SIGN_UP } from "../redux/actions/authActions.js";
import { SHOW_NEWEST, UPLOAD } from "../redux/actions/ImageActions.js";
import { bindActionCreators } from "redux";

class App extends React.Component {
	componentDidMount() {
		this.props.LOGGED_IN();
	}
	render() {
		return (
			<div>
				< div className = "navbar-fixed" > <nav>
					<div id="nav" className="nav-wrapper teal">
						<ul className="right">
							{this.props.authReducer.isLoggedIn && 
								<li><Link to="/create" id="signup">New</Link></li>}

							<li><Link to="/" id="signup">Home</Link></li>

							{!this.props.authReducer.isLoggedIn && 
								<li><Link to="/login" id="signup">Login</Link></li>}

							{this.props.authReducer.isLoggedIn && <li>
								<Link
									
									to={"/profile/" + this.props.authReducer.user.currentUser.displayName}
									id="signup">{this.props.authReducer.user.currentUser.displayName}</Link>
							</li>}
                            
							{this.props.authReducer.isLoggedIn && 
								<li><Link href="#" onClick={this.props.LOGOUT}>Logout</Link></li>}
							<li>
								<Link to="/signup" id="signup">Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { authReducer: state.authReducer, imageReducer: state.imageReducer };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		LOGGED_IN,
	}, dispatch);
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);