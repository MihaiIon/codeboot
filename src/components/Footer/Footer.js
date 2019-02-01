import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../../components-anim";
import Navigation from "./components/FooterNav";
import Item from "./components/FooterItem";

// Helpers
import classNamesHelper from "../../_helpers/classNamesHelper";

class Footer extends Component {
  // ------------------------------------------------------
  // Methods

  getComponentClassNames() {
    const { tmp } = this.props;
    return classNamesHelper("c-footer", "o-wrapper", ["-tmp", tmp]);
  }

  // ------------------------------------------------------
  // Render
  render() {
    return (
      <AnimatedComponent wrapper="footer" className={this.getComponentClassNames()}>
        <Navigation>
          <Item active>Split</Item>
          <Item>Console</Item>
          <Item>Code Editor</Item>
        </Navigation>
        <Navigation>
          <Item>Code Top</Item>
          <Item>Code Left</Item>
          <Item>Code Right</Item>
          <Item active>Code Bottom</Item>
        </Navigation>
      </AnimatedComponent>
    );
  }
}

Footer.defaultProps = {
  tmp: false
};

Footer.propTypes = {
  tmp: PropTypes.bool
};

export default Footer;
