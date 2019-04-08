import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import cn from "classnames-helper";

class HeaderNav extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { linked } = this.props;
    return cn("c-header_nav", "o-layout -flex -middle", ["-linked", linked]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return <nav className={this.getComponentClassNames()}>{children}</nav>;
  }
}

HeaderNav.defaultProps = {
  linked: false
};

HeaderNav.propTypes = {
  linked: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default HeaderNav;
