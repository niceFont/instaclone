import React from "react";

export function ImageLoaderHOC (Component) {
	return class ImageLoaderHOC extends React.Component {
		render() {
			if(this.props.imageReducer.isFetching) return (
				<div className="row section">
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
				</div>
			);
			if(this.props.imageReducer.error) {
				return 	(<div className="container">
					<div className="row">
						<div className="col l8 offset-l2 center-align">
							<span className="chip blue white-text"><b>{this.props.imageReducer.error}</b></span>
						</div>
					</div>
				</div>);
			}

			else  {
				let list = this.props.imageReducer.posts.map((post, index) =>{
					return <Component {...post} index={index} {...this.props}/>;
				});
                
				return (<ul className="row">
					{list}
				</ul>
				);
			}
	

				
		}
	};
}


