import { SIGN_IN, LOGGED_IN, LOGOUT, SIGN_UP } from "../redux/actions/authActions.js";
import { SHOW_NEWEST, UPLOAD } from "../redux/actions/ImageActions.js";
import { bindActionCreators } from "redux";



export function mapStateToProps(state) {
	return { authReducer: state.authReducer, imageReducer: state.imageReducer };
}

export function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		SIGN_IN,
		SHOW_NEWEST,
		SIGN_UP,
		LOGGED_IN,
		LOGOUT,
		UPLOAD
	}, dispatch);
}