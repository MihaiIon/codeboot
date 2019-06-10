import React from "react";

// Components
import Item from "./_base/HeaderItem";

// Contexts
import { AppConsumer } from "../../Root";

function HeaderCreateFileButton() {
  return (
    <AppConsumer>
      {({ showCreateFileModal }) => (
        <Item transparent onClick={showCreateFileModal}>
          <img className="c-header_btn_img" src="./assets/file.svg" alt="Add new script" />
        </Item>
      )}
    </AppConsumer>
  );
}

export default HeaderCreateFileButton;
