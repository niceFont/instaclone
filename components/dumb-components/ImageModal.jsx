import React from "react";



let style = {
	display: "block",
	zIndex: 1000
};


export const ImageModal = (props) => {

	return (<div style={style} id="modal" className="modal">
		<div className="modal-content">
			<div className="row">
				<div className="col l12 center-align">
					<img id="modal-img" src={props.imageReducer.posts[props.data].photoURL} className="responsive-img" />
				</div>
			</div>
			<div className="row">
				<div className="col l10 offset-l1">
					<p><b>
						<a
							className="black-text" 
							href={"#/user/" + props.imageReducer.posts[props.data].author.authorName}
						>
							{props.imageReducer.posts[props.data].author.authorName + " "}
						</a>
					</b>
					{props.imageReducer.posts[props.data].description}
					</p>

				</div>
			</div>
			<div className="row valign-wrapper center-align">
				<span className="col l6 "><a className="btn-floating btn pink left-align"><i className="material-icons">grade</i></a></span>
				<span className="col l6 ">{props.imageReducer.posts[props.data].stars + " Stars"}</span>
			</div>
			<div className="row">
				<div className="col l10 offset-l1">
					<form>
						<div className="input-field">
							<textarea placeholder="Tell us what you think..." className="materialize-textarea"></textarea>
						</div>
						<input type="submit" value="Post" className="btn btn-small" />
					</form>
				</div>
			</div>
		</div>
	</div>);
};