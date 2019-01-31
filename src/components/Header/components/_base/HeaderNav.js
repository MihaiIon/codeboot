import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../../../../_helpers/classNamesHelper";

class HeaderNav extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { linked } = this.props;
    return classNamesHelper("c-header_nav", "o-flex", ["-linked", linked]);
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
