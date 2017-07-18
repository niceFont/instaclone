import React from "react";
import {ImageLoaderHOC} from "../../higher-order-components/ImageHOC.jsx";
import {Link} from "react-router";

const Image = (props) => {
	return (
		<li onClick={() => props.openModal(props.index)} key={props.index} className = "col s12 m6 l4" > 
			<div className="card large">
				<div className="card-image">
					<img src={props.image}/>
				</div>
				<div className="card-content">
					<p><b>
						<Link className="black-text" to={"user/" + props.author.author}>{props.author.author + " "}</Link>
					</b>{props.description.length > 150 ? props.description.slice(0,150)+ "...more": props.description}</p>
				</div>
				<div className="card-action valign-wrapper">
					<a className="btn-floating btn pink left-align"><i className="material-icons">grade</i></a>
					<span className="col l6 right-align">{props.hearts + " Stars"}</span>
				</div>
			</div> 
		</li>
		
	);};

module.exports = ImageLoaderHOC(Image);