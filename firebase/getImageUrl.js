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

export let posts = [];
getImageUrl().then(res => posts.push(res));
console.log(posts);