import React from "react";
import "./navbar.scss";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
    <ul className="nav-links">
      <li>
      <Link className="nav-link" to="/">Landing</Link>
      </li>
      <li>
      <Link className="nav-link" to="/About">About</Link>
      </li>
      <li>
      <Link className="nav-link" to="/TourList">Stories</Link>
      </li>
      </ul>
      </nav>
      <Outlet/>

   </>
  );
}
