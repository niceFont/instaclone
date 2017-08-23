import firebase from "firebase";
require("dotenv").config();

const config = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	databaseURL: process.env.DATABASEURL,
	projectId: process.env.PROJECTID,
	storageBucket: process.env.STORAGEBUCKET,
	messagingSenderId: process.env.MESSAGINGSENDERID
};

firebase.initializeApp(config);


export const database = firebase.database;
export const storage = firebase.storage;
export const auth = firebase.auth;