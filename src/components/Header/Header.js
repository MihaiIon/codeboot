import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Icons
import { AnimatedComponent } from "../../components-anim";
import Icon from "../../components-ui/Icon";

class Header extends Component {
  render() {
    return <AnimatedComponent wrapper="header" className="c-header o-wrapper " />;
  }
}

Header.propTypes = {};

export default Header;
