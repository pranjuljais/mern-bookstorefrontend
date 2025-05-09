import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="react" />
      </Link>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
}

export default Header;
