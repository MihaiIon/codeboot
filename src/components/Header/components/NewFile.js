import React from "react";

// Components
import Item from "./_base/HeaderItem";
import { FormCreateFile } from "../../../forms";

// Contexts
import { AppContext } from "../../App";

// Constants
import { APP_SPLITTER_LAYOUT } from "../../App/core/constants";

function NewFile() {
  return (
    <AppContext.Consumer>
      {({ openModalAndSetContent, closeModal, setLayout }) => (
        <Item
          transparent
          onClick={() =>
            openModalAndSetContent(
              "new script file",
              <FormCreateFile
                onSubmit={() => {
                  closeModal();
                  setLayout(APP_SPLITTER_LAYOUT.BOTH);
                }}
              />
            )
          }
        >
          <img className="c-header_btn_img" src="./assets/file.svg" alt="Add new script" />
        </Item>
      )}
    </AppContext.Consumer>
  );
}

export default NewFile;
