import React from "react";
import './CSS/NavBar.css'
import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/useEffect">UseEffect</Link></li>
                    <li><Link to="/useref">UseRef</Link></li>
                    <li><Link to="/usecontext">UseContext</Link></li>
                    <li><Link to="/useMemo">UseMemo</Link></li>
                    <li><Link to="/signUp">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};
export default NavBar;