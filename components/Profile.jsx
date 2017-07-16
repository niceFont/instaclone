import React from "react";
import {doesUserExist} from "../components/higher-order-components/ProfileHOC.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";
import Images from "./dumb-components/Home/Images.jsx";

class Profile extends React.Component {
	componentWillMount() {
		this.props.SHOW_RELATED_POSTS(this.props.params.user);
	}
	render() {
		return this.props.authReducer.isLoggedIn ?  (
			<div className="container">
				<div className="row">
					<div className="col l8 offset-l2 center-align">
						<h3>{"Welcome to your Profile "+ this.props.authReducer.user.currentUser.displayName }</h3>
					</div>
				</div>
			</div>	
		)
			:
			(<div className="container">
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
						</div>
					</div>
						
				</div>
				<div className="row">
					<div className="col l12">
						<Images {...this.props}/>
					</div>
				</div>
			</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(doesUserExist(Profile)) ;