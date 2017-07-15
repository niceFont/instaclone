import React from "react";
import {ImageLoaderHOC} from "../../higher-order-components/ImageHOC.jsx";

const Image = (props) => {
	console.log(props);
	return (
		<div key={props.index} className = "col s6 m6 l4" > 
			<div className="card hoverable">
				<div className="card-image">
					<img src={props.image}/>
				</div>
				<div className="card-content">
					<p><b>
						<a className="black-text" href={"/user/" + props.user}>{props.user + " "}</a>
					</b>{props.description}</p>
				</div>
				<div className="card-action">
					<span className="col s6"></span>
				</div>
			</div> 
		</div>
		
	);};

module.exports = ImageLoaderHOC(Image);