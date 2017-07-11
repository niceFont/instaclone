import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import mainReducer from "./reducers/mainReducer";
import { autoRehydrate, persistStore } from "redux-persist"

const middleware = applyMiddleware(thunk, createLogger());
let store = createStore(mainReducer, middleware);

export default store