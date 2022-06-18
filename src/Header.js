import React from "react";
import "./Header.css"

import logo from "./assets/logo-header.png"
import hamburger from "./assets/hamburger.svg";

function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="Roadplay" className="logo"></img>
            <img src={hamburger} alt="Menu" className="menu"></img>
        </div>
    );
}

export default Header;