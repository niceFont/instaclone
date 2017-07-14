import React from "react";
import {connect} from "react-redux";
import Image from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";
import { SIGN_IN, LOGGED_IN, LOGOUT, SIGN_UP } from "../redux/actions/authActions.js";
import { SHOW_NEWEST, UPLOAD } from "../redux/actions/ImageActions.js";
import { bindActionCreators } from "redux";


class Home extends React.Component {
	componentWillMount() {
		this.props.SHOW_NEWEST();
		
	}
	
	render() {
		console.log("RENDER HERE");
		console.log(this.props);
		return (
		
			<div className="container">
				<Landing />
				<div id="newest" className="row section">
					{undefined !== this.props.imageReducer.posts[0] && this.props.imageReducer.posts.map((post, index) => {
						console.log(post.image);
						return (<Image image={post.image} user={post.author.author} description={post.description} index={index} />);
					})}
					

					
				</div>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return { imageReducer: state.imageReducer };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		SHOW_NEWEST,
		LOGGED_IN
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(Home);