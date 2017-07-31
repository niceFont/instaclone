import React from "react";




export function CommentsAreEmpty(Component) {

	return class CommentsAreEmpty extends React.Component {

		render() {
			if(this.props.imageReducer.posts[this.props.data].comments) {
				return (
					<Component {...this.props} />
				);}
			else return null;
		}
	};
}

