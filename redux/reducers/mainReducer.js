import { authReducer } from "./authReducers";
import { imageReducer } from "./ImageReducers";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { updateReducer } from "./updateReducer";
export default combineReducers({ authReducer, imageReducer, userReducer, updateReducer });