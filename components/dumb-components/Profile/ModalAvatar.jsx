import React from "react";
import Modal from "../Modal.jsx";


let style = {
	display: "block",
	zIndex: 1000
};

class ModalAvatar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.UPDATE_AVATAR(this.prefile.files[0], this.props.userReducer.user.photoPATH ,this.props.authReducer.user.currentUser.displayName);
		this.props.closeModal();
	}

	handleChange() {
		if(this.prefile.files.length !== 0) {
			let Reader = new FileReader();
			Reader.onload = (e) => {
				this.preimg.src = e.target.result;
				this.prename.value = this.prefile.files[0].name; 
			};
			Reader.onerror = (err) => {
				console.log(err);
			};
			Reader.readAsDataURL(this.prefile.files[0]);
		}
	}

	render() {
		return (<div style={style} className="modal">
			<div className="modal-content">
				<img ref={img => this.preimg = img } className="responsive-img" />
				<form onSubmit={this.handleSubmit}>
					<div className="file-field input-field">
						<div className="btn">
							<span>File</span>
							<input type="file" ref={img => this.prefile = img} onChange={this.handleChange} />
						</div>
						<div className="file-path-wrapper">
							<input type="text" ref={txt => this.prename = txt} placeholder="Select your Local File." className="file-path validate" />
						</div>
					</div>
					<input type="submit" value="Update" />
				</form>
			</div>
		</div>);
	}
}

export default ModalAvatar;