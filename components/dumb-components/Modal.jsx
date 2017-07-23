import React from "react";
import {Link } from "react-redux";

let style = {
	display: "block",
	zIndex: 1000
};


class Modal extends React.Component {

   
	render () {

		return(  
			<div>
				<div id="modal-back" onClick={this.props.closeModal}>
				</div>
				{this.props.children}
				
			</div>
		);
		
		
	}
}


export default Modal;