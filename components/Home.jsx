import React from "react";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {connect} from "react-redux";
import Image from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";

class Home extends React.Component {

	shouldComponentUpdate(nextProps) {
		if(this.props !== nextProps) return true;
		else return false;
	}
	render() {
		return (
			<div className="container">
				<Landing />
				<div id="newest" className="row section">
					{this.props.posts && this
						.props
						.posts
						.sort()
						.slice(0, 6)
						.map((post, index )=> {
							return (
								<Image index={index} image={post.image} user={post.user} description={post.description} />
							);
						})}
				</div>
			</div>

		);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);