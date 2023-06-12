import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">Mustafa</h1>
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
