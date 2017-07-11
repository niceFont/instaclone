export function authReducer(state = {}, action) {

	switch (action.type) {
	case "SIGN_IN_FULFILLED":
		console.log(action.payload);
		return {...state,
			isLoggedIn: true,
			user: {
				currentUser: action.payload.providerData[0]
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
				currentUser: action.payload.providerData[0]
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