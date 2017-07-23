import React from "react";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			similar: null
		};
		this.checkSimilar = this.checkSimilar.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.SIGN_UP(this.username.value, this.email.value, this.password1.value, this.prefile.files[0]);
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

	checkSimilar() {
		
		if (this.password1.value === this.password2.value) {
			this.setState({
				similar: true
			});
		}
		else this.setState({similar: false});
	}
	componentWillMount() {
		if(this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	componentDidMount() {
		if(this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col l2 offset-l5 center-align">
						<img ref={img => this.preimg = img } className="responsive-img" />
					</div>
					<div className="col l8 offset-l2 center-align">
						<form onSubmit={this.handleSubmit.bind(this)}>
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
								<input ref={user => this.username = user} type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<input ref={email => this.email = email} type="email" placeholder="E-Mail" />
							</div>
							<div className="input-field">

								{this.state.similar ? 
									<div className="row">
										<span className="col l8 offset-l4 valign-wrapper center-align green-text"><i className="material-icons">check</i> Passwords match!</span>
									</div>
									
									:
									<div className="row">
										<span className="col l8 offset-l4 valign-wrapper center-align red-text">
											<i className="material-icons">close</i> Passwords do not match!
										</span>
										
									</div>
								}

								<input ref={pass => this.password1 = pass} onChange={() => this.checkSimilar} type="password" placeholder="Enter your Password" />
							</div>
							<div className="input-field">
								<input ref={pass => this.password2 = pass} onChange={this.checkSimilar} type="password" placeholder="Re-Enter your Password" />
							</div>
							<input disabled={!this.state.similar} type="submit" value="Sign Up" className="btn-large deep-orange" />
						</form>
					</div>

				</div>

			</div>
	
		);
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(SignUp);