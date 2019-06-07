import React from "react";

// Components
import Item from "./_base/HeaderItem";

// Contexts
import { AppContext } from "../../App";

function HeaderCreateFileButton() {
  return (
    <AppContext.Consumer>
      {({ showCreateFileModal }) => (
        <Item transparent onClick={showCreateFileModal}>
          <img className="c-header_btn_img" src="./assets/file.svg" alt="Add new script" />
        </Item>
      )}
    </AppContext.Consumer>
  );
}

export default HeaderCreateFileButton;
