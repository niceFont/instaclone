import React from "react";
import {Link} from "react-router";

const Landing = () => {
	return (
		<section id="landing-back" className=" valign-wrapper">
			<div className="container">
				<div className="row">
					<div className="col l12 section">
						<b><p className="flow-text white-text landing">Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
                             Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it?
                              No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
						</p></b>
					</div>
					<div className="row">
						<div className="col l12 center-align">
							<Link to="/signup" className="center-align btn-large deep-orange">Sign Up Here</Link>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

module.exports = Landing;