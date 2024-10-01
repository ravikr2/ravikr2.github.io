import React from "react";
import "../css/Navbar.css";
import logo from "../assets/images/ravilogopng.png";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-right">
        <div className="links">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="connect">Let's Connect</div>
      </div>
    </header>
  );
};
