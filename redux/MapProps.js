import { SIGN_IN, LOGGED_IN, LOGOUT, SIGN_UP } from "../redux/actions/authActions.js";
import { SHOW_NEWEST, UPLOAD_IMAGE, SHOW_RELATED_POSTS } from "../redux/actions/ImageActions.js";
import { EXISTS, RESET } from "../redux/actions/userActions.js";
import { bindActionCreators } from "redux";



export function mapStateToProps(state) {
	return { authReducer: state.authReducer, imageReducer: state.imageReducer, userReducer: state.userReducer };
}

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		SIGN_IN,
		SHOW_NEWEST,
		SIGN_UP,
		SHOW_RELATED_POSTS,
		RESET,
		EXISTS,
		LOGGED_IN,
		LOGOUT,
		UPLOAD_IMAGE
	}, dispatch);
}