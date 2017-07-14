const initialstate = {
	posts: [],
	image: null,
	isFetching: false,
	fetched: false,
	error: null
};

export function imageReducer(state = initialstate, action) {
	switch (action.type) {
	case "FETCHING_URLS":
		return {...state, isFetching: true };
	case "FETCHED_URLS":
		return {...state, isFetching: false, fetched: true, posts: action.payload };
	case "FETCHING_REJECTED":
		return {...state, error: action.payload };
	case "UPLOAD_FULFILLED":
		return {...state, image: action.payload };
	case "UPLOAD_REJECTED":
		return {...state, err: action.payload };

	default:
		return state;
	}
}