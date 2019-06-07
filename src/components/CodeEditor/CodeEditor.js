import React, { useContext, useState } from "react";

// Components
import { Controlled as CodeMirror } from "react-codemirror2";
import Navigation from "./components/CodeEditorNavigation";

import { FileSystemContext } from "../App";

// Constants
import defaultOptions from "./core/options";

function CodeEditor() {
  const {
    files,
    activeFileIndex,
    deleteFileById,
    getActiveFileValue,
    setActiveFileIndex,
    setFileValueById
  } = useContext(FileSystemContext);

  const [value, setValue] = useState(getActiveFileValue());

  return (
    <section className="c-code-editor">
      <Navigation
        files={files}
        activeFileIndex={activeFileIndex}
        deleteFileById={deleteFileById}
        setActiveFileIndex={setActiveFileIndex}
      />
      {value !== null ? (
        <CodeMirror
          className="c-code-editor_tool o-wrapper"
          value={value}
          options={{ ...defaultOptions }}
          onBeforeChange={(e, d, v) => null}
          onChange={(e, d, v) => null}
        />
      ) : (
        <div className="c-code-editor_no-editor">
          <p className="c-code-editor_no-editor_p">No file available</p>
        </div>
      )}
    </section>
  );
}

export default CodeEditor;
