import { storage, database } from "../../firebase/firebaseConfig";

export function SHOW_NEWEST() {
	return (dispatch) => {
		dispatch({ type: "FETCHING_URLS", payload: null });
		database.ref("posts").orderByChild("timestamp").once("value")
			.then(data => {
				let posts = Object.keys(data.val()).map((item) => {
					return new Promise((resolve, reject) => {
						storage.ref(data.val()[item].image).getDownloadURL()
							.then(url => {
								resolve({...data.val()[item], image: url });
							})
							.catch(err => {
								reject(err);
								throw err;
							});
					});
				});
				Promise.all(posts)
					.then(res => {
						dispatch({ type: "FETCHED_URLS", payload: res.reverse() });
					})
					.catch(err => {
						dispatch({ type: "FETCHING_REJECTED", payload: err });
					});
			});
	};
}

export function UPLOAD(img, userId, user, description) {
	return (dispatch) => {
		try {
			let filePath = storage.ref().child(`images/${img.name}`);
			filePath.put(img);
			let newKey = database.ref().child("posts").push().key;
			database.ref(`posts/${newKey}`).set({
				image: `images/${img.name}`,
				description,
				author: {
					authorId: userId,
					author: user
				},
				hearts: 0,
				comments: [],
				timestamp: Date.now()
			});


			dispatch({ type: "UPLOAD_FULFILLED", payload: null });
		} catch (err) {
			dispatch({ type: "UPLOAD_REJECTED", payload: err });
		}

	};
}