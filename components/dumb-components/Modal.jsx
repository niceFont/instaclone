import React from "react";
import {Link } from "react-redux";

let style = {
	display: "block",
	zIndex: 1000
};


class Modal extends React.Component {

   
	render () {
		console.log(this.props.post.author);

		return(  
			<div>
				<div id="modal-back" onClick={this.props.closeModal}>
				</div>
				<div style={style} id="modal" className="modal">
					<div className="modal-content">
						<div className="row">
							<div className="col l12 center-align">
								<img id="modal-img" src={this.props.post.image} className="responsive-img" />
							</div>
              
						</div>
						<div className="row">
							<div className="col l10 offset-l1">
								<p><b>
									<a
										className="black-text" 
										href={"#/user/" + this.props.post.author.author}
									>
										{this.props.post.author.author + " "}
									</a>
								</b>
								{this.props.post.description}
								</p>

							</div>
						</div>
						<div className="row valign-wrapper">
							<span className="col l6 "><a className="btn-floating btn pink left-align"><i className="material-icons">grade</i></a></span>
							<span className="col l6 right-align">{this.props.post.hearts + " Stars"}</span>
						</div>
					</div>
				</div>
				
			</div>
		);
		
		
	}
}


export default Modal;