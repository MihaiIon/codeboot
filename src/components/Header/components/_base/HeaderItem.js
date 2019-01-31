import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "../../../../_helpers/classNamesHelper";

class HeaderItem extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { green } = this.props;
    return classNamesHelper("c-header_btn", [("-green", green)]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return (
      <li className="c-header_item o-layout_item">
        <button type="button" className="c-header_btn">
          {children}
        </button>
      </li>
    );
  }
}

HeaderItem.defaultProps = {
  green: false
};

HeaderItem.propTypes = {
  green: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default HeaderItem;
