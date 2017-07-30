const initialstate = {
	user: null,
	isFetching: false,
	fetched: false,
	error: null,
	update_success: false
};


export function userReducer(state = initialstate, action) {
	switch (action.type) {
	case "SEARCHING":
		return {...state, isFetching: true };
	case "USER_FOUND":
		return {...state, user: action.payload, isFetching: false, fetched: true };
	case "USER_NOT_FOUND":
		return {...state, error: "User could not be found!", fetched: false, isFetching: false };
	case "RESET_SEARCH":
		return initialstate;
	case "UPDATING":
		return {...state, updating: true };
	case "UPDATE_FULFILLED":
		return {...state, update_success: true, user: {...state.user, ...action.payload }, updating: false };
	case "UPDATE_FAILED":
		return {...state, update_failed: true, updating: false };
	default:
		return state;
	}
}