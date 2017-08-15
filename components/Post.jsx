import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../redux/MapProps.js";
import {WaitForUpload} from "./higher-order-components/SignupHOC.jsx";
import { Container, Segment, Grid, Form, Button, TextArea, Image, Icon} from "semantic-ui-react";


class Post extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		if(!this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}
	componentWillReceiveProps(nextProps) {
		if(!nextProps.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	componentDidMount() {
		if(!this.props.authReducer.isLoggedIn) {
			this.props.router.push("/");
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.prefile.files.length !== 0) {
			this.props.UPLOAD_IMAGE(this.prefile.files[0],
				this.props.authReducer.user.currentUser.uid,
				this.props.authReducer.user.currentUser.displayName,
				this.desc.value);
		}
		
		
	}

	handleChange() {
		if(this.prefile.files.length !== 0) {
			let Reader = new FileReader();
			Reader.onload = (e) => {
				this.preimg.src = e.target.result;
				this.prename.value = this.prefile.files[0].name; 
			};
			Reader.onerror = (err) => {
				console.log(err);
			};
			Reader.readAsDataURL(this.prefile.files[0]);
		}
	}

	render() {
		return (
			<Segment basic padded="very">
				<Container textAlign="center">
					<Grid columns={2} textAlign="center">
						<Grid.Row textAlign="center">
							<Image as="img" src="" ref={img => this.preimg = img }  />
						</Grid.Row>
						<Grid.Row>
							<Segment padded="very">
								<Form onSubmit={this.handleSubmit}>
									<Form.Field required>
										<label for="file" class="ui icon button">
											<Icon>upload</Icon>
											Open File</label>
										<input  type="file" ref={img => this.prefile = img} onChange={this.handleChange} />
									</Form.Field>
									<Form.Field required>
										<label>Enter your Description</label>
										<TextArea ref={txt => this.desc = txt} placeholder="Description" className="materialize-textarea"></TextArea>
									</Form.Field>	
									<Button fluid type="submit">Submit</Button>
								</Form>
							</Segment>
						</Grid.Row>
					</Grid>
				</Container>
			</Segment>
			
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(WaitForUpload(Post));