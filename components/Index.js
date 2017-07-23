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
import {auth} from "../firebase/firebaseConfig";

function deleteAnon () {
	if (store.getState().authReducer.guest) {
		auth.currentUser.delete()
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
}

render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App} onLeave={deleteAnon}>
				<IndexRoute component={Home}/>
				<Route path="/login" component={SignIn} />
				<Route path="/create" component={Post}/>
				<Route path="/signup" component={SignUp}/>
				<Route path="/user(/:user)" component={Profile}/>
				<Route path="*" component={()=> <h1>404 Not Found</h1>}/>
			</Route>
		</Router>
	</Provider>, document.getElementById("app"));