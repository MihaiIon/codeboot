import React from "react";

// Component
import AddIcon from "react-ionicons/lib/MdAdd";

// Contexts
import { AppContext } from "../../App";

function CreateFileButton() {
  return (
    <AppContext.Consumer>
      {({ showCreateFileModal }) => (
        <button
          className="c-code-editor_create-file-btn"
          type="button"
          onClick={showCreateFileModal}
        >
          <AddIcon className="c-code-editor_create-file-btn_icon" color="currentColor" />
        </button>
      )}
    </AppContext.Consumer>
  );
}

export default CreateFileButton;
