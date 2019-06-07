import React from "react";

// Helpers
import cn from "classnames-helper";

// Components
import Logo from "./components/Logo";
import List from "./components/_base/HeaderList";
import Navigation from "./components/_base/HeaderNav";
import CreateFileButton from "./components/HeaderCreateFileButton";
import Controls from "./components/Controls";

function Header() {
  return (
    <div className={cn("c-header o-wrapper", "o-layout -flex")}>
      <Navigation>
        <Logo />
        <div className="c-header_separator o-layout_item" />
        <List>
          <CreateFileButton />
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
    </div>
  );
}

export default Header;
