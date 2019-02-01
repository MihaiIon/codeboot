import React, { Component } from "react";
import PropTypes from "prop-types";

class FooterNav extends Component {
  render() {
    const { children } = this.props;
    return (
      <nav className="c-footer_nav">
        <ul className="c-footer_list">{children}</ul>
      </nav>
    );
  }
}

FooterNav.propTypes = {
  children: PropTypes.node.isRequired
};

export default FooterNav;
