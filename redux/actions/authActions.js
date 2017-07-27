import { auth, database, storage } from "../../firebase/firebaseConfig";

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

            if (user !== null && user.isAnonymous === false) dispatch({ type: "IS_LOGGEDIN", payload: user });
            else {
                auth.signInAnonymously()
                    .then(res => dispatch({ type: "IS_GUEST", payload: res }));

            }
        });
    };
}

export function LOGOUT() {
    return (dispatch) => {

        auth.signInAnonymously();
        dispatch({ type: "IS_GUEST", payload: false });

    };
}

export function SIGN_UP(username, email, password, img) {
    return (dispatch) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                user.updateProfile({
                    displayName: username,
                });
                return user;
            })
            .then(user => {
                storage.ref().child(`images/${username}/avatar/${img.name}`).put(img);
                return user;
            })
            .then(user => {
                database.ref(`users/${user.uid}`).set({
                        name: username,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        photoURL: `images/${username}/avatar/${img.name}`,
                        photoPATH: `images/${username}/avatar/${img.name}`
                    })
                    .then(() =>
                        dispatch({ type: "SIGN_UP_FULLFILLED", payload: auth.currentUser })
                    );
            })
            .catch(err => {
                dispatch({ type: "SIGN_UP_REJECTED", payload: err });
            });
    };
}