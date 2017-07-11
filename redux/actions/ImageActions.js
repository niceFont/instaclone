import { storage, database } from "../../firebase/firebaseConfig";

export function SHOW_NEWEST() {
    return (dispatch) => {
        dispatch({
            type: "SHOW_NEWEST",
            payload: null
        });
    };
}

export function UPLOAD(img, userId, description) {
    return (dispatch) => {
        let filePath = storage.ref().child(`images/${img.name}`);
        filePath.put(img);
        database.ref(`posts/${userId}`).set({
            image: `images/${img.name}`,
            description,
            timestamp: Date.now()
        });

    };
}