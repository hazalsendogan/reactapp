import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  static defaultProps = {
    title: "Default App",
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <h4>{title}</h4>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
