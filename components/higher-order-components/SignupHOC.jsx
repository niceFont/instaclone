import React from "react";

export function WaitForUpload(Component) {
	return class WaitForUpload extends React.Component {

		render() {

			if(this.props.imageReducer.isUploading) {
				return (
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
			}
			else {
				return <Component {...this.props} />;
			}
		}
	};
}