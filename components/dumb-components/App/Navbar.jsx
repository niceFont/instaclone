import React from 'react';
import {Link} from "react-router";

const Navbar = (...props) => {
    return (
        <div className="navbar-fixed">
                    <nav>
                        <div id="nav" className="nav-wrapper white">
                            <Link className="brand-logo black-text" to="/">
                                <b>Clone</b>
                            </Link>
                            <ul className="right">
                                <li>
                                    <Link className="black-text" to="/" id="signup">Home</Link>
                                </li>

                                {!props.isLoggedIn && <li><Link className="black-text" to="/login" id="signup">Login</Link></li>}
                                {props.isLoggedIn && <li>
                                    <Link
                                        className="black-text"
                                        to={"/profile/" + props.user.currentUser}
                                        id="signup">{props.user.currentUser}</Link>
                                </li>}
}
                                {props.isLoggedIn && <li>
                                    <Link className="black-text" href="#" onClick={props.LOGOUT}>Logout</Link>
                                </li>}

                                <li>
                                    <Link className="black-text" to="/signup" id="signup">Sign Up</Link>
                                </li>

                            </ul>

                        </div>

                    </nav>
                </div>
    )
}

export default Navbar;