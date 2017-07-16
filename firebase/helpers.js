import { storage } from "./firebaseConfig";
import { database } from "./firebaseConfig";

export function getImageUrl() {
	return database.ref("posts").once("value")
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
			return Promise.all(posts);

		});
}

export function getImagesRelated(username, data) {
	return new Promise((resolve, reject) => {
		let userPosts = data.filter(item => {
			return item.author.author === username;
		});
		if (userPosts.length > 0) resolve(userPosts);
		else reject("This User has not Committed any Posts");
	});
}