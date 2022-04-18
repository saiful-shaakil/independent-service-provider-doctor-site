import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../Stylesheet/PublicStyleSheet.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar each-section">
      <div className="start navlink">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </div>
      <div className="mid">
        <Link className="title text-gray-900" to="/">
          William Dorfman
        </Link>
      </div>
      <div className="end navlink">
        <Link to="/blogs">Blogs</Link>
        <Link to="about">About</Link>
        {user ? (
          <button onClick={handleSignOut} className="text-xl">
            Sign Out
          </button>
        ) : (
          <Link to="login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
