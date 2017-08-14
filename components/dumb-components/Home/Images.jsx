import React from "react";
import {ImageLoaderHOC} from "../../higher-order-components/ImageHOC.jsx";
import {Link} from "react-router";
import {Card, Image, Icon} from "semantic-ui-react";

const Images = (props) => {
	return (
		<Card
			onClick={() => props.openModal(props.index)} 
			key={props.index} 
		> 
			<Image src={props.photoURL}/>
			<Card.Content>
				
				<Card.Header>
					<Link 
						className="black-text" 
						to={`user/${props.author.authorName}`}>
						{props.author.authorName + " "}
					</Link>
				</Card.Header>
				<Card.Description>
					<p>{props.description.length > 150 ? props.description.slice(0,150)+ "...more": props.description}</p>
				</Card.Description>
			</Card.Content> 
			<Card.Content extra>
				<span>
					{props.stars}<Icon name="heartbeat"/>
				</span>
				<span><i>{`${props.comments.length} Comments`}</i></span>
				
			</Card.Content>
		</Card>
		
	);};

module.exports = ImageLoaderHOC(Images);