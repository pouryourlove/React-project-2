import React from "react";
import Logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="nav-logo" />
    </nav>
  );
}
