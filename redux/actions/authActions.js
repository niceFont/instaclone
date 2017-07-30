import { auth, database, storage } from "../../firebase/firebaseConfig";
import { memoize } from "../../firebase/helpers";

export function SIGN_IN(email, password) {
	return (dispatch) => {
		auth.signInWithEmailAndPassword(email, password)
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
		auth.signOut();
	};
}

export function SIGN_UP(username, email, password, img) {

	let createUser = () => {
		return new Promise((resolve, reject) => {
			auth.createUserWithEmailAndPassword(email, password)
				.then(user => {
					user.updateProfile({
						displayName: username,
					});
					resolve(user);
				})
				.catch(err => {
					reject(err);
				});
		});
	};

	let uploadImg = () => {
		return new Promise((resolve, reject) => {
			storage.ref().child(`images/${username}/avatar/${img.name}`).put(img)
				.then(res => resolve(res))
				.catch(err => reject(err));
		});
	};

	let getUrlFromPath = () => {
		return new Promise((resolve, reject) => {
			storage.ref().child(`images/${username}/avatar/${img.name}`).getDownloadURL()
				.then(url => resolve(url))
				.catch(err => reject(err));
		});
	};

	let signUpUser = (user, url) => {
		return new Promise((resolve, reject) => {
			database.ref(`users/${user.uid}`).set({
				name: username,
				email: user.email,
				emailVerified: user.emailVerified,
				photoURL: url,
				photoPATH: `images/${username}/avatar/${img.name}`
			})
				.then(res => resolve(res))
				.catch(err => reject(err));
		});
	};

	return async(dispatch) => {
		let create = memoize(async() => createUser());
		let upload = memoize(async() => uploadImg(await create()));
		let getUrl = memoize(async() => getUrlFromPath(await upload()));
		let signUp = memoize(async() => {
			signUpUser(await create(), await getUrl());
		});


		await Promise.all([upload(), getUrl(), signUp(), create(), ])
			.then(() =>
				dispatch({ type: "SIGN_UP_FULFILLED", payload: auth.currentUser })
			)
			.catch(err => {
				dispatch({ type: "SIGN_UP_REJECTED", payload: err });
			});
	};
}