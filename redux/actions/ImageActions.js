import { storage, database } from "../../firebase/firebaseConfig";
import { getImageUrl, getImagesRelated } from "../../firebase/helpers";


export function SHOW_NEWEST() {
	return (dispatch) => {
		dispatch({ type: "FETCHING", payload: null });
		getImageUrl()
			.then(res => {
				dispatch({ type: "FETCHED_URLS", payload: res.reverse() });
			})
			.catch(err => {
				dispatch({ type: "FETCHING_REJECTED", payload: err });
			});

	};
}


export function SHOW_RELATED_POSTS(username) {
	return (dispatch) => {
		dispatch({ type: "FETCHING", payload: null });
		getImageUrl()
			.then(res => {
				getImagesRelated(username, res)
					.then(posts => {
						dispatch({ type: "USER_POSTS_FOUND", payload: posts.reverse() });
					})
					.catch(err => {
						dispatch({ type: "USER_POSTS_NOT_FOUND", payload: err });
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