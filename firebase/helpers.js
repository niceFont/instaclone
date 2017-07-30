export function getPostsAsArrays(data) {

	let posts = [];
	Object.keys(data.val()).map((item) => {
		posts.push(data.val()[item]);
	});
	return posts;

}

export function memoize(func) {
	let cache = {};

	return async function() {
		let args = JSON.stringify(arguments);
		cache[args] = cache[args] || func.apply(this, arguments);
		return cache[args];
	};
}