import React from "react";
import {connect} from "react-redux";
import Image from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import PropTypes from "prop-types";
import Modal from "./dumb-components/Modal.jsx";

let style = {
	display: "block",
	zIndex: 1000
};
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