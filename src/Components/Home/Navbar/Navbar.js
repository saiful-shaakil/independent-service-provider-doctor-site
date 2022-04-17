import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../Stylesheet/PublicStyleSheet.css";

const Navbar = () => {
  return (
    <div className="navbar each-section">
      <div className="start navlink">
        <Link to="/">Home</Link>
        <Link to="/service">Services</Link>
      </div>
      <div className="mid">
        <Link className="title" to="/">
          Mark Manson
        </Link>
      </div>
      <div className="end navlink">
        <Link to="/blogs">Blogs</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
