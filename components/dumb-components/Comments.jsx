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
		
		return (
			<div className="container">
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
			</div>
		);
	}
}

export default CommentsAreEmpty(Comments);