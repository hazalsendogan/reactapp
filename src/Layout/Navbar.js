import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navbar extends Component {
  static defaultProps = {
    title: "Default App",
  };
  render() {
    const { title } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg d-flex justify-content-between">
        <a href="/" className="navbar-brand">{title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item mr-2 active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/add">
                Add User
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/github">
                Project Files
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
