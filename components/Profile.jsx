import React from "react";
import {doesUserExist} from "../components/higher-order-components/ProfileHOC.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";
import Images from "./dumb-components/Home/Images.jsx";
import Modal from "./dumb-components/Modal.jsx";

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			data: null
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal(id) {
		this.setState({isOpen: true,
			data: id});
		console.log(id);
	}
	closeModal() {
		this.setState({
			isOpen: false
		});
	}
	componentWillMount() {
		this.props.SHOW_RELATED_POSTS(this.props.params.user);
	}
	render() {
		return (
			<div>
				{this.state.isOpen && <Modal closeModal={this.closeModal} post={this.props.imageReducer.posts[this.state.data]}/>}
				<div className="container">
					<div className="row valign-wrapper">
						<div className="card-panel  z-depth-1">
							<div className="col s2">
								<img className="circle responsive-img" />
							</div>
							<div className="col s10">
								<h4>{this.props.params.user}</h4>
								<p>Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
									Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
									Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
								</p>
							
								{this.props.authReducer.isLoggedIn && <button className="btn blue">Edit Profile</button>}
							</div>
						</div>
						
					</div>
					<div className="row">
						<div className="col l12">
							<Images {...this.props} openModal={this.openModal}/>
						</div>
					</div>
				</div>
			</div>);
		
			
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(doesUserExist(Profile)) ;