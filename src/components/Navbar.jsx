import React from "react"

import {Link} from "react-router-dom"

import "./Navbar.css"

export const Navbar = () => {
    return (
        <div>
           <Link to = "/">Home</Link>
           <Link to = "/res">Results</Link>  
        </div>
    );
}