import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";


class App extends React.Component {
	componentWillMount() {
		this.props.LOGGED_IN();
	}

	render() {
		return (
			<div>
				<div className="navbar-fixed" > <nav>
					<div id="nav" className="nav-wrapper white">
						<ul className="right">
							{!this.props.authReducer.guest && 
								<li><Link  className="black-text" to="/create" id="signup">New</Link></li>}

							<li><Link className="black-text" to="/" id="signup">Home</Link></li>

							{this.props.authReducer.guest && 
								<li><Link className="black-text" to="/login" id="signup">Login</Link></li>}

							{!this.props.authReducer.guest && <li>
								<Link
									className="black-text"
									to={"/user/" + this.props.authReducer.user.currentUser.displayName}
									id="signup">{this.props.authReducer.user.currentUser.displayName}</Link>
							</li>}
                            
							{!this.props.authReducer.guest && 
								<li><Link className="black-text" href="#" onClick={() => this.props.LOGOUT()}>Logout</Link></li>}
							<li>
								<Link className="black-text" to="/signup" id="signup">Sign Up</Link>
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

App.PropTypes = {
	authReducer: PropTypes.object.isRequired,
	imageReducer: PropTypes.object.isRequired,
	userReducer: PropTypes.object.isRequired,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);