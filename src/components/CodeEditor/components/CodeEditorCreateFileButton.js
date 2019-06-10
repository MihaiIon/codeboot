import React from "react";

// Component
import AddIcon from "react-ionicons/lib/MdAdd";

// Contexts
import { AppConsumer } from "../../Root";

function CreateFileButton() {
  return (
    <AppConsumer>
      {({ showCreateFileModal }) => (
        <button
          className="c-code-editor_create-file-btn"
          type="button"
          onClick={showCreateFileModal}
        >
          <AddIcon className="c-code-editor_create-file-btn_icon" color="currentColor" />
        </button>
      )}
    </AppConsumer>
  );
}

export default CreateFileButton;
