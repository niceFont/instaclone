import React from "react";
import {connect} from "react-redux";
import Images from "./dumb-components/Home/Images.jsx";
import Landing from "./dumb-components/Home/Landing.jsx";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import { Container, Segment} from "semantic-ui-react";
//import Modal from "./dumb-components/Modal.jsx";
import {ImageModal} from "./dumb-components/ImageModal.jsx";



export class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			data: null
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleUpvote = this.handleUpvote.bind(this);
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

	handleUpvote(id) {
		this.props.UPVOTE(
			this.props.authReducer.user.currentUser.displayName, 
			this.props.imageReducer.posts[id].postID
		);
	}

	componentDidMount() {
		this.props.SHOW_NEWEST();
	}

	
	render() {
		return (
			<div>
				{
					this.state.isOpen && 
				<Modal>
					<ImageModal handleUpvote={this.handleUpvote} {...this.props} data={this.state.data} />
				</Modal>
				}
				<Landing />
				<Segment padded="very" basic>
					<Container>
						<Images {...this.props} openModal={this.openModal}/>
					</Container>
				</Segment>
			</div>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);