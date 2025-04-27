import React from "react";
import { Link, NavLink } from "react-router-dom";
import home from "./home1.jpg";
function Home() {
  return (
    <div className="homeimg">
      <div>
        <img src={home} alt="" />
      </div>
      <div className="home-content">
        <h1>Discover Your Next Read</h1>
        <p>Click Below to get Books</p>
        <p>
          <NavLink to="/books" className="btn">
            Books
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Home;
