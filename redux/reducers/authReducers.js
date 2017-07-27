const initialstate = {
    user: {
        currentUser: null
    },
    isLoggedIn: false,
    isFetching: false,
    guest: true,
    fetched: false,
    error: null
};


export function authReducer(state = initialstate, action) {

    switch (action.type) {
        case "SIGN_IN_FULFILLED":
            console.log(action.payload);
            return {...state,
                isLoggedIn: true,
                guest: false,
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
                },
                guest: false
            };
        case "IS_GUEST":
            return {...state, guest: true, isLoggedIn: false, user: action.payload };
        case "IS_NOT_LOGGEDIN":
            return {...state,
                isLoggedIn: action.payload
            };
        case "SIGN_UP_FULLFILLED":
            return {...state, isLoggedIn: true, guest: false, user: { currentUser: action.payload } };
        case "SIGN_UP_REJECTED":
            return {...state, isLoggedIn: false, guest: true, error: action.payload };
        case "LOGOUT":
            return {...state,
                isLoggedIn: false,
                guest: true,
                user: { currentUser: null }
            };
        default:
            return state;

    }
}