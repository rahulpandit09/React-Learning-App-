import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">

        {/* Brand (plain text, no link) */}
        <span className="navbar-brand">
          {props.title}
        </span>

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
