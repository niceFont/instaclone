import React from "react";
import {doesUserExist} from "../components/higher-order-components/ProfileHOC.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";
import Images from "./dumb-components/Home/Images.jsx";
import Modal from "./dumb-components/Modal.jsx";
import ModalAvatar from "./dumb-components/Profile/ModalAvatar.jsx";
import {ImageModal} from "./dumb-components/ImageModal.jsx";

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
		this.openSettings = this.openSettings.bind(this);
		this.handleDescSubmit = this.handleDescSubmit.bind(this);
		
	}

	openModal(id) {
		this.setState({isOpen: true,
			data: id});
	}

	openSettings(setting) {
		switch(setting) {
		case "Avatar":
			this.setState({
				avatarSettingsOpen: true
			});
			break;
		case "Description":
			this.setState({
				descriptionSettingsOpen: true
			});
			break;
		}
	}

	

	closeModal() {
		this.setState({
			isOpen: false,
			avatarSettingsOpen: false,
			descriptionSettingsOpen: false
		});
	}
	componentWillMount() {
		this.props.SHOW_RELATED_POSTS(this.props.params.user);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.userReducer.update_success) {
			this.setState({
				descriptionSettingsOpen: false,
				avatarSettingsOpen: false
			});
			this.forceUpdate();
		}
	}
	
	handleDescSubmit(e) {
		e.preventDefault();
		this.props.UPDATE_DESCRIPTION(this.props.authReducer.user.currentUser.displayName, this.description.value);
	}

	render() {
		return (
			<div>
				{
					this.state.isOpen && 
				<Modal closeModal={this.closeModal}>
					<ImageModal {...this.props} data={this.state.data} />
				</Modal>
				}
				{
					this.state.avatarSettingsOpen &&
					<Modal closeModal={this.closeModal}>
						<ModalAvatar {...this.props} closeModal={this.closeModal}/>
					</Modal>
				}
				<div className="container">
					<div className="row valign-wrapper">
						<div className="col l12 card-panel  z-depth-1">
							<div className="col l2">
								{
									this.props.authReducer.isLoggedIn && this.props.authReducer.user.currentUser.displayName === this.props.params.user  ?
										<a onClick={() => this.openSettings("Avatar")}><img src={this.props.userReducer.user.photoURL} className="circle responsive-img" /></a>
										:
										<img src={this.props.userReducer.user.photoURL} className="circle responsive-img" />
								}
							</div>
							<div className="col l10">
								<h4><b>{this.props.params.user}</b></h4>
							</div>
							<div className="row">
								{
									!this.state.descriptionSettingsOpen && <div className="col l9">
										{this.props.userReducer.user.description && <p>{this.props.userReducer.user.description}
										</p>}
										{this.props.authReducer.isLoggedIn && <button onClick={() => this.openSettings("Description")} className="btn blue">Edit Description</button>}
									</div>
								}

								{
									this.state.descriptionSettingsOpen && 
									<div className="col l5 center-align">
										<form onSubmit={this.handleDescSubmit}>
											<div className="input-field">
												<textarea placeholder={this.props.userReducer.user.description} ref={(desc)=> this.description = desc} className="materialize-textarea">
												</textarea>
											</div>
											<input  type="submit" value="Save" className="btn" />
										</form>
									</div>
								}
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