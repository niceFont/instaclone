import React from "react";

const Image = (props) => {
	return ( <div key={props.index} className = "col l4" > 
		<div className="card">
			<div className="card-image">
				<img src={props.image}/>

			</div>
			<div className="card-content">
				<p><b>
					<a className="black-text" href={"/user/" + props.user}>{props.user + " "}</a>
				</b>{props.description}</p>
			</div>
		</div> 
	</div>
	);

};

module.exports = Image;