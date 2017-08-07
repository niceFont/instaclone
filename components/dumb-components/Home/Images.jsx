import React from "react";
import {ImageLoaderHOC} from "../../higher-order-components/ImageHOC.jsx";
import {Link} from "react-router";

const Image = (props) => {
	return (
		<li 
			onClick={() => props.openModal(props.index)} 
			key={props.index} 
			className = "col s8 m6 l4" 
		> 
			<div className="card large">
				<div className="card-image">
					<img className="responsive-img" src={props.photoURL}/>
				</div>
				<div className="card-content">
					<p><b>
						<Link 
							className="black-text" 
							to={"user/" + props.author.authorName}>
							{props.author.authorName + " "}
						</Link>
					</b>{props.description.length > 150 ? props.description.slice(0,150)+ "...more": props.description}</p>
				</div>
				<div className="card-action valign-wrapper">
					<button 
						onClick={() => props.handleUpvote(props.index)}
						className="btn-floating btn pink left-align" 
						disabled={!props.authReducer.isLoggedIn}>
						<i className="material-icons">grade</i>
					</button>
					<span className="col l6 right-align">{props.stars + " Stars"}</span>
				</div>
			</div> 
		</li>
		
	);};

module.exports = ImageLoaderHOC(Image);