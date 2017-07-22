const initialstate = {
	posts: [],
	image: null,
	isFetching: false,
	fetched: false,
	error: null
};

export function imageReducer(state = initialstate, action) {
	switch (action.type) {
	case "FETCHING":
		return {...state, isFetching: true };
	case "USER_POSTS_FOUND":
		return {...state, isFetching: false, fetched: true, posts: action.payload };
	case "USER_POSTS_NOT_FOUND":
		return {...state, isFetching: false, fetched: false, error: action.payload, posts: null };
	case "FETCHED_URLS":
		return {...state, isFetching: false, fetched: true, posts: action.payload };
	case "FETCHING_REJECTED":
		return {...state, error: action.payload };
	case "UPLOAD_FULFILLED":
		return {...state, image: action.payload };
	case "UPLOAD_REJECTED":
		return {...state, error: action.payload };
	case "FETCHING_404":
		return {...state, error: "404 No Post Found :(" };

	default:
		return state;
	}
}