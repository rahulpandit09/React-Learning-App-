import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">

        {/* 🔹 LEFT SIDE: Brand + Home */}
        <div className="d-flex align-items-center">

          {/* Brand text */}
          <span className="navbar-brand">
            {props.title}
          </span>

          {/* ✅ FIX: Home now navigates to /home */}
          <span
            className={`nav-link mb-0 ${
              props.mode === "light" ? "text-dark" : "text-light"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              // 🔹 CHANGE #1: navigate to /home on click
              window.location.href = "/home";
            }}
          >
            Home
          </span>

        </div>

        <div className="collapse navbar-collapse">

          {/* Right side items */}
          <div className="d-flex ms-auto align-items-center">

            {/* Search */}
            <form className="d-flex me-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            {/* Dark Mode Toggle */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkModeSwitch"
                onChange={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="darkModeSwitch"
              >
                Enable Dark Mode
              </label>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMode: PropTypes.func,
  mode: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextUtils",
};
