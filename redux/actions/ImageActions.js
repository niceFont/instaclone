import { storage, database } from "../../firebase/firebaseConfig";
import { getPostsAsArrays, memoize,checkIfDuplicate,removeDuplicate } from "../../firebase/helpers";


export function SHOW_NEWEST() {
	return (dispatch) => {
		dispatch({ type: "FETCHING", payload: null });
		database().ref("posts").limitToLast(9).once("value")
			.then(data => {
				if (null !== data.val()) {

					dispatch({ type: "FETCHED_URLS", payload: getPostsAsArrays(data).reverse() });
				} else dispatch({ type: "FETCHING_404", payload: null });

			});
	};
}


export function SHOW_RELATED_POSTS(username) {
	return (dispatch) => {
		dispatch({ type: "FETCHING", payload: null });
		database().ref("posts").orderByChild("author/authorName").equalTo(username).once("value")
			.then(data => {
				dispatch({ type: "USER_POSTS_FOUND", payload: getPostsAsArrays(data).reverse() });
			})
			.catch(err => {
				dispatch({ type: "FETCHING_404", payload: err });
			});

	};
}


export function UPLOAD_IMAGE(img, userId, user, description) {
	let uploadImg = () => {
		return new Promise((resolve, reject) => {
			storage().ref().child(`images/${user}/posts/${img.name}`).put(img)
				.then(() => resolve(null))
				.catch(err => reject(err));
		});
	};
	let generateKey = () => {
		return new Promise((resolve) => {
			let key = database().ref().child("posts").push().key;
			resolve(key);
		});

	};
	let getUrl = () => {
		return new Promise((resolve, reject) => {
			storage().ref().child(`images/${user}/posts/${img.name}`).getDownloadURL()
				.then(url => resolve(url))
				.catch(err => reject(err));
		});
	};
	let createPost = (newKey, url) => {
		return new Promise((resolve, reject) => {
			database().ref(`posts/${newKey}`).set({
				photoURL: url,
				photoPATH: `images/${user}/posts/${img.name}`,
				description,
				author: {
					authorId: userId,
					authorName: user
				},
				stars: 0,
				comments: [],
				timestamp: Date.now(),
				postID: newKey
			})
				.then(() => resolve(null))
				.catch(err => reject(err));

		});
	};
	return async(dispatch) => {
		dispatch({ type: "UPLOADING", payload: null });
		try {
			let upload = memoize(async() => uploadImg());
			let key = memoize(async() => generateKey());
			let url = memoize(async() => getUrl(await uploadImg()));
			let create = memoize(async() => createPost(await key(), await url()));

			await Promise.all([upload(), key(), url(), create()])
				.then(() => {
					dispatch({ type: "UPLOAD_FULFILLED", payload: JSON });
				});
		} catch (err) {
			dispatch({ type: "UPLOAD_REJECTED", payload: err });
		}

	};
}



export function ADD_COMMENT(username, postID, message) {
	let generateKey = () => {
		return new Promise((resolve) => {
			let key = database().ref().child("posts").push().key;
			resolve(key);
		});
	};
	let postComment = (key) => {
		return new Promise((resolve, reject) => {
			database().ref(`posts/${postID}/comments/${key}`).set({
				user: username,
				comment: message,
				created_at: Date.now()
			})
				.then(() => resolve(null))
				.catch(err => reject(err));
		});
	};

	let getUpdatedPosts = () => {
		return new Promise((resolve, reject) => {
			database().ref("posts").limitToFirst(9).once("value")
				.then(posts => resolve(posts))
				.catch(err => reject(err));
		});

	};
	return async(dispatch) => {
		dispatch({ type: "UPLOADING", payload: null });
		try {
			let key = memoize(async() => generateKey());
			let post = memoize(async() => postComment(await key()));
			let getUpdated = memoize(async() => getUpdatedPosts(await post()));
			let [a, b, c] = await Promise.all([key(), post(), getUpdated()]);

			dispatch({ type: "COMMENT_FULFILLED", payload: getPostsAsArrays(c) });
		} catch (err) {
			dispatch({ type: "COMMENT_REJECTED", payload: err });
		}

	};

}



export function UPVOTE(username, postID) {
	console.log(username, postID);
	let getStars = () => {
		return new Promise((resolve, reject) => {
			database().ref(`posts/${postID}`).once("value")
				.then(post => resolve(post.val().stars))
				.catch(err => reject(err));
		});
	};

	let getLikedPosts = () => {
		return new Promise((resolve, reject) => {
			database().ref("users").orderByChild("name").equalTo(username).once("value")
				.then(user => resolve(user.val()))
				.catch(err => reject(err));
		});
	};

	let updateUserAcc = (likedPosts) => {
		
		return new Promise((resolve, reject) => {
			let old = likedPosts[Object.keys(likedPosts)[0]].liked;
			let check = typeof old !== "undefined" ? checkIfDuplicate([...old, postID]) : false;
			if (!check){
				database().ref(`users/${Object.keys(likedPosts)}`).update({
					liked: typeof old !== "undefined" ? [...old, postID] : [postID]
				})
					.then(() => resolve(check))
					.catch(err => reject(err));
			}
			else {
				database().ref(`users/${Object.keys(likedPosts)}`).update({
					liked: typeof old !== "undefined" ? removeDuplicate([...old], postID) : [postID]
				})
					.then(() => resolve(check))
					.catch(err => reject(err));
			}
			
		});
	};

	let upvotePost = (oldStarcount, duped) => {
		
		return new Promise((resolve, reject) => {
			if (duped) {
				database().ref(`posts/${postID}`).update({
					stars: oldStarcount - 1
				})
					.then(() => resolve("DEC"))
					.catch(err => reject(err));
			}
			else {
				database().ref(`posts/${postID}`).update({
					stars: oldStarcount + 1
				})
					.then(() => resolve("INC"))
					.catch(err => reject(err));
			}
		});
	};

	let getNewPosts = () => {
		return new Promise((resolve,reject) => {
			database().ref("posts").once("value")
				.then(posts => resolve(posts))
				.catch(err => reject(err));
		});
	};

	return async (dispatch) => {
		dispatch({type: "UPLOADING", payload: null});
		try {
			let stars = memoize(async () => getStars());
			let old = memoize(async () => getLikedPosts());
			let update = memoize(async () => updateUserAcc(await old()));
			let upvote = memoize(async () => upvotePost(await stars(), await update()));
			let newPosts = memoize(async() => getNewPosts(await upvote()));

			let [a,b,c,d,e] = await Promise.all([stars(),old(), update() ,upvote(), newPosts()]);

			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);
			dispatch({type: "UPVOTE_FULFILLED", payload: getPostsAsArrays(e)});
			
		}
		catch(err) {
			dispatch({type: "UPLOAD_REJECTED", payload:err});
		}

	};
}