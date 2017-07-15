import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";


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
							{!this.props.authReducer.guest && 
								<li><Link to="/create" id="signup">New</Link></li>}

							<li><Link to="/" id="signup">Home</Link></li>

							{this.props.authReducer.guest && 
								<li><Link to="/login" id="signup">Login</Link></li>}

							{!this.props.authReducer.guest && <li>
								<Link
									
									to={"/profile/" + this.props.authReducer.user.currentUser.displayName}
									id="signup">{this.props.authReducer.user.currentUser.displayName}</Link>
							</li>}
                            
							{!this.props.authReducer.guest && 
								<li><Link href="#" onClick={() => this.props.LOGOUT()}>Logout</Link></li>}
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

App.PropTypes = {
	displayName: PropTypes.string,
	guest: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);