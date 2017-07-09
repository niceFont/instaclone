import {authReducer} from "./authReducers"
import {imageReducer} from "./ImageReducers" 
import {combineReducers} from "redux";

export default combineReducers(authReducer, imageReducer)