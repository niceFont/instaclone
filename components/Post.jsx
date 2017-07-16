import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if(!this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	componentWillReceiveProps(nextProps) {
		if(!nextProps.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	componentDidMount() {
		if(!this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.prefile.files.length !== 0) {
			this.props.UPLOAD(this.prefile.files[0],
				this.props.authReducer.user.currentUser.uid,
				this.props.authReducer.user.currentUser.displayName,
				this.desc.value);
		}
		
		
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
		return (
			<div className="container">
				<div className="row">
					<div className="col l2 offset-l5 center-align">
						<img ref={img => this.preimg = img } className="responsive-img" />
					</div>
					<form onSubmit={this.handleSubmit} className="col l8 offset-l2">
						<div className="file-field input-field">
							<div className="btn">
								<span>File</span>
								<input type="file" ref={img => this.prefile = img} onChange={this.handleChange} />
							</div>
							<div className="file-path-wrapper">
								<input type="text" ref={txt => this.prename = txt} placeholder="Select your Local File." className="file-path validate" />
							</div>
						</div>
						<div className="input-field">
							<textarea ref={txt => this.desc = txt} placeholder="Description" className="materialize-textarea"></textarea>
						</div>
						<input className="btn-large" type="submit" value="Post" />
					</form>
				</div>

			</div>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);