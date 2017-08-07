export function getPostsAsArrays(data) {

	let posts = [];
	Object.keys(data.val()).forEach((item) => {
		if (data.val()[item].comments) {
			posts.push({...data.val()[item], comments: Object.keys(data.val()[item].comments).map(x => data.val()[item].comments[x]) });
		} else posts.push({...data.val()[item] });
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

export function checkIfDuplicate(arr) {
	let newArr = [];
	arr.filter(item => {
		if(newArr && newArr.indexOf(item) === -1) newArr.push(item);
		else {
			newArr = false;
		}
	});
	return newArr ? false : true ;
}