import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {Link} from "react-router";

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
									
									to={"/profile/" + this.props.authReducer.user.currentUser.email}
									id="signup">{this.props.authReducer.user.currentUser.email}</Link>
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



module.exports = connect(mapStateToProps, mapDispatchToProps)(App);