import React from "react";




export function doesUserExist(Component) {
	return class doesUserExist extends React.Component {
		componentWillMount() {
			this.props.EXISTS(this.props.params.user);
		}
		componentWillReceiveProps(nextProps) {
			if(nextProps.params !== this.props.params) {
				this.props.EXISTS(nextProps.params.user);
			}
		}
		componentWillUnmount() {
			this.props.RESET();
		}
		render() {
			if(this.props.userReducer.fetched && null === this.props.userReducer.error) {
				return (
					<Component {...this.props}/>
				);
			}
			if(this.props.userReducer.isFetching) {
				return (<div className="row section">
					<div className="col l12 center-align">
						<div className="preloader-wrapper big active">
							<div className="spinner-layer spinner-blue-only">
								<div className="circle-clipper left">
									<div className="circle"></div>
								</div><div className="gap-patch">
									<div className="circle"></div>
								</div><div className="circle-clipper right">
									<div className="circle"></div>
								</div>
							</div>
						</div>
					</div>
				</div>);
			}
			else {
				return (
					<div className="container">
						<div className="row">
							<div className="col l8 offset-l3">
								<h1>{this.props.userReducer.error}</h1>
							</div>
						</div>
					</div>
					
				);
			}
		}
	};
}



