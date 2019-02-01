import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../../../_helpers/classNamesHelper";

class FooterItem extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { active } = this.props;
    return classNamesHelper("c-footer_btn", ["-active", active]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return (
      <li className="c-footer_item">
        <button type="button" className={this.getComponentClassNames()}>
          {children}
        </button>
      </li>
    );
  }
}

FooterItem.defaultProps = {
  active: false
};

FooterItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default FooterItem;
