const initialstate = {
	user: null,
	isFetching: false,
	fetched: false,
	error: null
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
	default:
		return state;
	}
}