import React from "react";
import {CommentsAreEmpty} from "../higher-order-components/CommentsHOC.jsx";

class Comments extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="col l8">
					{this.props.imageReducer.posts[this.props.data].comments.map(comment => {
						return (
							<div className="row">
								<div className="col l8">
									<p><b><a href={"#/user/" + comment.user }>{comment.user}</a></b>{": " + comment.comment}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default CommentsAreEmpty(Comments);