import { storage, database } from "../../firebase/firebaseConfig";
import { getImageUrl } from "../../firebase/helpers";


export function SHOW_NEWEST() {
    return (dispatch) => {
        dispatch({ type: "FETCHING", payload: null });
        database.ref("posts").limitToLast(9).once("value")
            .then(data => {
                if (null !== data.val()) {
                    getImageUrl(data)
                        .then(res => {
                            dispatch({ type: "FETCHED_URLS", payload: res.reverse() });
                        })
                        .catch(err => {
                            dispatch({ type: "FETCHING_REJECTED", payload: err });
                        });
                } else dispatch({ type: "FETCHING_404", payload: null });

            });
    };
}


export function SHOW_RELATED_POSTS(username) {
    return (dispatch) => {
        dispatch({ type: "FETCHING", payload: null });
        database.ref("posts").orderByChild("author/author").equalTo(username).once("value")
            .then(data => {
                getImageUrl(data)
                    .then(res => {
                        dispatch({ type: "USER_POSTS_FOUND", payload: res.reverse() });
                    })
                    .catch(err => {
                        dispatch({ type: "FETCHING_404", payload: null });
                    });

            })
            .catch(err => {
                dispatch({ type: "FETCHING_404", payload: null });
            });

    };
}


export function UPLOAD_IMAGE(img, userId, user, description) {
    return (dispatch) => {
        try {
            let filePath = storage.ref().child(`images/${user}/posts/${img.name}`);
            filePath.put(img);
            let newKey = database.ref().child("posts").push().key;
            database.ref(`posts/${newKey}`).set({
                image: `images/${user}/posts/${img.name}`,
                imagePATH: `images/${user}/posts/${img.name}`,
                description,
                author: {
                    authorId: userId,
                    author: user
                },
                stars: 0,
                comments: [],
                timestamp: Date.now()
            });


            dispatch({ type: "UPLOAD_FULFILLED", payload: null });
        } catch (err) {
            dispatch({ type: "UPLOAD_REJECTED", payload: err });
        }

    };
}