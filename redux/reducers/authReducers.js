const initialstate = {
	user: {
		currentUser: null
	},
	isLoggedIn: false,
	isFetching: false,
	fetched: false,
	error: null
};


export function authReducer(state = initialstate, action) {

	switch (action.type) {
	case "SIGN_IN_FULFILLED":
		console.log(action.payload);
		return {...state,
			isLoggedIn: true,
			user: {
				currentUser: action.payload
			}
		};
	case "SIGN_IN_REJECTED":
		return {...state,
			isLoggedIn: false,
			error: action.payload
		};
	case "IS_LOGGEDIN":
		return {...state,
			isLoggedIn: true,
			user: {
				currentUser: action.payload
			}
		};
	case "IS_NOT_LOGGEDIN":
		return {...state,
			isLoggedIn: action.payload
		};
	case "LOGOUT":
		return {...state,
			isLoggedIn: false,
			user: { currentUser: null }
		};
	default:
		return state;

	}
}