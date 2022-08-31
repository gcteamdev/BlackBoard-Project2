import React from 'react';
import './App.css';
import { Link } from "react-router-dom";



const Nav = () => {
    return (
       <nav className="nav">
        <h3 className="text-center bg-white text-primary bb">Black Board</h3>
        <ul >
            <Link className="text-white" to="/development">Development</Link>
            <Link className="text-white" to="/design">Design</Link>
            <Link className="text-white" to="/marketing">Marketing</Link>
        </ul>
       </nav>
    );
};

export default Nav;