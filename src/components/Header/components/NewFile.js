import React from "react";

// Components
import Item from "./_base/HeaderItem";
import { FormCreateFile } from "../../../forms";

// Contexts
import { AppContext } from "../../App";

function NewFile() {
  return (
    <AppContext.Consumer>
      {({ openModalAndSetContent }) => (
        <Item
          transparent
          onClick={() => openModalAndSetContent(<FormCreateFile onSubmit={() => null} />)}
        >
          <img className="c-header_btn_img" src="./assets/file.svg" alt="Add new script" />
        </Item>
      )}
    </AppContext.Consumer>
  );
}

export default NewFile;
