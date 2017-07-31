import React from "react";
import Comments from "./Comments.jsx";


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
		return (<div style={style} id="modal" className="modal">
			<div className="modal-content">
				<div className="row">
					<div className="col l12 center-align">
						<img id="modal-img" src={this.props.imageReducer.posts[this.props.data].photoURL} className="responsive-img" />
					</div>
				</div>
				<div className="row">
					<div className="col l10 offset-l1">
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

					</div>
				</div>
				<div className="row valign-wrapper center-align">
					<span className="col l6 "><a className="btn-floating btn pink left-align"><i className="material-icons">grade</i></a></span>
					<span className="col l6 ">{this.props.imageReducer.posts[this.props.data].stars + " Stars"}</span>
				</div>
				<div className="row">
					<div className="col l10 offset-l1">
						<form onSubmit={this.handleComment}>
							<div className="input-field">
								<textarea ref={(comment => this.comment = comment)} placeholder="Tell us what you think..." className="materialize-textarea"></textarea>
							</div>
							<input type="submit" value="Post" className="btn btn-small" />
						</form>
					</div>
					<Comments {...this.props} />
				</div>
			</div>
		</div>);}
}