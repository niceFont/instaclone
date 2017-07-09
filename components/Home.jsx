import React from "react";
import {bindActionCreators} from "redux";
import {SHOW_NEWEST} from "../redux/actions/ImageActions.js";
import {connect} from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleModal = this.handleModal.bind(this)
    }

    handleModal(id) {
        console.log(id)
    }
    render() {
        this
            .props
            .show()
        
        return (
            <div className="container">
                <div className="row">
                    <div id="landing" className="col l10 offset-l1 section">
                        <h3>Newest</h3>
                    </div>
                    <div className="col l10 offset-l1 section">
                        <p className="flow-text">Observe the newest Images shared on this
                            Website. Also want to Submit your Images?
                        </p>
                    </div>
                    <div className="col l10 offset-l1 center-align">
                        <a href="/signup" className="center-align btn-large">Sign Up Here</a>
                    </div>

                </div>
                <div id="newest" className="row section">

                    {this.props.posts && this
                        .props
                        .posts
                        .sort()
                        .slice(0, 6)
                        .map((post, index )=> {
                            return (
                                <div key={index} className="col l4">
                                    <div  className="card">
                                        <div className="card-image">
                                            <img src={post.image}/>

                                        </div>
                                        <div className="card-content">
                                            <p>
                                                <b>
                                                    <a className="black-text" href={"/user/" + post.user}>{post.user + " "}</a>
                                                </b>{post.description}</p>

                                        </div>
                                    </div >
                                </div>
                            )
                        })}
                </div>

            </div>

        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        show: SHOW_NEWEST,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);