const initialstate = {
	posts: [],
	image: null,
	isFetching: false,
	fetched: false,
	error: false,
	isUploading: false,
	uploaded: false
};

export function imageReducer(state = initialstate, action) {
	switch (action.type) {
	case "FETCHING":
		return {...state, isFetching: true };
	case "UPLOADING":
		return {...state, isUploading: true };
	case "USER_POSTS_FOUND":
		return {...state, isFetching: false, fetched: true, posts: action.payload };
	case "USER_POSTS_NOT_FOUND":
		return {...state, isFetching: false, fetched: false, error: action.payload, posts: null };
	case "FETCHED_URLS":
		return {...state, isFetching: false, fetched: true, posts: action.payload };
	case "FETCHING_REJECTED":
		return {...state, error: action.payload };
	case "UPLOAD_FULFILLED":
		return {...state, image: action.payload, uploaded: true, isUploading: false };
	case "UPLOAD_REJECTED":
		return {...state, error: action.payload };
	case "COMMENT_FULFILLED":
		console.log(action.payload);
		return {...state, isUploading: false, uploaded: true, posts: action.payload };
	case "COMMENT_REJECTED":
		return {...state, isUploading: false, uploaded: false, error: action.payload };
	case "FETCHING_404":
		return {...state, isFetching: false, error: "404 Posts Could not be Found", uploaded: false, isUploading: false };
	default:
		return state;
	}
}