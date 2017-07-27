import { storage, database } from "../../firebase/firebaseConfig";

export function UPDATE_AVATAR(newAvatar, oldAvatar, username) {
    return (dispatch) => {
        dispatch({ type: "UPDATING", payload: null })
        Promise.all([
                () => {
                    storage.ref().child(`images/${username}/avatar/${newAvatar.name}`).put(newAvatar);
                },
                () => {
                    database.ref("users").orderByChild("name").equalTo(username).once("value")
                        .then(user => {
                            database.ref(`users/${Object.keys(user.val())[0]}`).update({
                                photoURL: `images/${username}/avatar/${newAvatar.name}`,
                                photoPATH: `images/${username}/avatar/${newAvatar.name}`
                            });
                        });
                },
                () => {
                    storage.ref().child(oldAvatar).delete();
                }
            ])
            .then(values => {
                values.forEach(function(element) {
                    element();
                }, this);
                dispatch({ type: "AVATAR_UPDATE_FULLFILLED", payload: null })
            })
            .catch(err => {
                dispatch({ type: "AVATAR_UPDATE_REJECTED", payload: err });
            });
    };
}