import React, { useContext } from "react";
import "./style.css";
import AuthContext from "../../Contexts/Auth/AuthContext";
import { Link  } from "react-router-dom";

export default function Navbar() {
  const context = useContext(AuthContext);
  return (
    <div className="navbar">
      <span>Contact Keeper</span>
      <ul className="navUl">
        {context.isAuthenticated ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a onClick={() => context.logout()}>Logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
