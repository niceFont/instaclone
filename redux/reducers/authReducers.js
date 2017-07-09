

export function authReducer(state = {}, action) {

    switch(action.type) {

        case "SIGN_IN_FULFILLED":
            return Object.assign({}, state, {
                currentUser: action.payload
            })
        case "SIGN_IN_REJECTED":
            return Object.assign({}, state, {
                error: action.payload
            })
        
    }
}