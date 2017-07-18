import React from "react";
import {connect} from "react-redux";
import Image from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";
import Modal from "./dumb-components/Modal.jsx";


class Home extends React.Component {

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
		this.props.SHOW_NEWEST();
		
	}
	
	render() {
		return (
			<div>
				{this.state.isOpen && <Modal closeModal={this.closeModal} post={this.props.imageReducer.posts[this.state.data]}/>}
				<Landing />
				<div className="container">
					<div id="newest" className="row">
						<div className="col l12">
							<Image {...this.props} openModal={this.openModal}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(Home);