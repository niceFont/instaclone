import { authReducer } from "./authReducers";
import { imageReducer } from "./ImageReducers";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export default combineReducers({ authReducer, imageReducer, userReducer });