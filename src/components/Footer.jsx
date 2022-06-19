import React from "react";

import "../styles/Footer.css"

import footerLogo from "../assets/footerLogo.png";

function Footer() {
  return (
    <div className="Footer">
      <img src={footerLogo} alt="Roadplay" />
    </div>
  );
}

export default Footer;