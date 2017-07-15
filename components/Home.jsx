import React from "react";
import {connect} from "react-redux";
import Image from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";



class Home extends React.Component {
	componentWillMount() {
		this.props.SHOW_NEWEST();
		
	}
	
	render() {
		return (
			<div className="container">
				<Landing />
				<div id="newest" className="row">
					<Image {...this.props} />
				</div>
			</div>

		);
	}
}

Home.PropTypes = {
	posts: PropTypes.arrayOf(React.PropTypes.object).isRequired,
	guest: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(Home);