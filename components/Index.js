import {render} from "react-dom";
import React from "react";
import {hashHistory, Route, Router, IndexRoute} from "react-router";
import {Provider} from "react-redux";
import App from "./App.jsx";
import Home from "./Home.jsx";
import SignIn from "./SignIn.jsx";
import Post from "./Post.jsx";
import SignUp from "./SignUp.jsx";
import store from "../redux/store";
import Profile from "./Profile.jsx";




render(
	
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="/login" component={SignIn}/>
				<Route path="/create" component={Post}/>
				<Route path="/signup" component={SignUp}/>
				<Route path="/user/:username" component={Profile}/>
			</Route>
		</Router>
	</Provider>, document.getElementById("app"));