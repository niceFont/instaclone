import { SIGN_IN, LOGGED_IN, LOGOUT, SIGN_UP } from "../redux/actions/authActions.js";
import { SHOW_NEWEST, UPLOAD_IMAGE, SHOW_RELATED_POSTS, ADD_COMMENT, UPVOTE } from "../redux/actions/ImageActions.js";
import { EXISTS, RESET, UPDATE_AVATAR, UPDATE_DESCRIPTION } from "../redux/actions/userActions.js";
import { bindActionCreators } from "redux";



export function mapStateToProps(state) {
	return { authReducer: state.authReducer, imageReducer: state.imageReducer, userReducer: state.userReducer, updateReducer: state.updateReducer };
}

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		SIGN_IN,
		SHOW_NEWEST,
		SIGN_UP,
		UPDATE_DESCRIPTION,
		UPDATE_AVATAR,
		UPVOTE,
		SHOW_RELATED_POSTS,
		RESET,
		EXISTS,
		ADD_COMMENT,
		LOGGED_IN,
		LOGOUT,
		UPLOAD_IMAGE
	}, dispatch);
}