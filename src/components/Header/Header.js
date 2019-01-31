import React, { Component } from "react";

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
  render() {
    return (
      <AnimatedComponent
        wrapper="header"
        className={classNamesHelper("c-header", "o-flex -center-v -space-between")}
      >
        <Navigation>
          <Logo />
          <div className="c-header_separator" />
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

export default Header;
