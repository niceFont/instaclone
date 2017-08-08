import { storage, database } from "../../firebase/firebaseConfig";
import { memoize } from "../../firebase/helpers";

export function EXISTS(username) {
	return (dispatch) => {
		dispatch({ type: "SEARCHING", payload: null });
		database().ref("users").orderByChild("name").equalTo(username).once("value")
			.then(data => {
				dispatch({ type: "USER_FOUND", payload: data.val()[Object.keys(data.val())] });
			})
			.catch(err => {
				dispatch({ type: "USER_NOT_FOUND", payload: err });
			});

	};
}

export function RESET() {
	return (dispatch) => {
		dispatch({ type: "RESET_SEARCH", payload: null });
	};
}


export function UPDATE_AVATAR(newAvatar, oldAvatar, username) {
	let uploadImg = () => {
		return new Promise((resolve, reject) => {
			storage().ref().child(`images/${username}/avatar/${newAvatar.name}`).put(newAvatar)
				.then(res => resolve(res))
				.catch(err => reject(err));
		});
	};

	let getImgUrl = () => {
		return new Promise((resolve, reject) => {
			storage().ref().child(`images/${username}/avatar/${newAvatar.name}`).getDownloadURL()
				.then(url => resolve(url))
				.catch(err => reject(err));
		});
	};

	let updateProfile = (url) => {
		return new Promise((resolve, reject) => {
			database().ref("users").orderByChild("name").equalTo(username).once("value")
				.then(user => {
					database().ref(`users/${Object.keys(user.val())[0]}`).update({
						photoURL: url,
						photoPATH: `images/${username}/avatar/${newAvatar.name}`
					})
						.then(res => resolve(res))
						.catch(err => reject(err));
				})
				.catch(err => reject(err));
		});
	};

	let deleteOldAvatar = () => {
		return new Promise((resolve) => {
			console.log(storage().ref().child(oldAvatar));
			if (storage().ref().child(oldAvatar) !== null)

				storage().ref().child(oldAvatar).delete().then(res => resolve(res));
		});

	};
	return async(dispatch) => {
		dispatch({ type: "UPDATING", payload: null });
		try {
			let upload = memoize(async() => uploadImg());
			let getUrl = memoize(async() => getImgUrl(await upload()));
			let update = memoize(async() => updateProfile(await getUrl()));
			let deleteAvatar = memoize(async() => deleteOldAvatar());

			let [a, b] = await Promise.all([upload(), getUrl(), update(), deleteAvatar()]);
			dispatch({ type: "UPDATE_FULFILLED", payload: { photoURL: b, photoPATH: `images/${username}/avatar/${newAvatar.name}` } });

		} catch (err) {
			dispatch({ type: "UPDATE_FAILED", payload: err });
		}
	};
}


export function UPDATE_DESCRIPTION(username, description) {

	let updateDesc = () => {
		return new Promise((resolve, reject) => {
			database().ref("users").orderByChild("name").equalTo(username).once("value")
				.then(olduser => {
					database().ref(`users/${Object.keys(olduser.val())[0]}`).update({
						description: description
					});
					resolve(olduser);
				})
				.catch(err => reject(err));
		});
	};

	let getUpdatedUser = () => {
		return new Promise((resolve, reject) => {
			database().ref("users").orderByChild("name").equalTo(username).once("value")
				.then(user => resolve(user))
				.catch(err => reject(err));
		});
	};

	return async(dispatch) => {
		dispatch({ type: "UPDATING", payload: null });
		try {
			let update = memoize(async() => updateDesc());
			let newUser = memoize(async() => getUpdatedUser(await update()));

			let [a, b] = await Promise.all([update(), newUser()]);

			dispatch({ type: "UPDATE_FULFILLED", payload: { description: b.val()[Object.keys(b.val())[0]].description } });

		} catch (err) {
			dispatch({ type: "UPDATE_FAILED", payload: err });
		}
	};
}