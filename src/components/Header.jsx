import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css"

// Images
import headerLargeLogo from "../assets/headerLargeLogo.png";
import headerMiniLogo from "../assets/headerMiniLogo.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 780) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  let headerLogo = (
    <img src={headerLargeLogo} alt="Roadplay" className="headerLogo" />
  );

  if (isMobile) {
    headerLogo = (
      <img src={headerMiniLogo} alt="Roadplay" className="headerLogo" />
    );
  }

  return (
    <div className="Header">
      <Link to="/">{headerLogo}</Link>
    </div>
  );
}

export default Header;
