import * as firebase from "firebase";

export function SIGN_IN({email,password}) {
return (dispatch) => {
    let promise = auth.signInWithEmailAndPassword(email, password)
    promise
        .then(user => dispatch({type:"SIGN_IN_FULLFILLED"}))
        .catch(e => dispatch({type: "SIGN_IN_REJECTED", payload: e}))
}
}