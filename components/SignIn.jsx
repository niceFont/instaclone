import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import {SIGN_IN} from "../redux/actions/authActions.js";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.SIGN_IN(this.txtEmail, this.txtPassword)
            .then(result => console.log(result))
            .catch(err => console.error(err))

    }

    render() {
        return (
            <div className="container">
            <div className="row">
                    <form onSubmit={this.handleSubmit} className="col l6 offset-l3 center-align">
                        <div className="input-field">
                        <input ref={email => this.txtEmail = email} type="email" id="email" placeholder="E-Mail" required/>
                        </div>
                        <div className="input-field">
                        <input ref={password => this.txtPassword = password} type="password" id="password" placeholder="Password" required/>
                        </div>
                        <input className="btn-large" type="submit" value="Sign In" />
                        </form>
                </div>

            </div>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({SIGN_IN}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)