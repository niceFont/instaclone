import React from "react";
import {Link} from "react-router";
import {Segment, Container, Grid , Image, Button} from "semantic-ui-react";

const Landing = () => {
	return (
		<Segment
			basic 
			inverted
			size="massive"
			padded="very"
		>
			<Container text={true}>
				<Grid columns={1}>
					<Grid.Row>
						<Grid.Column>
							<b><p style={{fontSize: "1.3rem"}}>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
					Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it?
					No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
							</p></b>
						</Grid.Column>
			
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign="center">
							<Button size="huge" inverted color="orange" >Sign Up Here</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	);
};

module.exports = Landing;