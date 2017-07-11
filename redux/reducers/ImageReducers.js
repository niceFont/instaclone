export function imageReducer(state = {}, action) {
	switch (action.type) {
	case "UPLOAD_FULFILLED":
		return {...state, image: action.payload };
	case "UPLOAD_REJECTED":
		return {...state, err: action.payload };
	default:
		return state;
	}
}