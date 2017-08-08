import firebase from "firebase";


const config = {
	apiKey: "AIzaSyCqEnIRA45bePC7lxBhVbAEIcTF2o4u2Yk",
	authDomain: "instaclone-14120.firebaseapp.com",
	databaseURL: "https://instaclone-14120.firebaseio.com",
	projectId: "instaclone-14120",
	storageBucket: "instaclone-14120.appspot.com",
	messagingSenderId: "167684553182"
};

firebase.initializeApp(config);


export const database = firebase.database;
export const storage = firebase.storage;
export const auth = firebase.auth;