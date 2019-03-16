import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { AnimatedComponent } from "../../components-anim";
import Logo from "./components/Logo";
import List from "./components/_base/HeaderList";
import Navigation from "./components/_base/HeaderNav";

// Super components
import DownloadFile from "./components/DownloadFile";
import NewFile from "./components/NewFile";
import Options from "./components/Options";
import Controls from "./components/Controls";

// Helpers
import classNamesHelper from "../../_helpers/classNamesHelper";

class Header extends Component {
  // ------------------------------------------------------
  // Method

  getComponentClassNames() {
    const { tmp } = this.props;
    return classNamesHelper("c-header", "o-wrapper", ["-tmp", tmp]);
  }

  // ------------------------------------------------------
  // Render
  render() {
    return (
      <AnimatedComponent wrapper="header" className={this.getComponentClassNames()}>
        <Navigation>
          <Logo />
          <div className="c-header_separator o-layout_item" />
          <List>
            <NewFile />
            {/* <DownloadFile /> */}
          </List>
        </Navigation>
        <Navigation linked>
          <List>
            <Controls step />
            <Controls playWithSteps />
            <Controls play />
            <Controls stop />
          </List>
        </Navigation>
      </AnimatedComponent>
    );
  }
}

Header.defaultProps = {
  tmp: false
};

Header.propTypes = {
  tmp: PropTypes.bool
};

export default Header;
