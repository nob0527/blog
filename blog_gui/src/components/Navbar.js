import React from 'react';
import {Link} from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className={"navbar_container"}>
            <Link to={"/"}><h1>My Blog</h1></Link>
        </div>
    );
}

export default Navbar;