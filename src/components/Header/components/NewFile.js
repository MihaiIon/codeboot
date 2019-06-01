import React from "react";

// Components
import Item from "./_base/HeaderItem";
import FormCreateFile from "../../../forms/FormCreateFile";

// Contexts
import { AppContext } from "../../App";

function NewFile() {
  return (
    <AppContext.Consumer>
      {({ showModal, hideModal, setLayoutToSplit }) => (
        <Item
          transparent
          onClick={() =>
            showModal(
              "new script file",
              <FormCreateFile
                onSubmit={() => {
                  hideModal();
                  setLayoutToSplit();
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
