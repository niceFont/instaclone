import React from "react";
import {CommentsAreEmpty} from "../higher-order-components/CommentsHOC.jsx";

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.formatDate = this.formatDate.bind(this);
	}
	formatDate(unix) {
		let d = new Date(unix);
		return d.toLocaleDateString();
	}
	render() {
		let {displayName} =  this.props.authReducer.user.currentUser;
		let {authorName} = this.props.imageReducer.posts[this.props.data].author;

		return !this.props.authReducer.guest && displayName == authorName ?  (
			<div className="container">
				{this.props.imageReducer.posts[this.props.data].comments.reverse().map(comment => {
					return (
						<div className="row">
							<div className="col s12 m12 l12">
								<div className="card">
									<div className="card-content">
										<a 
											className="card-title" 
											href={"#/user/" + comment.user }
										>
											<b>{comment.user}</b>
										</a>
										<p>{comment.comment}</p>
									</div>
									<div className="card-action valign-wrapper">
										<a className="red-text"><i className="material-icons">block</i></a>
										<span className="grey-text">{this.formatDate(comment.created_at)}</span>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		)
			:
			(<div className="container">
				{this.props.imageReducer.posts[this.props.data].comments.reverse().map(comment => {
					return (
						<div className="row">
							<div className="col l8">
								<p><b><a href={"#/user/" + comment.user }>{comment.user}</a></b>{": " + comment.comment}</p>
								<span className="grey-text">{this.formatDate(comment.created_at)}</span>
							</div>
						</div>
					);
				})}
			</div>);
	}
}

export default CommentsAreEmpty(Comments);