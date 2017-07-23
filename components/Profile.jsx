import React from "react";
import {doesUserExist} from "../components/higher-order-components/ProfileHOC.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";
import Images from "./dumb-components/Home/Images.jsx";
import Modal from "./dumb-components/Modal.jsx";

let style = {
	display: "block",
	zIndex: 1000
};

class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			avatarSettingsOpen: false,
			descriptionSettingsOpen: false,
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
				{this.state.isOpen && 
				<Modal closeModal={this.closeModal}>
					<div style={style} id="modal" className="modal">
						<div className="modal-content">
							<div className="row">
								<div className="col l12 center-align">
									<img id="modal-img" src={this.props.imageReducer.posts[this.state.data].image} className="responsive-img" />
								</div>
							</div>
							<div className="row">
								<div className="col l10 offset-l1">
									<p><b>
										<a
											className="black-text" 
											href={"#/user/" + this.props.imageReducer.posts[this.state.data].author.author}
										>
											{this.props.imageReducer.posts[this.state.data].author.author + " "}
										</a>
									</b>
									{this.props.imageReducer.posts[this.state.data].description}
									</p>

								</div>
							</div>
							<div className="row valign-wrapper">
								<span className="col l6 "><a className="btn-floating btn pink left-align"><i className="material-icons">grade</i></a></span>
								<span className="col l6 right-align">{this.props.imageReducer.posts[this.state.data].stars + " Stars"}</span>
							</div>
						</div>
					</div>
				</Modal>
				}
				<div className="container">
					<div className="row valign-wrapper">
						<div className="card-panel  z-depth-1">
							<div className="col s2">
								{this.props.authReducer.user.currentUser.displayName === this.props.params.user ?
									<a onClick={() => console.log("wow")}><img src={this.props.userReducer.user.photoURL} className="circle responsive-img" /></a>
									:
									<img src={this.props.userReducer.user.photoURL} className="circle responsive-img" />
								}
								
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
							<Images {...this.props} openModal={this.openModal} />
						</div>
					</div>
				</div>
			</div>);
		
			
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(doesUserExist(Profile)) ;