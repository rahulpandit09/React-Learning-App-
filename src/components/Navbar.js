import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/textutels">
          {props.title}
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact to="/home" className="nav-link" aria-current="page" activeClassName="active">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link" activeClassName="active">
                {props.aboutText}
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
};
