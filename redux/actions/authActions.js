import { auth, database } from "../../firebase/firebaseConfig";

export function SIGN_IN(email, password) {
    return (dispatch) => {
        let promise = auth.signInWithEmailAndPassword(email, password);
        promise
            .then(user => dispatch({ type: "SIGN_IN_FULFILLED", payload: user }))
            .catch(e => dispatch({ type: "SIGN_IN_REJECTED", payload: e }));
    };
}
export function LOGGED_IN() {
    return (dispatch) => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) dispatch({ type: "IS_LOGGEDIN", payload: user });
            else dispatch({ type: "IS_NOT_LOGGEDIN", payload: false });
        });
    };
}

export function LOGOUT() {
    return (dispatch) => {
        auth.signOut().then(() => dispatch({ type: "LOGOUT", payload: false }));
    };
}

export function SIGN_UP(username, email, password) {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                user.updateProfile({
                    displayName: username,
                });
                return user;
            })
            .then(user => {
                console.log(user);
                database.ref(`users/${user.uid}`).set({
                    provider: user.providerData,
                    name: username
                });
            })
            .catch(err => console.error(err));
    };
}