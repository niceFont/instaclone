import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { imageReducer } from "./reducers/ImageReducers";


const middleware = applyMiddleware(thunk, createLogger());


export default createStore(imageReducer, middleware);