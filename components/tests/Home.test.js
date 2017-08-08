import "jsdom-global/register";
import React from "react";
import expect from "expect";
import {shallow, mount} from "enzyme";
import {Home} from "../Home.jsx";
import Modal from "../dumb-components/Modal.jsx";
import {ImageModal} from "../dumb-components/ImageModal.jsx";

const minprops = {
	SHOW_NEWEST: () => {},
	authReducer: {
		isLoggedIn: false,
		guest: true,
		user: {
			currentUser: {

			}
		}
	},
	imageReducer: {
		posts: [
			{
				author: {
					authorId: "wadawdawd",
					authorName: "Jim"
				},
				comments: [],
				description: "wdawd",
				photoPATH: "wdawdawd",
				photoURL: "dwawdawd",
				stars: 3,
				timestamp: 21241242
			}
		],
		isFetching: false
	}
};

describe("Component: Home", () => {

	it("should render without fail", () => {
		expect(shallow(
			<Home />
		).length).toEqual(1);
	});
    
	it("should render Images", () => {
		
		const wrapper = mount(<Home {...minprops} />);
		expect(wrapper.props().imageReducer.posts.length).toEqual(1);
	});
    
	it("should render 404 Component", () => {
		const props = {SHOW_NEWEST: () => {},imageReducer: {error: "404 not found"}};
		const wrapper = mount(<Home {...props} />);
		expect(wrapper.find("span.chip").text()).toEqual("404 not found");
	});
    
	it("should render Modal Component", () => {
		
		const wrapper = mount(<Home {...minprops} />);
		wrapper.setState({isOpen: true, data: 0});
		expect(wrapper.find(Modal).length).toEqual(1);
	});
    
	it("should render Modal with Image", () => {
		const wrapper = mount(<Home {...minprops} />);
		wrapper.setState({isOpen: true, data: 0});
		expect(wrapper.find(ImageModal).length).toEqual(1);
	});
}); 