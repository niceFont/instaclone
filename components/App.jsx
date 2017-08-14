import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import { Container, Menu, Button, Segment, Sticky } from "semantic-ui-react";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			data: null
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	
	}

	componentWillMount() {
		this.props.LOGGED_IN();
	}

	openModal(id) {
		this.setState({isOpen: true,
			data: id});
	}


	closeModal() {
		this.setState({
			isOpen: false,
			avatarSettingsOpen: false,
			descriptionSettingsOpen: false
		});
	}
	render() {
		
		return (
			<div>
				<Sticky>
					<Segment >
						<Menu secondary >
							<Menu.Item position="right"><Link className="black-text" to="/" id="signup">Home</Link></Menu.Item>
							{!this.props.authReducer.guest && 
								<Menu.Item><Link  to="/create" id="signup">New</Link></Menu.Item>}
							{this.props.authReducer.guest && 
								<Menu.Item><Link to="/login" id="signup">Login</Link></Menu.Item>}
							{!this.props.authReducer.guest && 
								<Menu.Item><Link to={`/user/${this.props.authReducer.user.currentUser.displayName}`}>My Profile</Link></Menu.Item>}
							{!this.props.authReducer.guest && 
								<Menu.Item><Link  href="#" onClick={() => this.props.LOGOUT()}>Logout</Link></Menu.Item>}
							<Menu.Item>
								<Link  to="/signup" id="signup">Sign Up</Link>
							</Menu.Item>
						</Menu>
					</Segment>
				</Sticky>
				{this.props.children}
				
			</div>
		);
	}
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(App);