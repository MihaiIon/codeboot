import React, { Component } from "react";
import PropTypes from "prop-types";

// Helpers
import classNamesHelper from "classnames-helper";

class HeaderItem extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { transparent, green } = this.props;
    return classNamesHelper("c-header_btn", ["-green", green], ["-transparent", transparent]);
  }

  // ------------------------------------------------------
  // Render

  render() {
    const { children } = this.props;
    return (
      <li className="c-header_item o-layout_item">
        <button type="button" className={this.getComponentClassNames()}>
          {children}
        </button>
      </li>
    );
  }
}

HeaderItem.defaultProps = {
  green: false,
  transparent: false
};

HeaderItem.propTypes = {
  green: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default HeaderItem;
