import {render} from "react-dom";
import React from "react";
import {hashHistory, Route, Router, IndexRoute} from "react-router"
import {Provider} from "react-redux";
import App from "./App.jsx";
import Home from "./Home.jsx";
import SignIn from './SignIn.jsx';
import store from "../redux/store";

render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={SignIn}/>
        </Route>
    </Router>
</Provider>, document.getElementById("app"))