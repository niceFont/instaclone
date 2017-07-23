import { storage, database } from "../../firebase/firebaseConfig";


export function EXISTS(username) {
	return (dispatch) => {
		dispatch({ type: "SEARCHING", payload: null });
		database.ref("users").once("value")
			.then(data => {
				console.log(data.val());
				let user = Object.keys(data.val()).filter((item) => {
					return data.val()[item].name === username;
				});
				if (user.length === 0) dispatch({ type: "USER_NOT_FOUND", payload: null });
				else return data.val()[user];
			})
			.then(user => {
				console.log(user.photoURL);
				storage.ref().child(user.photoURL).getDownloadURL()
					.then(url => {
						dispatch({ type: "USER_FOUND", payload: {...user, photoURL: url } });
					});


			});


	};
}


export function RESET() {
	return (dispatch) => {
		dispatch({ type: "RESET_SEARCH", payload: null });
	};
}