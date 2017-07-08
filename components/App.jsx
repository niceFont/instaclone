import React from "react";
import {Link} from "react-router";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div id="nav" className="nav-wrapper white">
                            <Link className="brand-logo black-text" to="/">
                                <b>InstaClone</b>
                            </Link>
                            <ul className="right">
                                <li>
                                    <Link className="black-text" to="/" id="signup">Home</Link>
                                </li>
                                <li>
                                    <Link className="black-text" to="/login" id="signup">Login</Link>
                                </li>
                                <li>
                                    <Link className="black-text" to="/signup" id="signup">Sign Up</Link>
                                </li>

                            </ul>

                        </div>

                    </nav>
                </div>

                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

module.exports = App;