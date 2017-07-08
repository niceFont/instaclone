import {render} from "react-dom";
import React from "react";
import {browserHistory, Route, Router, IndexRoute} from "react-router"
import {Provider} from "react-redux";
import App from "./App.jsx";
import Home from "./Home.jsx";
import store from "../redux/store";

render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
</Provider>, document.getElementById("app"))