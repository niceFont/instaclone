import React from "react";
import Comments from "./Comments.jsx";
import {Modal} from "semantic-ui-react";

let style = {
	display: "block",
	zIndex: 1000
};


export class ImageModal extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleComment = this.handleComment.bind(this);
	}

	handleComment(e) {
		e.preventDefault();
		this.props.ADD_COMMENT(
			this.props.authReducer.user.currentUser.displayName,
			this.props.imageReducer.posts[this.props.data].postID,
			this.comment.value 
		);
		this.comment.value = "";
		
	}
	

	render () {
		return (
			<Modal 
				dimmer
				closeOnDimmerClick
				trigger={this.props.Open}
			>
				
				<img id="modal-img" src={this.props.imageReducer.posts[this.props.data].photoURL} className="responsive-img" />
				<p><b>
					<a
						className="black-text" 
						href={"#/user/" + this.props.imageReducer.posts[this.props.data].author.authorName}
					>
						{this.props.imageReducer.posts[this.props.data].author.authorName + " "}
					</a>
				</b>
				{this.props.imageReducer.posts[this.props.data].description}
				</p>

				<button 
					onClick={() => this.props.handleUpvote(this.props.data)}
					className="btn-floating btn pink" 
					disabled={!this.props.authReducer.isLoggedIn}>
					<i className="material-icons">favorite</i>
				</button>
				<span className="">
					{this.props.imageReducer.posts[this.props.data].stars}
				</span>
				<i className="pink-text material-icons">favorite</i>
				{!this.props.authReducer.guest ?  <div className="row">
					<div className="col l10 offset-l1">
						<form onSubmit={this.handleComment}>
							<div className="input-field">
								<textarea ref={(comment => this.comment = comment)} placeholder="Tell us what you think..." className="materialize-textarea"></textarea>
							</div>
							<input type="submit" value="Post" className="btn btn-small" />
						</form>
					</div>
				</div>
					:

					<div className="col l10 offset-l1 center-align">
						<span className="grey-text"><a href="#/login">Log-In</a> to leave a Comment...</span>
					</div>
				}
				<div className="row">	
					<Comments {...this.props} />
				</div>
			</Modal>
		);
	}
}