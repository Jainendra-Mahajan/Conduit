import React from 'react'
import '../styles.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    const handleClick = () => {
        localStorage.removeItem('token');
    }
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" style={{ color: "#5CB85C", fontWeight: "bold", textDecoration: "none" }} to="/home">Conduit</Link>
                    
                    <div id="navbarSupportedContent">

                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>


                            <li className="nav-item">
                            {localStorage.getItem('token') ? <Link className="nav-link" to="/newarticle">New Article</Link> : <Link className="nav-link" to="/signin">Sign In</Link> }
                            </li>

                            <li className="nav-item">
                            {localStorage.getItem('token') ? <Link className="nav-link" to="/signIn" onClick={handleClick}>Log Out</Link> : <Link className="nav-link" to="/signup">Sign Up</Link> }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
