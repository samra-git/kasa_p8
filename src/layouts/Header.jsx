import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul className="nav">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
